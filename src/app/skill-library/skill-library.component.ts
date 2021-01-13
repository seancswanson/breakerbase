import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Video } from './video.interface';

@Component({
  selector: 'app-skill-library',
  templateUrl: './skill-library.component.html',
  styleUrls: ['./skill-library.component.scss']
})

export class SkillLibraryComponent implements OnInit {
  videos: Video[] = [];

  constructor(private youtube: YoutubeService) {
    youtube.getVideos('bboy').subscribe((response) => {
      console.log(response);
    })
  }

  ngOnInit() {
  }

}
