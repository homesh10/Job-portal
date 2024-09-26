import { Component,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-educational-details',
  standalone: true,
  imports: [],
  templateUrl: './educational-details.component.html',
  styleUrl: './educational-details.component.css'
})
export class EducationalDetailsComponent {
  constructor(@Inject(FormGroup) public formGroup: FormGroup) {}

}
