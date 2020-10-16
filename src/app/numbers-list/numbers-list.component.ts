import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.scss'],
})
export class NumbersListComponent implements OnInit {
  @Input() multiple: string;
  @Input() numbers: string;
  constructor() {}

  ngOnInit(): void {}

  getColor() {
    const { multiple } = this;
    let color;
    switch (multiple) {
      case '3':
        color = 'green';
        break;

      case '5':
        color = 'red';
        break;

      case '7':
        color = 'blue';
        break;

      default:
        color = 'white';
        break;
    }
    return color;
  }
}
