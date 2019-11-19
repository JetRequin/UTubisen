import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// map(project: Function, thisArg: any): Observable

// Add service to project
@Injectable({
  providedIn: 'root'
})

export class VideosService {

apiKey = 'AIzaSyBV1V__rPr1FHHaiVUybvWorMhWMtJlKNI';
// apiKey : string = '';
// API key that send request to Youtube API


// Initialize HttpClient in order to send http requests
  constructor(public http: HttpClient) { }


  getVideos(query: string, topic: string, maxResults: number): Observable<object> {

    const apiUrl = 'https://www.googleapis.com/youtube/v3/search?key=';
    const apiUrl2 = '&chart=mostPopular&regionCode=us&part=snippet &type=video,id&maxResults=';
    // Basic, print trend
    if (query === '' && topic === '') {
      const url = apiUrl + this.apiKey + apiUrl2 + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    } else if (query !== '') {
      const url = apiUrl + this.apiKey + '&q=' + query + apiUrl2 + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));

    } else if (topic === 'Music') {
      const url = apiUrl + this.apiKey + '&topicId=%2Fm%2F04rlf&' + apiUrl2 + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    } else if (topic === 'Gaming') {
      const url = apiUrl + this.apiKey + '&topicId=%2fm%2f0bzvm2&' + apiUrl2  + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    } else if (topic === 'Sport') {
      const url = apiUrl + this.apiKey + '&topicId=%2fm%2f06ntj&' + apiUrl2  + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    } else if (topic === 'Entertainment') {
      const url = apiUrl + this.apiKey + '&topicId=%2fm%2f02jjt&' + apiUrl2  + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    } else if (topic === 'LifeStyle') {
      const url = apiUrl + this.apiKey + '&topicId=%2fm%2f019_rr&' + apiUrl2  + maxResults;
      return this.http.get(url)
        .pipe(map((res) => {
          return res;
        }));
    } else if (topic === 'Society') {
      const url = apiUrl + this.apiKey + '&topicId=%2fm%2f098wr&' + apiUrl2  + maxResults;
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
