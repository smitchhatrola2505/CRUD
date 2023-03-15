import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatedataDialogComponent } from './duplicatedata-dialog.component';

describe('DuplicatedataDialogComponent', () => {
  let component: DuplicatedataDialogComponent;
  let fixture: ComponentFixture<DuplicatedataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicatedataDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicatedataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
