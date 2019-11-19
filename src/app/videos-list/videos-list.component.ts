import { Component, OnInit, Input } from '@angular/core';
import { VideosService} from '../videos.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { Video} from 'src/app/video';


//import {Videos} from 'src/app/video/video.component'

@Component({
  selector: 'app-videos-list', 
  templateUrl:'./videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})

export class VideosListComponent implements OnInit {

  videos: Video[];
  
  private queriesListener: Subject<any> = new Subject();

  constructor(private videosService: VideosService) { }

//private spinner:NgxSpinnerService,
//========== BEHAVIOUR METHODS ===============================================================
  // N times, push one trending video taken by the API query to the video list
  
  ngOnInit() {

    this.videos = [];
    this.videosService
      .getVideos('','',2)
      .pipe(takeUntil(this.queriesListener))
      .subscribe(list => {
        for (let element of list["items"]) {
          this.videos.push(element)
        }
      });// Add element to video list as soon as the API give it to the listener
  }

  // Get videos with the corresponding topic
  launcherTopic(topic:string){
    
    this.videos = [];

    this.videosService
      .getVideos('',topic,2)
      .pipe(takeUntil(this.queriesListener))
      .subscribe(list => {
        for (let element of list["items"]) {
          this.videos.push(element)
        }
      });
  }

  //Launch search with keyword
  OnInput(keyword:string) {
    
    this.videos = [];

    this.videosService
      .getVideos(keyword,'',2)
      .pipe(takeUntil(this.queriesListener))
      .subscribe(list => {
        for (let element of list["items"]) {
          this.videos.push(element)
        }
      });
  }

}
