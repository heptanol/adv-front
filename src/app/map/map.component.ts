import { Component,  OnInit } from '@angular/core';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserRepositoryService } from '../user/user-repository.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {NodeService} from '../node/node.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  nodes: any = [];
  error = '';
  height: number;
  latlngBounds: LatLngBounds;
  username: string;
  showNodeDetails = false;
  nodeId: number;

  constructor(
      private authenticationService: AuthenticationService,
      private userRepositoryService: UserRepositoryService,
      private mapsAPILoader: MapsAPILoader,
      private route: ActivatedRoute,
      private dialog: MatDialog,
      private nodeService: NodeService
  ) {
    this.username = this.route.snapshot.paramMap.get('id') || this.authenticationService.whoami();
    this.height = window.innerHeight;

    window.onresize = () => {
      this.height = window.innerHeight;
    };
  }


  ngOnInit() {
    this.userRepositoryService.getNodesPosition(this.username)
        .subscribe(
            data => {
              this.nodes = data;
              this.mapCenter();
            },
            error => this.error = error.message
        );
  }

  mapCenter() {
    this.mapsAPILoader.load().then(() => {
      this.latlngBounds = new window['google'].maps.LatLngBounds();
      this.nodes.forEach((node: any) => {
        this.latlngBounds.extend(new window['google'].maps.LatLng(node.latitude, node.longitude));
      });
    });
  }

    open(id) {
        this.nodeId = id;
        this.showNodeDetails = true;
    }
    close() {
        this.showNodeDetails = false;
    }
}

