import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'get-number',
  templateUrl: './get-number.component.html',
  styleUrls: ['./get-number.component.scss'],
})
export class GetNumberComponent implements OnInit {
  @Input() rangeOfNumbers: Object;
  @Input() examFunction: Function;
  constructor() {}

  ngOnInit(): void {}

  keyupHandler(event: any) {
    const number = parseInt(event.target.value, 10);
    this.examFunction(number);
  }
}
