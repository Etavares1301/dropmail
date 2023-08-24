import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryEmailComponent } from './temporary-email.component';

describe('TemporaryEmailComponent', () => {
  let component: TemporaryEmailComponent;
  let fixture: ComponentFixture<TemporaryEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporaryEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
