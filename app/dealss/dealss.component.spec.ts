import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealssComponent } from './dealss.component';

describe('DealssComponent', () => {
  let component: DealssComponent;
  let fixture: ComponentFixture<DealssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
