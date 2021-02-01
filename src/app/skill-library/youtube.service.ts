import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  // private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  // private API_TOKEN = 'AIzaSyBJzMvEUFUO-hjfRiAVcmJk-FYSFQWZgmM';
  private API_TOKEN = 'AIzaSyDRKgPdk324gICkUK_VkRbukBXpIq5NiK8';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    // const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&modestbranding=1&part=snippet&type=video&maxResults=5`;
    const url = `${this.API_URL}?part=snippet&playlistId=PLFz8VAUr-Y01n4VkAlPXvOVuZ0CDYq_Ow&key=${this.API_TOKEN}&modestbranding=1&part=snippet&type=video&maxResults=2`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}
