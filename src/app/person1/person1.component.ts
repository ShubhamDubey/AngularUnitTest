import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {
  personName: string;
  personAge: number;

  constructor() { }

  ngOnInit(): void {
  }

}
