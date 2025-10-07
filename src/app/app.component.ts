import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cats: string[] = [];
  likedCats: string[] = [];
  currentIndex = 0;
  finished = false;

  async ngOnInit() {
    // Load 10 random cat images
    for (let i = 0; i < 10; i++) {
      this.cats.push(`https://cataas.com/cat?${Math.random()}`);
    }
  }

  onSwipe(direction: 'left' | 'right') {
    if (direction === 'right') {
      this.likedCats.push(this.cats[this.currentIndex]);
    }
    this.currentIndex++;
    if (this.currentIndex >= this.cats.length) {
      this.finished = true;
    }
  }
}
