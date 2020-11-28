import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignedUp } from 'src/app/models/signedUp';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  private signedUp: SignedUp;
  private trainId: string;
  private phoneNumberRegExp = new RegExp('^(\\((00|\\+)39\\)|(00|\\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89])\\d{7}');

  constructor(private formBuilder: FormBuilder,
    private backendService: BackendService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.pattern(this.phoneNumberRegExp)],
      email: [null, [Validators.required, Validators.email]]
    });

    this.trainId = this.route.snapshot.paramMap.get('id');
  }

  async submit(): Promise<void> {
    if (!this.subscribeForm.valid) {
      return;
    }
    const signedUps: SignedUp[] = await this.backendService.getSignUpsList();
    const id = Math.max.apply(Math, signedUps.map(o => o.id));

    this.signedUp = {
      id: id + 1,
      name: this.subscribeForm.controls.firstName.value,
      surname: this.subscribeForm.controls.lastName.value,
      trainId: this.trainId,
      email: this.subscribeForm.controls.email.value,
      phone: this.subscribeForm.controls.phoneNumber.value
    };

    this.backendService.signUpTraining(this.signedUp).subscribe(evt => console.log('Subscribed!'));
  }

}
