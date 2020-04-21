import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Person1Component } from './person1/person1.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CounterComponent,
    LoginformComponent,
    Person1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
