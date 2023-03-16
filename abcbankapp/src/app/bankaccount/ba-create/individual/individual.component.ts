import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import Validation from './utils/Validation';
import {DematComponent} from "../demat/demat.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";

interface  FormModel{
  accountNo:FormControl<number|null>;
  firstName:FormControl<string|null>;
  lastName:FormControl<string|null>;
  email:FormControl<string|null>;
  password:FormControl<string|null>;
  confirmPassword:FormControl<string|null>
  address:FormControl<string|null>;
  contactNo:FormControl<number|null>;
  dob:FormControl<string|null>;
  gender:FormControl<string|null>;
  acceptTerms:FormControl<boolean|null>;
  cards:FormArray<FormControl<string|null>>;
 // selectedValue: FormControl<string|null>;
 // checked: FormControl<boolean|null>;
}


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  standalone:true,
  imports:[DematComponent,RouterModule,MatFormFieldModule,MatIconModule,
   MatInputModule, MatButtonModule,MatSelectModule,MatOptionModule,MatTabsModule,
    ReactiveFormsModule,FormsModule,CommonModule],
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  selectedValue: FormControl;
// checked: FormControl;
  private _checked:boolean;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) {
   this.selectedValue=new FormControl('',
      [Validators.required,Validators.pattern('[A-Za-z]{2,50}')]);
 //  this.checked=new FormControl('',[Validators.required]);
  }
  genders: string[] = [
    "Male","Female","Transgender"
  ];
  individualFormGroup: FormGroup = new FormGroup<FormModel>({

      firstName: this.fb.control('First Name',
        {validators:[Validators.required,Validators.pattern("[a-zA-Z]{5,50}")]}),
      lastName: this.fb.control(
        'Last Name',{validators:[Validators.required,Validators.pattern("[a-zA-Z]{5,50}")]}),
      email: this.fb.control('Email',{validators:[Validators.required, Validators.email]}),
      dob: this.fb.control('DOB',
        {validators:[Validators.required]}),
    //  Validators.pattern("^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$" )
      gender: this.fb.control('Gender',{validators:[Validators.required]}),
      address: this.fb.control('Address',{validators:[Validators.required]}),
      contactNo: this.fb.control(123456789,
        {validators:[Validators.required,Validators.pattern("[0-9]{10}")]}),
      accountNo: this.fb.control(123456789,
        {validators:[Validators.required, Validators.pattern("[0-9]{12}")]}),
      password: this.fb.control('******',{validators:[ Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)]}),
      confirmPassword: this.fb.control('****',{validators:[Validators.required]}),
      acceptTerms: this.fb.control(false,{validators:[Validators.requiredTrue]}),
      cards: this.fb.array([
        this.fb.control('CC'),
        this.fb.control('DD'),
      ]),
     // selectedValue: this.fb.control('',{validators:[Validators.required]}),


    },
    {
      validators: [Validation.match('password', 'confirmPassword')],
    });

  ngOnInit(): void {
    this.individualFormGroup.statusChanges.subscribe(newStatus=> {
      console.log('form status changed')
      console.log(newStatus)
    })
    // @ts-ignore
    this.individualFormGroup.get("firstName").statusChanges.subscribe(newStatus=> {
      console.log('firstname status changed')
      console.log(newStatus)
      // @ts-ignore
      console.log(this.individualFormGroup.get("firstName").status)
      console.log(this.individualFormGroup.status)

      setTimeout(() => {
        console.log(this.individualFormGroup.status)
      })

    })
  }


  get f(): { [key: string]: AbstractControl } {
    return this.individualFormGroup.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.individualFormGroup.invalid) {
      return;
    }

    console.log(JSON.stringify(this.individualFormGroup.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.individualFormGroup.reset();
  }



}
