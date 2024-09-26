import { Component,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-additional-details',
  standalone: true,
  imports: [],
  templateUrl: './additional-details.component.html',
  styleUrl: './additional-details.component.css'
})
export class AdditionalDetailsComponent {
  constructor(@Inject(FormGroup) public formGroup: FormGroup) {}

}
