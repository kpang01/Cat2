import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent {
  @Input() catUrl = '';
  @Output() swipeleft = new EventEmitter<void>();
  @Output() swiperight = new EventEmitter<void>();

  liked = false;
  private isDragging = false;
  private startX = 0;
  private swipeHandled = false; // Add flag to prevent double-triggering

  onSwipe(direction: 'left' | 'right') {
    if (this.swipeHandled) {
      return;
    }
    this.swipeHandled = true;
    setTimeout(() => this.swipeHandled = false, 300); // Debounce for 300ms

    if (direction === 'left') {
      this.swipeleft.emit();
    } else {
      this.swiperight.emit();
    }
  }

  toggleLike() {
    this.liked = !this.liked;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const currentX = event.clientX;
      const diffX = currentX - this.startX;

      if (Math.abs(diffX) > 50) { // Threshold for swipe
        if (diffX > 0) {
          this.onSwipe('right');
        } else {
          this.onSwipe('left');
        }
        this.isDragging = false; // Stop dragging after a swipe
      }
    }
  }
}
