import { Component, OnInit, Input } from '@angular/core';
import { NodeService } from '../node/node.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

    @Input()userId: string = null;
    page: number = 0;
    nodes: any = [];
    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.loadMore();
    }

    loadMore() {
        this.page++;
        this.nodeService.getNodes(this.userId, this.page)
            .subscribe(
                data => this.nodes = this.nodes.concat(data)
            );
    }

}

