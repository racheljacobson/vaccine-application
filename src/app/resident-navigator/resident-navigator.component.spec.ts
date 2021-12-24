import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentNavigatorComponent } from './resident-navigator.component';

describe('ResidentNavigatorComponent', () => {
  let component: ResidentNavigatorComponent;
  let fixture: ComponentFixture<ResidentNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});