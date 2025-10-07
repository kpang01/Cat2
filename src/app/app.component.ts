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
  loading = true; // Add loading state

  async ngOnInit() {
    this.loading = true; // Set loading to true before fetching
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Load 10 random cat images
    for (let i = 0; i < 10; i++) {
      this.cats.push(`https://cataas.com/cat?${Math.random()}`);
    }
    this.loading = false; // Set loading to false after fetching
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
