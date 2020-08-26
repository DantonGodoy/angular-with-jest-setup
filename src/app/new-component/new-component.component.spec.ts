import { TestBed, async } from '@angular/core/testing';

import { NewComponentComponent } from './new-component.component';

describe('NewComponentComponent', () => {
  let fixture: NewComponentComponent;

  beforeEach(async(() => {
    fixture = new NewComponentComponent();
    TestBed.configureTestingModule({
      declarations: [ NewComponentComponent ],
    }).compileComponents();
  }));

  describe('Component text content.', () => {
    it('should have "new-component works!" as component title.', () => {

      const component = TestBed.createComponent(NewComponentComponent);
      const compiledComponent = component.nativeElement;

      expect(compiledComponent.querySelector('h2').textContent).toContain('new-component works!');
    });
});

  describe('addNumbers', () => {
    it('should add together the 2 numbers passed.', () => {

      const result = fixture.addNumbers(1, 3);

      expect(result).toEqual(4);
    });

    it('use "2" as the default value if second number is not passed.', () => {

      const result = fixture.addNumbers(1);

      expect(result).toEqual(3);
    });
  });

  describe('methodThatCallsAnother', () => {
    it('should call addNumbers.', () => {

      const addNumbersSpy = jest.spyOn(fixture, 'addNumbers');

      fixture.methodThatCallsAnother();

      expect(addNumbersSpy).toBeCalledWith(1, 2);
    });
  });

});
