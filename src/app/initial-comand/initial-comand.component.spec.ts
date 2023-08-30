import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialComandComponent } from './initial-comand.component';

describe('InitialComandComponent', () => {
  let component: InitialComandComponent;
  let fixture: ComponentFixture<InitialComandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialComandComponent]
    });
    fixture = TestBed.createComponent(InitialComandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
