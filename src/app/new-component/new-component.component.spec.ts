import { NewComponentComponent } from './new-component.component';

describe('NewComponentComponent', () => {
  let fixture: NewComponentComponent;

  beforeEach(() => {
    fixture = new NewComponentComponent();
  });

  describe('addNumbers', () => {
    it('should add together the 2 numbers passed', () => {

      const result = fixture.addNumbers(1, 3);

      expect(result).toEqual(4);
    });

    it('use 2 as the default value if second number is not passed', () => {

      const result = fixture.addNumbers(1);

      expect(result).toEqual(3);
    });
  });

  describe('methodThatCallsAnother', () => {
    it('should call call addNumbers', () => {
      const addNumbersSpy = jest.spyOn(fixture, 'addNumbers');

      fixture.methodThatCallsAnother();

      expect(addNumbersSpy).toBeCalledWith(1, 2);
    });
  });
});


// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angular-with-jest-setup'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angular-with-jest-setup');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('angular-with-jest-setup app is running!');
//   });
// });

