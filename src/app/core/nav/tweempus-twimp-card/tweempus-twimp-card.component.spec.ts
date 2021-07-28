import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweempusTwimpCardComponent } from './tweempus-twimp-card.component';

describe('TweempusTwimpCardComponent', () => {
  let component: TweempusTwimpCardComponent;
  let fixture: ComponentFixture<TweempusTwimpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweempusTwimpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweempusTwimpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
