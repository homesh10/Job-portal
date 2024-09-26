import { CommonModule } from '@angular/common';
import { Component ,AfterViewInit, } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],

})
export class ImageComponent implements AfterViewInit {
  images = [
    { src: '../../assets/img-gallery/gadhiya pahad.png', title: 'Gadiya Mountain' },
    { src: '../../assets/img-gallery/colletorate.jpg', title: 'colletorate kanker' },
    { src: '../../assets/img-gallery/malaj wf.jpg', title: 'Malanjhkudum Waterfall' },
    { src: '../../assets/img-gallery/kanker palace.jpg', title: 'Kanker Palace' },
    { src: '../../assets/img-gallery/gmc kanker.jpg', title: 'Govt. Medical College Kanker' },
    { src: '../../assets/img-gallery/pg clg.jpg', title: 'Govt Pg College Kanker' },
    { src: '../../assets/img-gallery/govt hos.jpg', title: 'Govt Hospital' },
    { src: '../../assets/img-gallery/ona kona.jpg', title: 'Temple' },

    // Add more images as needed
  ];


  isModalOpen = false;
  selectedImageIndex: number = 0;

  get selectedImage() {
    return this.images[this.selectedImageIndex];
  }

  ngAfterViewInit() {
    AOS.init(); // Initialize AOS after view initialization
  }

  openFullScreenModal(image: any) {
    this.selectedImageIndex = this.images.indexOf(image);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  previousImage() {
    this.selectedImageIndex = (this.selectedImageIndex > 0) ? this.selectedImageIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.selectedImageIndex = (this.selectedImageIndex < this.images.length - 1) ? this.selectedImageIndex + 1 : 0;
  }
}