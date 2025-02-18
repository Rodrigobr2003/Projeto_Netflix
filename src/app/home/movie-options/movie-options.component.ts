import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-options',
  templateUrl: './movie-options.component.html',
  styleUrls: ['./movie-options.component.css']
})
export class MovieOptionsComponent {
  @ViewChild('track', { static: false }) track!: ElementRef;

  index: number = 0;
  totalImages: number = 5;
  imagesPerView: number = 3;

  updateCarousel(): void {
    if (this.track) {
      this.track.nativeElement.style.transform = `translateX(-${this.index * (100 / this.imagesPerView)}%)`;
    }
  }

  prev(): void {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.totalImages - this.imagesPerView;
    }
    this.updateCarousel();
  }

  next(): void {
    if (this.index < this.totalImages - this.imagesPerView) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.updateCarousel();
  }
}
