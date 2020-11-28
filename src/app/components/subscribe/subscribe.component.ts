import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  private phoneNumberRegExp = new RegExp('^(\\((00|\\+)39\\)|(00|\\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89])\\d{7}');

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.pattern(this.phoneNumberRegExp)],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (!this.subscribeForm.valid) {
      return;
    }
    console.log(this.subscribeForm.value);
  }

}
