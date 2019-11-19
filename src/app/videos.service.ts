import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// map(project: Function, thisArg: any): Observable

// Add service to project
@Injectable({
  providedIn: 'root'
})

export class VideosService {
//apiKey : string = 'AIzaSyAcmP6Yl5ILeaiJLUDXtdKxnRKn7hv36Ng';
apiKey : string = '';
// API key that send request to Youtube API


// Initialize HttpClient in order to send http requests
  constructor(public http:HttpClient) { }


  getVideos(query:string, topic:string, maxResults:number): Observable<object> {
    // Basic, print trend
    if (query == '' && topic == '')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    }
    // Search by query (textarea)
    else if (query !== '')
    {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q='+ query + '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    }

    // Search by topic ID (buttons)
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
   
// Youtube API request type: "https://googleapis.com/youtube/v3/videos?id=ID_VIDEO&key=ID_API_KEY"
// Can use parameters, such as snippet.title category.Id localized.title 
  
/* TOPICS IDS
  Music=%2Fm%2F04rlf
  Gaming=%2fm%2f0bzvm2
  Sport=%2fm%2f06ntj
  Entertainment=%2fm%2f02jjt
  LifeStyle=%2fm%2f019_rr
  Society=%2fm%2f098wr
*/

}
