import { Pipe, PipeTransform } from '@angular/core';
import { SignedUp } from '../models/signedUp';
import { BackendService } from '../services/backend.service';

@Pipe({
  name: 'successOperation'
})
export class SuccessOperationPipe implements PipeTransform {

  transform(signedUp: SignedUp, titleCourse: string): unknown {
    return `Complimenti ${signedUp.name} ${signedUp.surname}, la tua iscrizione al corso ${titleCourse} è avvenuta con successo.`;
  }

}
