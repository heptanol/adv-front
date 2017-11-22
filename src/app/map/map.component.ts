import { Component,  OnInit } from '@angular/core';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserRepositoryService} from '../user/user-repository.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  
  nodes: any = [];
  error: string = '';
  height: number;
  latlngBounds : LatLngBounds;
  username: string;

  constructor(
      private authenticationService: AuthenticationService,
      private userRepositoryService: UserRepositoryService,
      private mapsAPILoader: MapsAPILoader,
      private route: ActivatedRoute
  ) {
    this.username = this.route.snapshot.paramMap.get('id') || this.authenticationService.whoami();
    this.height = window.innerHeight;

    window.onresize = () => {
      this.height = window.innerHeight;
    };
  }


  ngOnInit() {
    this.userRepositoryService.getNodes(this.username)
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
        this.latlngBounds.extend(new window['google'].maps.LatLng(node.latitude, node.longitude))
      });
    });
  }

  open (image) {
    console.log(image);
  }



}
