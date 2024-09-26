import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injector } from '@angular/core';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { UserNavComponent } from '../../Layouts/user-nav/user-nav.component';
import { UserSideNavComponent } from '../../Layouts/user-side-nav/user-side-nav.component';
import { UserFooterComponent } from '../../Layouts/user-footer/user-footer.component';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, PersonalInformationComponent, AdditionalDetailsComponent,EducationalDetailsComponent,ReviewSubmitComponent,UserNavComponent, UserSideNavComponent, UserFooterComponent],
})
export class MultiStepFormComponent implements OnInit {
  currentStep = 0;
  progress = 0;

  steps = [
    { component: PersonalInformationComponent, label: 'Personal Information' },
    { component: AdditionalDetailsComponent, label: 'Additional Details' },
    { component: EducationalDetailsComponent, label: 'Educational Details' },
    { component: ReviewSubmitComponent, label: 'Review & Submit' }
  ];

  // Define form groups for each step
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  step4Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      exampleField1: ['']
    });
    this.step2Form = this.fb.group({
      exampleField2: ['']
    });
    this.step3Form = this.fb.group({
      exampleField3: ['']
    });
    this.step4Form = this.fb.group({
      exampleField4: ['']
    });
  }

  ngOnInit() {
    this.updateProgress();
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      this.updateProgress();
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.updateProgress();
    }
  }

  updateProgress() {
    this.progress = (this.currentStep / 3) * 100;
  }

  getCurrentFormGroup(): FormGroup {
    switch (this.currentStep) {
      case 0: return this.step1Form;
      case 1: return this.step2Form;
      case 2: return this.step3Form;
      case 3: return this.step4Form;
      default: return this.step1Form; // Fallback
    }
  }

  get currentComponent() {
    return this.steps[this.currentStep].component;
  }

  onSubmit() {
    if (this.currentStep === 3) {
      // Handle form submission
      console.log('Form submitted');
      console.log(this.step1Form.value);
      console.log(this.step2Form.value);
      console.log(this.step3Form.value);
      console.log(this.step4Form.value);
    }
  } get formInjector() {
    return Injector.create({
      providers: [
        { provide: FormGroup, useValue: this.getCurrentFormGroup() }
      ]
    });
  }
}
