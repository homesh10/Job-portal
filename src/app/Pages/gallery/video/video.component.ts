import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videos = [
    { src: 'video1.mp4', title: 'Video 1' },
    { src: 'video2.mp4', title: 'Video 2' },
    { src: 'video3.mp4', title: 'Video 3' },
    { src: 'video4.mp4', title: 'Video 4' }
  ];
  
  selectedVideo: any = {};
  isModalOpen = false;

  openFullScreenModal(video: any) {
    this.selectedVideo = video;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  previousVideo() {
    const currentIndex = this.videos.indexOf(this.selectedVideo);
    const previousIndex = (currentIndex === 0) ? this.videos.length - 1 : currentIndex - 1;
    this.selectedVideo = this.videos[previousIndex];
  }

  nextVideo() {
    const currentIndex = this.videos.indexOf(this.selectedVideo);
    const nextIndex = (currentIndex === this.videos.length - 1) ? 0 : currentIndex + 1;
    this.selectedVideo = this.videos[nextIndex];
  }
}

