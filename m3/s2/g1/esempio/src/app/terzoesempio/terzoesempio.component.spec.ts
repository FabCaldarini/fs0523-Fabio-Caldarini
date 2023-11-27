import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoesempioComponent } from './terzoesempio.component';

describe('TerzoesempioComponent', () => {
  let component: TerzoesempioComponent;
  let fixture: ComponentFixture<TerzoesempioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerzoesempioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerzoesempioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
