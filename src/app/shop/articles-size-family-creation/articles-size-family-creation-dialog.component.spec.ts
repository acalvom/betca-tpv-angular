import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSizeFamilyCreationDialogComponent } from './articles-size-family-creation-dialog.component';

describe('ArticlesSizeFamilyCreationDialogComponent', () => {
  let component: ArticlesSizeFamilyCreationDialogComponent;
  let fixture: ComponentFixture<ArticlesSizeFamilyCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesSizeFamilyCreationDialogComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSizeFamilyCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
