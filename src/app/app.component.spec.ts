import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(async(() => {
    fixture = new AppComponent();
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
    }).compileComponents();
  }));

  describe('Setup AppComponent', () => {

    it('should instanciate the AppComponent.', () => {

      const appCreation = TestBed.createComponent(AppComponent);
      const appInstance = appCreation.componentInstance;

      expect(appInstance).toBeTruthy();
    });

  });

  it('should have "angular-with-jest-setup" as app title.', () => {

    expect(fixture.title).toEqual('angular-with-jest-setup');
  });

  it('should render title', () => {

    const appCreation = TestBed.createComponent(AppComponent);
    appCreation.detectChanges();
    const compiled = appCreation.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('angular-with-jest-setup app is running!');
  });

});
