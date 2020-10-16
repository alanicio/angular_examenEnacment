import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNumberComponent } from './get-number.component';

describe('GetNumberComponent', () => {
  let component: GetNumberComponent;
  let fixture: ComponentFixture<GetNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
