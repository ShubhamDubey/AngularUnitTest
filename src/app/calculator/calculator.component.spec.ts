import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  it('should return addition of two numbers', () => {

    let component: CalculatorComponent;
    expect(component.add(10, 10)).toEqual(20);

  });

  it('should return difference of two numbers', () => {

    let component: CalculatorComponent;
    expect(component.subtract(10, 10)).toEqual(0);
  });

  it('should return multi of two numbers', () => {

    let component: CalculatorComponent;
    expect(component.multiply(10, 10)).toEqual(100);
  });

  it('should return divi of two numbers', () => {

    let component: CalculatorComponent;
    expect(component.divide(10, 10)).toEqual(1);
  });



  // let component: CalculatorComponent;
  // let fixture: ComponentFixture<CalculatorComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CalculatorComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CalculatorComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


});
