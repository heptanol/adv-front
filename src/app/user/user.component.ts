import { Component, OnInit, Input } from '@angular/core';
import {UserRepositoryService} from './user-repository.service';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input()idUser: string;
    user: any = {};
    error = '';
    usernameConnected: string;
    followStatus: boolean;
    iFollow: any = [];
    followsMe: any = [];



    constructor(
        private route: ActivatedRoute,
        private userRepository: UserRepositoryService,
        private authenticationService: AuthenticationService
    ) {
        console.log('constructor');
        this.usernameConnected = authenticationService.whoami();
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.route.params.subscribe(val => {
        this.iFollow = [];
        this.followsMe = [];
            this.idUser = val['id'];
            this.userRepository.get(this.idUser)
                .subscribe(
                    data => {
                        this.user = data['user'];
                        this.followStatus = data['followStatus'];
                        this.getFollowsList(this.user);
                    },
                    error => this.error = error.message
                );
        });
    }
    
    isMe() {
        return this.usernameConnected == this.idUser;
    }

    canFollow() {
        return !this.followStatus;
    }

    following() {
        return this.followStatus;
    }

    follow() {
        this.userRepository.follow(this.user['id'])
            .subscribe(
                data => this.followStatus = true
            );
    }

    abortFollow() {
        this.userRepository.abortFollow(this.user['id'])
            .subscribe(
                data => this.followStatus = false
            );
    }

    getFollowsList(user) {
        this.userRepository.getIFollow(user['id'])
            .subscribe(
                data => this.iFollow = data
            );
        this.userRepository.getFollowsMe(user['id'])
            .subscribe(
                data => this.followsMe = data
            );
    }

}
