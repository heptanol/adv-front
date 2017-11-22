import { Component,  OnInit } from '@angular/core';
import { LatLngBounds, MapsAPILoader } from '@agm/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserRepositoryService} from '../user/user-repository.service';


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

  constructor(
      private authenticationService: AuthenticationService,
      private userRepositoryService: UserRepositoryService,
      private mapsAPILoader: MapsAPILoader
  ) {
    this.height = window.innerHeight - 51;

    window.onresize = () => {
      this.height = (window.innerHeight - 51);
    };
  }


  ngOnInit() {
    console.log(window);
    let userName = this.authenticationService.whoami();
    this.userRepositoryService.getNodes(userName)
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
