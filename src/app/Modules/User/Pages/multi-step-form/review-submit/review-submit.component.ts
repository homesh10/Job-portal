import { Component,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-review-submit',
  standalone: true,
  imports: [],
  templateUrl: './review-submit.component.html',
  styleUrl: './review-submit.component.css'
})
export class ReviewSubmitComponent {
  constructor(@Inject(FormGroup) public formGroup: FormGroup) {}

}
