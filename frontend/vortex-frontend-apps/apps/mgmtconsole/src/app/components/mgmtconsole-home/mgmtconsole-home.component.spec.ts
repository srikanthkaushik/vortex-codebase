import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmtConsoleHomeComponent } from './mgmtconsole-home.component';

describe('MgmtConsoleHomeComponent', () => {
  let component: MgmtConsoleHomeComponent;
  let fixture: ComponentFixture<MgmtConsoleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgmtConsoleHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MgmtConsoleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
