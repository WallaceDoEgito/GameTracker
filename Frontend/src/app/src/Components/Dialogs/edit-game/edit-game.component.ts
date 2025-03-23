import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog"
import { Game } from '../../../../Classes/Games';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-game',
  imports: [MatButtonModule,MatDialogActions, MatDialogClose, FormsModule, MatDialogContent, MatInputModule, MatDialogTitle, ReactiveFormsModule],
  templateUrl: './edit-game.component.html',
  styleUrl: './edit-game.component.css'
})
export class EditGameComponent {
  private data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef);
  public gameImageUrl = this.data.game.gameImageUrl;
  public GameName:string = this.data.game.gameName;
  public GameReview:string = this.data.game.review;
  nameFormControl = new FormControl('', [Validators.maxLength(25), Validators.required])

  Edit(){
    if(this.nameFormControl.hasError("maxlength") || this.nameFormControl.hasError("required")) return;
    this.dialogRef.close({newUrl:this.gameImageUrl, newName:this.GameName, newReview:this.GameReview})
  }
}
