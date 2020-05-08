import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../server/service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(public serve: ServiceService) { }
  titleList2: Array<string>;
  titleList4: Array<string>;
  titleList5: Array<string>;
  school: string;
  bylaws: string;
  guide: string;
  ngOnInit() {
    this.school = 'school';
    this.bylaws = 'bylaws';
    this.guide = 'guide';
    this.titleList2 = ['学院简介', '发展历史', '科研概况', '师资力量'];
    this.titleList4 = ['招生章程'];
    this.titleList5 = ['全日制新生指南', '专升本新生指南'];
  }
  getArticle(title: string, type: string) {
    this.serve.getActicle(title, type);
  }
}
