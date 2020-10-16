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
        color = '#74bd25';
        break;

      case '5':
        color = '#ae1c1c';
        break;

      case '7':
        color = '#24a1cd';
        break;

      default:
        color = 'white';
        break;
    }
    return color;
  }
}
