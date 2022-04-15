import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-contents',
  templateUrl: './video-contents.component.html',
  styleUrls: ['./video-contents.component.css']
})
export class VideoContentsComponent implements OnInit {

  
  @Input() title:string = "";
  @Input() time:string = "";
  @Input() id:number = 1;

  
  constructor() { }

  ngOnInit(): void {
  }

  changeVideo(){
    window.location.href = `/?id=${this.id}`
    console.log("first")
  }

}
