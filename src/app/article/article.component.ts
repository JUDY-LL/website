import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../server/service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(public serve: ServiceService) { }
  title: string;
  content: string;
  time: any;
  count: number;
  ngOnInit() {
    this.time = '2020-5-7';
    this.count = 99;
    this.getContent();
  }
  getContent() {
    if (this.serve.title) {
      this.title = this.serve.title;
      this.content = this.serve.content;
      console.log(this.serve.content);
    }
  }
}
