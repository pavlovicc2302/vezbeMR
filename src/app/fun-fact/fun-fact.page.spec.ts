import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FunFactPage } from './fun-fact.page';

describe('FunFactPage', () => {
  let component: FunFactPage;
  let fixture: ComponentFixture<FunFactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FunFactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
