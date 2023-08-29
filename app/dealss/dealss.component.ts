import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealss',
  templateUrl: './dealss.component.html',
  styleUrls: ['./dealss.component.css']
})

export class DealssComponent implements OnInit {
  startTime!: number;

  elapsedTime!: number;
  running!: boolean;
  timer: any;

  constructor() { }

  ngOnInit(): void {
    this.elapsedTime = 0;
    this.running = false;
  }
  startTimer() {
    this.startTime = Date.now() - this.elapsedTime;
    this.running = true;
    this.timer = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
    }, 10);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.running = false;
  }

  resetTimer() {
    this.elapsedTime = 0;
  }
  formatTime() {
    const minutes = Math.floor(this.elapsedTime / 60000);
    const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}:${this.padNumber(milliseconds)}`;
  }

  padNumber(num: number) {
    return num.toString().padStart(2, '0');
  }
}
