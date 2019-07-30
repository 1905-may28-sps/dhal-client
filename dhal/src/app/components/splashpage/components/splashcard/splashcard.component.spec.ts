import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashcardComponent } from './splashcard.component';

describe('SplashcardComponent', () => {
  let component: SplashcardComponent;
  let fixture: ComponentFixture<SplashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
