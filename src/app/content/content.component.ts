import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../server/service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public serve: ServiceService) { }

  title: string;
  content: string;
  titleList: Array<string>;
  titleList2: Array<string>;
  titleList3: Array<string>;
  titleList5: Array<string>;
  home: string;
  dynamic: string;
  policy: string;
  ngOnInit() {
    this.home = 'home';
    this.dynamic = 'dynamic';
    this.policy = 'policy';
    this.getTitleList();
  }
  getTitleList() {
    // this.title = '广西2018年普通高考报名考生须知';
    this.titleList = ['计算机类专业介绍', '【疫情防控】计算机与信息安全学院多次召开疫情防控工作网络视频会议',
      '【疫情防控】计算机与信息安全学院召开疫情防控领导工作小组扩大会议', '爱心，在这里传递—我院师生踊跃捐款支援疫情防控工作',
      '湖北师生党员召开第三临时党支部成立大会', '计算机与信息安全学院党委“不忘初心、牢记使命”主题教育整治工作推进情况',
      '计算机与信息安全学院召开教工党员大会'];
    this.titleList2 = ['学院简介', '发展历史', '科研概况', '师资力量'];
    this.titleList3 = ['高考录取季：考生需要做好这些事', '广西2018年普通高校考试招生一百问', '广西2018年普通高校艺术类专业招生办法公布',
    '广西招生考试院解答普通高校招生录取工作常见疑问', '广西招生考试院提醒广大考生及家长谨防招生诈骗', '警惕平行志愿填报九误区',
    '我校开展招生宣传工作'];
    this.titleList5 = ['教育部“六公开”“六不准”实施高校招生阳光工程', '广西2017年雨露计划学历教育扶贫培训补助政策',
      '高等学校学生资助政策简介', '广西调整完善高校学生资助政策体系', '教育部关于做好2017年普通高校招生工作的通知',
      '什么是按大类招生？', '转发教育部关于做好2018年重点高校招收农村和贫困地区学生工作的通知'];
  }
  getArticle(title: string, type: string) {
    this.serve.getActicle(title, type);
  }

}
