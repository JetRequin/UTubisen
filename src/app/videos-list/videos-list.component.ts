import { Component, OnInit, Input, Output } from '@angular/core';
import { VideosService} from '../videos.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Video} from 'src/app/video';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})

export class VideosListComponent implements OnInit {

  nbVideos = 10;
  videos: Video[];

  private queriesListener: Subject<any> = new Subject();

  constructor(private videosService: VideosService) { }

// ========== BEHAVIOUR METHODS ===============================================================
  // N times, push one trending video taken by the API query to the video list

  ngOnInit() {
    this.printVideoList('', '', this.nbVideos);
  }

  printVideoList(keyword: string, topic: string, nbVideos: number) {
    const items = 'items';
    this.videos = [];

    this.videosService
      .getVideos(keyword, topic, nbVideos)
      .pipe(takeUntil(this.queriesListener))
      .subscribe(list => {
        for (const element of list[items]) {
          this.videos.push(element);
       }
      });
  }// Add element to video list as soon as the API give it to the listener

/* TO DO
  deleteVideo() {
    this.delete.emit();
  }
   @Output() delete = new EventEmitter<>();

*/
}
