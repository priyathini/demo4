import { style } from '@angular/animations';
import { Component, ContentChild, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  today = new Date();
  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  curntTime: any;

  slot1: any;
  slot2: any;
  slot3: any;
  slot4: any;
  slot5: any;
  slot6: any;
  slot7: any;
  slot8: any;
  slot9: any;



  slots: any = [];
  dates: any = [];
  gap: any;
  constructor() { }


  ngOnInit(): void {
    moment().startOf('day');
    this.day1 = moment(this.today).format('MMM D');
    console.log(this.day1)
    this.day2 = moment(this.today).add(1, 'day').format('MMM D');
    console.log(this.day2)
    this.day3 = moment(this.today).add(2, 'days').format('MMM D');
    console.log(this.day3)
    this.day4 = moment(this.today).add(3, 'days').format('MMM D');
    console.log(this.day4)
    this.day5 = moment(this.today).add(4, 'days').format('MMM D');
    console.log(this.day5)

    this.dates.push(this.day1, this.day2, this.day3, this.day4, this.day5)
    this.getSlots(this.day1);
  }
  getSlots(date: any) {
    this.slots = []
    this.curntTime = moment().format('hh:mm A');
    this.gap = moment(this.curntTime, "HH:mmA").add(4, 'hours').format('hh:mmA');
    console.log('curnt', this.gap)
    console.log(this.slot1);
    var time = "9:00:00";
    this.slot1 = moment(time, "HH:mm").format('hh:mm A');
    console.log(this.slot1);
    this.slot2 = moment(time, "HH:mm").add(1, 'hour').format('hh:mm A');
    this.slot3 = moment(time, "HH:mm").add(2, 'hour').format('hh:mm A');
    this.slot4 = moment(time, "HH:mm").add(3, 'hour').format('hh:mm A');
    this.slot5 = moment(time, "HH:mm").add(4, 'hour').format('hh:mm A');
    this.slot6 = moment(time, "HH:mm").add(5, 'hour').format('hh:mm A');
    this.slot7 = moment(time, "HH:mm").add(6, 'hour').format('hh:mm A');
    this.slot8 = moment(time, "HH:mm").add(7, 'hour').format('hh:mm A');
    this.slot9 = moment(time, "HH:mm").add(8, 'hour').format('hh:mm A');
    console.log((moment(this.slot2, 'h:mma').isBefore(moment(this.curntTime, 'h:mma'))))

    var timearr = []
    timearr.push(this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, this.slot6, this.slot7, this.slot8, this.slot9);
    for (var arr of timearr) {
      if (moment(date).isSame(this.day1)) {
        console.log('gap', this
          .gap);

        if (moment(arr, 'h:mma').isAfter(moment(this.gap, 'h:mma'))) {
          this.slots.push(arr)
          console.log(arr)
        }
      } else {
        this.slots.push(arr);
        console.log('els', this.slots);

      }
    
      }

    }
  }










