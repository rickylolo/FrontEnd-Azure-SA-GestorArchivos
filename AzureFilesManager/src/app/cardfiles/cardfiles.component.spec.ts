import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfilesComponent } from './cardfiles.component';

describe('CardfilesComponent', () => {
  let component: CardfilesComponent;
  let fixture: ComponentFixture<CardfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardfilesComponent]
    });
    fixture = TestBed.createComponent(CardfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
