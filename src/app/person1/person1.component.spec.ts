import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Person1Component } from './person1.component';
import { FormsModule } from '@angular/forms';

describe('Person1Component', () => {
  let component: Person1Component;
  let fixture: ComponentFixture<Person1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Person1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Person1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');

    fixture.detectChanges();

    nameInput.value = 'Raj gs';
    ageInput.value = '20';

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    expect(component.personName).toBe('Raj gs');
    expect(component.personAge.toString()).toBe('20');
  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');

    const displayName: HTMLInputElement = hostElement.querySelector('#disName');
    const displayAge: HTMLInputElement = hostElement.querySelector('#disAge');

    nameInput.value = 'Raj gs';
    ageInput.value = '20';

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(displayName.textContent).toBe('Raj gs');
    expect(displayAge.textContent).toBe('20');
  });



  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
