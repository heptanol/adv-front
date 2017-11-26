import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {NodeService} from './node.service';

export class Node {
    image: string;
    title: string;
}
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit, OnDestroy {

    @Input()nodeId: number;

    node: Node = new Node();
    busy = true;
    error: string;
    constructor(private nodeService: NodeService) {
    }

    ngOnInit() {
        this.nodeService.get(this.nodeId)
            .subscribe(
                data => {
                    this.node = data;
                    console.log(this.node);
                    this.busy = false;
                },
                error => this.error = error
            );
    }
    ngOnDestroy(): void {
    }

}
