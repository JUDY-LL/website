import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public router: Router) { }
  title: string;
  content: string;

  getActicle(title: string, type: string) {
    if (title) {
      let url = '';
      if (type === 'home') {
        url = '/assets/essay/' + title + '.txt';
      }
      if (type === 'school') {
        url = '/assets/essay/school/' + title + '.txt';
      }
      if (type === 'dynamic') {
        url = '/assets/essay/dynamic/' + title + '.txt';
      }
      if (type === 'bylaws') {
        url = '/assets/essay/bylaws/' + title + '.txt';
      }
      if (type === 'policy') {
        url = '/assets/essay/policy/' + title + '.txt';
      }
      if (type === 'guide') {
        url = '/assets/essay/guide/' + title + '.txt';
      }
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.send(null);
      request.onreadystatechange = () => {
        this.title = title;
        this.content = request.responseText;
        if (this.content) {
          this.router.navigateByUrl('article');
        }
        console.log('获取成功');
      };
    }
  }
}
