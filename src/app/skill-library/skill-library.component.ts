import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Video } from './video.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-library',
  templateUrl: './skill-library.component.html',
  styleUrls: ['./skill-library.component.scss']
})

export class SkillLibraryComponent implements OnInit {
  videos: Video[] = [];
  isLoading: Boolean = true;

  constructor(private youtube: YoutubeService, private sanitizer: DomSanitizer) {
    youtube.getVideos('bboy history').subscribe((response) => {
      console.log(response);
      this.videos = response.map(item => {
        return {
          title: item.snippet.title,
          videoId: item.id.videoId,
          videoUrl: sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${item.id.videoId}`),
          channelId: item.snippet.channelId,
          channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          publishedAt: new Date(item.snippet.publishedAt),
          thumbnail: item.snippet.thumbnails.high.url
        };
      });
    },(err) => {
      console.log(err)
    }, () => {
      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}
