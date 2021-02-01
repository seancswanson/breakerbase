import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Video } from './video.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-library',
  templateUrl: './skill-library.component.html',
  styleUrls: ['./skill-library.component.scss'],
})
export class SkillLibraryComponent implements OnInit {
  videos: Video[] = [];
  isLoading: Boolean = true;
  panels = [
    {
      active: false,
      name: 'History',
      subtitle:
        "Explore the roots of Hip Hop and the context of breakin' around the world.",
    },
    {
      active: false,
      name: 'Top Rock',
      subtitle:
        '"Top Rock is when a B-Boy or B-Girl is dancing while still standing and it\'s how breakers start their throw down, before going to the floor."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Go Downs',
      subtitle:
        '"A Go Down is the move a breaker uses to go from their top rock down to the floor. Preferably this is done in a seamless transition that comes out of the flow of a breaker\'s top rock, taking them to the floor without stopping the rhythm of their dance."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Footwork',
      subtitle:
        '"Footwork in breaking is when a B-Boy or B-Girl is down on the floor using their hands for support as they move their legs through a variety of breaking footwork steps."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Freezes',
      subtitle:
        '"A Freeze is when a B-Boy or B-Girl makes, hits and holds a solid shape with their body for a few seconds. This is usually done to hit a prominent sound in the music, and is a way of putting a full stop ending on a combination of movements that a breaker has been displaying, with the Freeze usually signifying the end of that particular sequence."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Transitions',
      subtitle:
        '"Transitions are the movements breakers use to get in and out of their moves, or to combine the footwork steps, freezes, tricks and power moves that they like to do in combination. Transitions done well are never truly seen as they are seamless in their execution and allow a B-Boy or B-Girl to keep a nice dynamic and smooth flow while breaking."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Power',
      subtitle:
        '"Power moves are the most dynamic element of breaking, and even though everything in breaking can be done with power a \'Power Move,\' in generally, is when a B-Boy or B-Girl propels their whole body into a continued spinning or rotational motion, while balancing on their hands, elbows, head, back or shoulders. They also will either do one power move continuously in a sequence and end it in a freeze, or do a combination of different power moves, with one flowing into the other."',
      subtitleCredit: 'redbull',
    },
    {
      active: false,
      name: 'Musicality',
      subtitle:
        '"Dance musicality is how dancers hear, interpret, and dance to music. Dancers can demonstrate dance musicality in several ways – which sounds they choose to dance to, how they highlight the sounds, how they emote the mood of the song."',
      subtitleCredit: 'steezy',
    },
  ];
  constructor(
    private youtube: YoutubeService,
    private sanitizer: DomSanitizer
  ) {
    youtube.getVideos('bboy bgirl history').subscribe(
      (response) => {
        console.log(response);
        this.videos = response.map((item) => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: sanitizer.bypassSecurityTrustResourceUrl(
              `https://www.youtube.com/embed/${item.id.videoId}`
            ),
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url,
          };
        });
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit() {}
}
