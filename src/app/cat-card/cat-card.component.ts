import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent {
  @Input() catUrl = '';
  @Output() swipe = new EventEmitter<'left' | 'right'>();

  onSwipe(direction: 'left' | 'right') {
    this.swipe.emit(direction);
  }
}
