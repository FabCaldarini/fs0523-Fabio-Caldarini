import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoesempioComponent } from './primoesempio.component';

describe('PrimoesempioComponent', () => {
  let component: PrimoesempioComponent;
  let fixture: ComponentFixture<PrimoesempioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimoesempioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimoesempioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
