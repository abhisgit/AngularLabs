import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceExampleComponent } from './http-service-example.component';

describe('HttpServiceExampleComponent', () => {
  let component: HttpServiceExampleComponent;
  let fixture: ComponentFixture<HttpServiceExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
