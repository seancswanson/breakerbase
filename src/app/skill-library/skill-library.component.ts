import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Video } from './video.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { panels } from './panels';

@Component({
  selector: 'app-skill-library',
  templateUrl: './skill-library.component.html',
  styleUrls: ['./skill-library.component.scss'],
})
export class SkillLibraryComponent implements OnInit {
  playlists: String[] = [
    // History
    'PLFz8VAUr-Y01n4VkAlPXvOVuZ0CDYq_Ow',
    // Top Rock
    'PLFz8VAUr-Y02jh3FybWNK1OyLWccU3d0P',
    // Go Downs
    'PLFz8VAUr-Y00g1-f571-7ePwgP4tfMN4B',
    // Footwork,
    'PLFz8VAUr-Y00weQTIfD6T6FKvkuBDyy7J',
    // Freezes
    'PLFz8VAUr-Y03NpSLvFArCKOZUndP8KqB8',
    // Transitions
    'PLFz8VAUr-Y03CJQKl3Dh_XpdG2wIknMLW',
    // Power
    'PLFz8VAUr-Y03Vms2Aj7sswqoLM9MXCqhw',
    // Musicality
    'PLFz8VAUr-Y00M6kmvSA3L-5bnGZl2NobL',
  ];
  videos: Video[] = [];
  isLoading: Boolean = true;
  panels = panels;
  constructor(
    private youtube: YoutubeService,
    private sanitizer: DomSanitizer
  ) {
    // Check to see if there's already a copy of the videos in LocalStorage.
    if (false) {
      // if (
      //   localStorage.getItem('videoCache') &&
      //   JSON.parse(localStorage.getItem('videoCache')).length === 8
      // ) {
      // If yes, use the cache to inform this.videos
      console.log(
        'LocalStorage Cache exists and here are its contents:',
        JSON.parse(localStorage.getItem('videoCache'))
      );
    } else {
      // If no, make the API calls and build this.videos
      console.log('LocalStorage cache does not yet exist or is incomplete.');

      // Loop through my curated playlists.
      this.playlists.forEach((playlistId, i) => {
        console.log(
          'Pre Call - Getting response from ' + playlistId + ' playlist.'
        );

        this.isLoading = true;

        // Send the playlistId from this.playlists loop to the service method.
        youtube.getVideos(playlistId).subscribe(
          (response) => {
            console.log(
              'Made the Call- Got a response from ' + playlistId + ' playlist',
              response
            );

            // Each getVideos call returns a list of playlistItems that represent the topic.
            // Each playlist topic gets its own index in this.videos.
            this.videos[i] = response.map((item) => {
              // Take each video in the repsonse and craft a videoObj.
              // This.videos[i] will contain an arr of its videoObjs.
              let videoObj = {
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId,
                videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
                  `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`
                ),
                channelId: item.snippet.channelId,
                channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                publishedAt: new Date(item.snippet.publishedAt),
                thumbnail: item.snippet.thumbnails.high.url,
              };

              return videoObj;
            });
          },
          (err) => {
            console.log(err);
          },
          () => {
            if (this.videos.length === 8) {
              console.log('Every call has completed.');

              localStorage.setItem('videoCache', JSON.stringify(this.videos));
              console.log(
                'Set LocalStorage to:',
                JSON.parse(localStorage.getItem('videoCache'))
              );
            }
            this.isLoading = false;
          }
        );
      });
    }
  }

  ngOnInit() {}
}
