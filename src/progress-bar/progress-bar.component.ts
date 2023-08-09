import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @ViewChild('progressBar') progressBar: ElementRef;
  currentWidth: number = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.incrementProgressBar();
    }, 2000);
  }

  incrementProgressBar() {
    if (this.currentWidth + 10 <= 100) {
      this.currentWidth += 10;
    } else {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
