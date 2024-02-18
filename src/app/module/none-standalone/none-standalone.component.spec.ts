import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneStandaloneComponent } from './none-standalone.component';

describe('NoneStandaloneComponent', () => {
  let component: NoneStandaloneComponent;
  let fixture: ComponentFixture<NoneStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoneStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoneStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
