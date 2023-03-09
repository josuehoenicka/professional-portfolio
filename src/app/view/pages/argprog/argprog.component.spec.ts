import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgprogComponent } from './argprog.component';

describe('ArgprogComponent', () => {
  let component: ArgprogComponent;
  let fixture: ComponentFixture<ArgprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
