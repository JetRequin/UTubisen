import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  //apiKey = 'AIzaSyAcmP6Yl5ILeaiJLUDXtdKxnRKn7hv36Ng';
  apiKey = '';

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable<object> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
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
  getVideosTrendTopic(query, topic, maxResults): Observable<object> {
    if (query == '' && topic == '')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    }
    else if (query !== '')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q='+ query + '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    }
    else if (topic == 'Music')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2Fm%2F04rlf&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
    else if (topic == 'Gaming')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2fm%2f0bzvm2&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
    else if (topic == 'Sport')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2fm%2f06ntj&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
    else if (topic =='Entertainment')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2fm%2f02jjt&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
    else if (topic == 'LifeStyle')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2fm%2f019_rr&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
    else if (topic == 'Society')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&topicId=%2fm%2f098wr&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    }
  }
}
