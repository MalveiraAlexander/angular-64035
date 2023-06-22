import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  person: PersonModel = {
    name: undefined,
    lastname: undefined
  };

  save(form: NgForm) {
    console.log(form.form);
  }
}


class PersonModel {
  name: string;
  lastname: string;
}
