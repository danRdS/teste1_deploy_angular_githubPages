import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sombrear: boolean = false;

  ngOnInit(): void {
    window.onscroll = () => {
      if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 30) {
        this.sombrear = true;
      } else {
        this.sombrear = false;
      }
    }
  }

}