import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyB1ZggBuA4hVSxYqw5nRMgl_OelvQTMKIg';

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable<object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
  /*
  Music=%2Fm%2F04rlf
  Gaming=%2fm%2f0bzvm2
  Sport=%2fm%2f06ntj
  Entertainment=%2fm%2f02jjt
  LifeStyle=%2fm%2f019_rr
  Society=%2fm%2f098wr
  */
  getVideosTrendTopic(query, topic, maxResults): Observable<object>
  {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + query + '&topicId=' + topic + '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }

}
