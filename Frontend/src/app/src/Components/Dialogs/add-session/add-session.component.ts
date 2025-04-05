import { Component, inject, OnInit } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-session',
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-session.component.html',
  styleUrl: './add-session.component.css'
})
export class AddSessionComponent implements OnInit {

  date!:string
  time!:string
  minDate = "1958-10-18" // dia da criacao do primeiro jogo
  maxDate! : String;
  dialogRef = inject(MatDialogRef<AddSessionComponent>)
  dateFormControl = new FormControl('', [Validators.required, this.maxDateValidator(new Date()), this.minDateValidator(new Date(this.minDate))])
  timeFormControl = new FormControl('', [Validators.required])

  ngOnInit(): void {
      this.maxDate = new Date(Date.now()).toLocaleString('en-CA').split(',')[0]
  }

  AddSession(){
    if(this.dateFormControl.hasError("required") || this.dateFormControl.hasError("maxDate")|| this.dateFormControl.hasError("minDate")|| this.timeFormControl.hasError("required")) return;
    this.dialogRef.close({date: this.date, time:this.time });

  }

  private maxDateValidator(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
  
      const selectedDate = new Date(control.value);  
      if (selectedDate > maxDate) {
        return { maxDate: true };
      }
  
      return null;
    };
  }
  private minDateValidator(minDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
  
      const selectedDate = new Date(control.value);  
      if (selectedDate < minDate) {
        return { minDate: true };
      }
  
      return null;
    };


}
}
