import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsetCategoryComponent } from './upset-category.component';

describe('UpsetCategoryComponent', () => {
  let component: UpsetCategoryComponent;
  let fixture: ComponentFixture<UpsetCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsetCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
