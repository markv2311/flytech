import { Directive, EventEmitter, Output, HostListener } from '@angular/core';
import Swal from 'sweetalert2';

@Directive ({
// tslint:disable-next-line: directive-selector
  selector: '[confirm]'
})

export class ConfirmDirective {
  @Output() confirm = new EventEmitter<any>();

  @HostListener('click', ['$event.target']) click(event: Event) {
    this.onceClicked();
  }

  constructor() {
  }

  onceClicked() {
    Swal.fire({
      title: '<strong>Are You Sure You Want to Move On?</u></strong>',
      type: 'info',
      html:
        'Pressing great will submit your info',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> No Please',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((result) => {
      if (result.value === true) {
        this.confirm.emit();
      }
    });
  }
}
