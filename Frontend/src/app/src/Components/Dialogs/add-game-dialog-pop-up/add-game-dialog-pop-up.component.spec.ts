import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameDialogPopUpComponent } from './add-game-dialog-pop-up.component';

describe('AddGameDialogPopUpComponent', () => {
  let component: AddGameDialogPopUpComponent;
  let fixture: ComponentFixture<AddGameDialogPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGameDialogPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGameDialogPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
