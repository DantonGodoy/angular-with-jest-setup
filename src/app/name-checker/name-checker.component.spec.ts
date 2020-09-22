import { NameCheckerComponent } from './name-checker.component';

describe('NameCheckerComponent', () => {
  let fixture: NameCheckerComponent;

  beforeEach(() => {
    fixture = new NameCheckerComponent();
  });

  describe('returnFullNamePromise', () => {

    it('should return `Danton Godoy` if  `Danton` is passed.', () => {
      // Option 1:
      // fixture.returnFullNamePromise('Danton').then(
      //   (result) => {
      //     expect(result).toEqual('Danton Godoy');
      //   }
      // );

      // Option 2:
      // return fixture.returnFullNamePromise('Danton').then(
      //   (result) => {
      //     expect(result).toEqual('Danton Godoy');
      //   }
      // );

      // Option 3:
      // The most concise way to test Promises resolves.
      return expect(fixture.returnFullNamePromise('Danton')).resolves.toEqual('Danton Godoy');
    });

    it('should reject with `👎`', () => {
      // The most concise way to test Promises rejects.
      return expect(fixture.returnFullNamePromise('Tom')).rejects.toEqual('👎');
    });

  });

  describe('returnFullNameAsyncAwaitPromise', () => {
    /**
     * When testing async/await functions, the 'it' closure callback has to be async as well.
     */
    it('should return `Danton Godoy` if  `Danton` is passed.', async () => {
      // Option 1:
      // const result = await fixture.returnFullNameAsyncAwaitPromise('Danton');
      // expect(result).toEqual('Danton Godoy');

      // Option 2:
      await expect(fixture.returnFullNameAsyncAwaitPromise('Danton')).resolves.toEqual('Danton Godoy');
    });

    it('should reject with `👎`', async () => {
      await expect(fixture.returnFullNameAsyncAwaitPromise('Tom')).rejects.toEqual('👎');
    });

  });

  describe('setWelcomeMessage', () => {

    it('should set welcomeMessage variable with the returned fullName', (done) => {
      jest.spyOn(fixture, 'returnFullNamePromise')
        .mockResolvedValue('Travis Barker');
      fixture.welcomeMessage = undefined;

      fixture.setWelcomeMessage('Danton');

      process.nextTick(() => {
        expect(fixture.welcomeMessage).toEqual('Welcome Travis Barker!');
        done();
      });

    });

    it('should call handleError when returnFullNamePromise rejects', (done) => {
      const handleErrorSpy = jest.spyOn(fixture, 'handleError');

      jest.spyOn(fixture, 'returnFullNamePromise')
        .mockRejectedValue( null );

      fixture.setWelcomeMessage('Tom');

      process.nextTick(() => {
        expect(handleErrorSpy).toBeCalled();
        done();
      });

    });

  });
});
