import {Component, Input} from '@angular/core';
import {VideosListComponent} from '../videos-list/videos-list.component';



@Component({
  selector: 'app-videos-input',
  templateUrl: './videos-input.component.html',
  styleUrls: ['./videos-input.component.css']
})
export class VideosInputComponent {

  @Input() nbVideos: number;

  constructor(private VideoList: VideosListComponent) { }
  // Get videos with the corresponding topic
  launcherTopic(topic: string) {
    this.VideoList.printVideoList('', topic, this.nbVideos);

  }

  // Launch search with keyword
  OnInput(keyword: string) {
    this.VideoList.printVideoList(keyword, '', this.nbVideos);
  }

}
