import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-banner',
  imports: [MatDialogTitle, MatDialogContent, MatButton, MatInputModule,MatDialogActions, FormsModule ],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css'
})
export class AddBannerComponent {
  linkToBanner!:string;

  /**
   *
   */
  constructor(public dialogRef: MatDialogRef<AddBannerComponent>) {}

  clickCancel(){
    this.dialogRef.close()
  }
  clickAdd(){
    this.dialogRef.close(this.linkToBanner)
  }
}
