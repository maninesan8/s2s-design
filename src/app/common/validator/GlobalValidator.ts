import {AbstractControl, ValidationErrors} from '@angular/forms';

export class GlobalValidator {

  static emailFormat(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if ('' !== control.value && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {'emailFormat': true};
    }
    return null;

  }
}
