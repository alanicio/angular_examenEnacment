import { Component, OnInit } from '@angular/core';

type RangeOfNumbers = {
  initialNumber: number;
  limitNumber: number;
  multiplesList: Object;
};

@Component({
  selector: 'multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss'],
})
export class MultiplesComponent implements OnInit {
  public rangeOfNumbers: RangeOfNumbers;

  constructor() {
    const initialNumber = 0;
    const limitNumber = 0;
    const multiplesList = {};
    this.rangeOfNumbers = {
      initialNumber,
      limitNumber,
      multiplesList,
    };
  }

  ngOnInit(): void {}

  getMultiplesInRange(multiple: number) {
    const { initialNumber, limitNumber, multiplesList } = this.rangeOfNumbers;
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
    this.rangeOfNumbers.multiplesList = {
      ...multiplesList,
      [multiple.toString()]: arrrayOfMultiples,
    };
  }

  setLimitNumber(number: number) {
    this.rangeOfNumbers.limitNumber = number;
  }

  /* This is the function for the exam that works according the instructions given */
  examFunction = (limit: number) => {
    this.setLimitNumber(limit);
    this.getMultiplesInRange(3);
    this.getMultiplesInRange(5);
    this.getMultiplesInRange(7);
  };
}
