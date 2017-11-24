import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
    imageUrl: string;
    title: string;

    constructor(
        public dialogRef: MatDialogRef<NodeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.imageUrl = data.image;
        this.title = data.title;
    }

    ngOnInit() {
    }

}
