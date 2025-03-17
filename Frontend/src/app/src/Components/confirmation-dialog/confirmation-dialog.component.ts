import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>){};

  DontDelete(){
    this.dialogRef.close(false)
  }
  DeleteConfirmation(){
    this.dialogRef.close(true)
  }
}
