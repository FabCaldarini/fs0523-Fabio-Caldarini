import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoesempioComponent } from './secondoesempio.component';

describe('SecondoesempioComponent', () => {
  let component: SecondoesempioComponent;
  let fixture: ComponentFixture<SecondoesempioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondoesempioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondoesempioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
