import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  days: string = '';

  hours: string = '';

  minutes: string = '';

  seconds: string = '';

  constructor(){}

  ngOnInit(): void {
    this.countDown();
  }
  ngOnDestroy(): void {
    
  }

  countDown()
  {
    const targetDate = new Date('October 19, 2024 18:00:00').getTime();

    const countdown = setInterval(() => {

        const now = new Date().getTime();

        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (86400000));
        const hours = Math.floor((timeDifference % (86400000)) / (3600000));
        const minutes = Math.floor((timeDifference % (3600000)) / (60000));
        const seconds = Math.floor((timeDifference % (60000)) / 1000);
        this.days = days >= 10 ? `${days}` : `0${days}`
        this.hours = hours >= 10 ? `${hours}` : `0${hours}`
        this.minutes = minutes >= 10 ? `${minutes}` : `0${minutes}`
        this.seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`

        if (timeDifference < 0) {
            clearInterval(countdown);
        }
    }, 1000);

  }
 }
