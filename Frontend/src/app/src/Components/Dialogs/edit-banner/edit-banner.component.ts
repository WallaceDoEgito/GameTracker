import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-banner',
  imports: [FormsModule, MatInputModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule],
  templateUrl: './edit-banner.component.html',
  styleUrl: './edit-banner.component.css'
})
export class EditBannerComponent {
  newLink!:string
  constructor(public dialogRef: MatDialogRef<EditBannerComponent>) { }

  clickCancel(){
    this.dialogRef.close()
  }
  clickChange(){
    this.dialogRef.close(this.newLink)
  }
}

