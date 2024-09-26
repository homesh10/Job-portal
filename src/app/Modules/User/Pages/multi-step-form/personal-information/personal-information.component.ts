import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../../Services/UserProfile/user-profile.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {



}

