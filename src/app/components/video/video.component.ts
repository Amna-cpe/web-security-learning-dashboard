import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  AllContents = [
    {
      url: "https://www.youtube.com/embed/5JJrJGZ_LjM",
      slides: ["https://web.stanford.edu/class/cs253/lectures/Lecture%2001.pdf"],

      reading: ["https://developer.chrome.com/blog/inside-browser-part1/",
        "https://developer.chrome.com/blog/inside-browser-part2/",
        "https://developer.chrome.com/blog/inside-browser-part3/",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"],

      assignments: ["https://web.stanford.edu/class/cs253/assign0"],
      sol: []
    },
    {},
    {},
  ]

  videoId: number = 1;
  videoUrl:SafeResourceUrl ="";
  slides:string[] = [];
  readings:string[] =[];
  assignments:string[] = [];





  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.videoId = params['id'];
      this.videoUrl = this.AllContents[params['id']-1 || 0].url || "";
      this.slides = this.AllContents[params['id']-1 || 0].slides || [];
      this.readings = this.AllContents[params['id']-1 || 0].reading || [];
      this.assignments = this.AllContents[params['id']-1 || 0].assignments || [];

      

    });


  }

}
