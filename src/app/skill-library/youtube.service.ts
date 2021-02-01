import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  // private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private PLAYLIST_ITEMS_API_URL =
    'https://www.googleapis.com/youtube/v3/playlistItems';
  private PLAYLISTS_API_URL = 'https://www.googleapis.com/youtube/v3/playlists';
  // private oldAPI_TOKEN = 'AIzaSyBJzMvEUFUO-hjfRiAVcmJk-FYSFQWZgmM';
  private API_TOKEN = 'AIzaSyDRKgPdk324gICkUK_VkRbukBXpIq5NiK8';

  constructor(private http: HttpClient) {}

  getVideos(playlistId): Observable<any> {
    // const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&modestbranding=1&part=snippet&type=video&maxResults=5`;
    const url = `${this.PLAYLIST_ITEMS_API_URL}?part=snippet&playlistId=${playlistId}&key=${this.API_TOKEN}&modestbranding=1&maxResults=4`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }

  getPlaylists(): Observable<any> {
    const url = `${this.PLAYLISTS_API_URL}?part=snippet&channelId=UCdh1NJmsR51XoZ2NJu4y4dw&key=${this.API_TOKEN}`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}
