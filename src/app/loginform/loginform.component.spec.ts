// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginformComponent } from './loginform.component';
// import { FormBuilder } from '@angular/forms';

// xdescribe('LoginFormComponent', () => {

//   let loginFormComponent: LoginformComponent;

//   beforeEach(() => {

//     loginFormComponent = new LoginformComponent(new FormBuilder);

//   })

//   it('should create a form with 3 controls', () => {

//     expect(loginFormComponent.loginForm.contains('name')).toBe(true);
//     expect(loginFormComponent.loginForm.contains('password')).toBeTruthy();
//     expect(loginFormComponent.loginForm.contains('email')).toBeTruthy();

//   })

//   it('should make the name control required', () => {

//     let nameControl = loginFormComponent.loginForm.get('name');

//     nameControl.setValue('');

//     expect(nameControl.valid).toBeFalsy();

//   })

//   it('should use password with minimum 8 characters', () => {

//     let passwordControl = loginFormComponent.loginForm.get('password');

//     passwordControl.setValue('12345678')

//     expect(passwordControl.valid).toBeTruthy();

//   })

//   it('should validate the email input type', () => {

//     let emailControl = loginFormComponent.loginForm.get('email');

//     emailControl.setValue('raj@gmail.com')

//     expect(emailControl.valid).toBeTruthy();

//   })

// })