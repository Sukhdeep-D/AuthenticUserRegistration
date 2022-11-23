import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysubscriptionComponent } from './buysubscription.component';

describe('BuysubscriptionComponent', () => {
  let component: BuysubscriptionComponent;
  let fixture: ComponentFixture<BuysubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuysubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
