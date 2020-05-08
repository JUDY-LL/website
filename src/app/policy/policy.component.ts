import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../server/service.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(public serve: ServiceService) { }
  titleList5: Array<string>;
  policy: string;
  ngOnInit() {
    this.policy = 'policy';
    this.titleList5 = ['教育部“六公开”“六不准”实施高校招生阳光工程', '广西2017年雨露计划学历教育扶贫培训补助政策',
      '高等学校学生资助政策简介', '广西调整完善高校学生资助政策体系', '教育部关于做好2017年普通高校招生工作的通知',
      '什么是按大类招生？', '转发教育部关于做好2018年重点高校招收农村和贫困地区学生工作的通知'];
  }
  getArticle(title: string, type: string) {
    this.serve.getActicle(title, type);
  }
}
