import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitServerErrorComponent } from './dialog-submit-server-error.component';

describe('DialogSubmitServerErrorComponent', () => {
  let component: DialogSubmitServerErrorComponent;
  let fixture: ComponentFixture<DialogSubmitServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitServerErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubmitServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
