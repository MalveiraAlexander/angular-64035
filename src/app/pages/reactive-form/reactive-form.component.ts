import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.changeSecond();
  }

  save() {
    let person: PersonModel = new PersonModel();
    console.log(this.form.value.name);
    person.name = this.form.value.name;
    person.lastname = this.form.value.lastname;
    console.log('person', person);
  }

  changeSecond() {
    if (this.form.value.hasSecond) {
      this.form.controls['secondname'].enable();
      this.form.controls['secondname'].setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
      this.form.controls['secondname'].updateValueAndValidity();
    } else {
      this.form.controls['secondname'].disable();
      this.form.controls['secondname'].setValidators(null);
      this.form.controls['secondname'].reset();
      this.form.controls['secondname'].updateValueAndValidity();
    }
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      secondname: new FormControl<string>(''),
      hasSecond: new FormControl<boolean>(false)
    });
  }
}

class PersonModel {
  name: string;
  lastname: string;
}
