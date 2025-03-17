import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMoreDetailComponent } from './game-more-detail.component';

describe('GameMoreDetailComponent', () => {
  let component: GameMoreDetailComponent;
  let fixture: ComponentFixture<GameMoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMoreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
