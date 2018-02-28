import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('size') size;
  pages;

  constructor() {
  }

  ngOnInit() {
    const pageCnt = environment.provision.pageCount;
    if (this.size > pageCnt) {
      this.pages = [];
      let startIndex = 0;
      let endIndex = pageCnt - 1;
      let pageNum = 0;
      while ((this.size - 1) > endIndex) {
        this.pages.push({startIndex: startIndex, endIndex: endIndex, pageNum: ++pageNum});
        startIndex = endIndex + 1;
        endIndex = endIndex + pageCnt;
      }
      this.pages.push({startIndex: startIndex, endIndex: this.size - 1, pageNum: ++pageNum});
    }
  }

  logData(page) {
    console.log(page);
  }

  goToPage(startIndex, endIndex) {
  }
}
