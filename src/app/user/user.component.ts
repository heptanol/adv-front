import { Component, OnInit, Input } from '@angular/core';
import {UserRepositoryService} from './user-repository.service';
import { ActivatedRoute } from '@angular/router';

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


    constructor(
        private route: ActivatedRoute,
        private userRepository: UserRepositoryService,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(val => {
            this.idUser = val.id;
            this.userRepository.get(this.idUser)
                .subscribe(
                    data => this.user = data,
                    error => this.error = error.message
                );
        });
    }

}
