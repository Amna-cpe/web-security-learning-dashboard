import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {

  @Input() title:string="";
  @Input("num") numberOfVideo = 3;
  @Input() time:string = "";
  nohide:boolean = true;
 
  hide(){
    this.nohide = !this.nohide;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
