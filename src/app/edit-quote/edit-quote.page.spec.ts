import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuotePage } from './edit-quote.page';

describe('EditQuotePage', () => {
  let component: EditQuotePage;
  let fixture: ComponentFixture<EditQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
