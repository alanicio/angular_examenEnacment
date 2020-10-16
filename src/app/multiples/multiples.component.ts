import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss'],
})
export class MultiplesComponent implements OnInit {
  public initialNumber: number;
  public limitNumber: number;
  public multiplesList: Object;

  constructor() {
    this.initialNumber = 0;
    this.limitNumber = 0;
    this.multiplesList = {};
  }

  ngOnInit(): void {}

  getMultiplesInRange(multiple: number) {
    const { initialNumber, limitNumber, multiplesList } = this;
    let arrrayOfMultiples = [];
    let addingMultiple = multiple;
    /* Entering to the starting range */
    while (addingMultiple < initialNumber) {
      addingMultiple += multiple;
    }
    /* Verifying that addingMultiple be in range */
    while (addingMultiple <= limitNumber) {
      /* Saving multiples */
      arrrayOfMultiples.push(addingMultiple);

      addingMultiple += multiple;
    }
    /* Storing list of multiples as a prop */
    this.multiplesList = {
      ...multiplesList,
      [multiple.toString()]: arrrayOfMultiples,
    };
  }

  setLimitNumber(number: number) {
    this.limitNumber = number;
  }

  validateLimitNumbers() {
    const { initialNumber, limitNumber } = this;
    if (initialNumber > limitNumber || isNaN(initialNumber) || isNaN(limitNumber) || initialNumber < 0) {
      return false;
    } else {
      return true;
    }
  }

  multiplesListAsArray() {
    return Object.keys(this.multiplesList);
  }

  /* This is the function for the exam that works according the instructions given */
  examFunction = (limit: number) => {
    this.setLimitNumber(limit);
    this.getMultiplesInRange(3);
    this.getMultiplesInRange(5);
    this.getMultiplesInRange(7);
  };
}
