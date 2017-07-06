import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;
  itemID: any;

  constructor(private hnService: HackernewsApiService,
  private route: ActivatedRoute) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.itemID = +params['id'];
      console.log(this.itemID)
      this.hnService.getComments(this.itemID).subscribe(data => {
        this.item = data;
        console.log(this.item)
      }, error => console.log('Could not load item ' + this.itemID));
    });
  }
}
