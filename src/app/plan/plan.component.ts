import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../server/service.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(public serve: ServiceService) { }
  titleList3: Array<string>
  dynamic: string;
  ngOnInit() {
    this.dynamic = 'dynamic';
    this.titleList3 = ['高考录取季：考生需要做好这些事', '广西2018年普通高校考试招生一百问', '广西2018年普通高校艺术类专业招生办法公布',
      '广西招生考试院解答普通高校招生录取工作常见疑问', '广西招生考试院提醒广大考生及家长谨防招生诈骗', '警惕平行志愿填报九误区',
      '我校开展招生宣传工作'];
  }
  getArticle(title: string, type: string) {
    this.serve.getActicle(title, type);
  }
}
