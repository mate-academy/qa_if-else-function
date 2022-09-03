'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse function', () => {
  const trueCondition = () => true;
  const falseCondition = () => false;
  const mockCBTrue = jest.fn();
  const mockCBFalse = jest.fn();

  it('should be a function', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(ifElse(trueCondition, mockCBTrue, mockCBFalse))
      .toBe(undefined);
  });
  
  it('should call first function if initial is true', () => {
      ifElse(trueCondition, mockCBTrue, mockCBFalse);
      expect(mockCBTrue).toHaveBeenCalled();
      expect(mockCBFalse).not.toHaveBeenCalled();
  });
  
  it('should call second function if initial is false', () => {
    ifElse(falseCondition, mockCBTrue, mockCBFalse);
      expect(mockCBFalse).toHaveBeenCalled();
      expect(mockCBTrue).not.toHaveBeenCalled();
  });

  it(`should call second function if initial is undefined`, () => {
    ifElse(() => undefined, mockCBTrue, mockCBFalse);

    expect(mockCBTrue).not.toHaveBeenCalled();
    expect(mockCBFalse).toHaveBeenCalled();
  });
          
  it(`should call second function if initial is numeric`, () => {
    ifElse(() => 1, mockCBTrue, mockCBFalse);

    expect(mockCBTrue).not.toHaveBeenCalled();
    expect(mockCBFalse).toHaveBeenCalled();
  });
            
  it(`should call second function if initial is string`, () => {
    ifElse(() => 'true', mockCBTrue, mockCBFalse);

    expect(mockCBTrue).not.toHaveBeenCalled();
    expect(mockCBFalse).toHaveBeenCalled();
  });
  
  it(`should call first function several times if initial is true` +
      `and called more than once`, () => {
    ifElse(trueCondition, mockCBTrue, mockCBFalse);
    ifElse(trueCondition, mockCBTrue, mockCBFalse);
    ifElse(trueCondition, mockCBTrue, mockCBFalse);

    expect(mockCBTrue).toHaveBeenCalled();
    expect(mockCBTrue.mock.calls.length).toBe(3);
    expect(mockCBFalse).not.toHaveBeenCalled();
  });
    
  it(`should call first function several times if initial is false` +
      `and called more than once`, () => {
    ifElse(falseCondition, mockCBTrue, mockCBFalse);
    ifElse(falseCondition, mockCBTrue, mockCBFalse);
    ifElse(falseCondition, mockCBTrue, mockCBFalse);

    expect(mockCBTrue).not.toHaveBeenCalled();
    expect(mockCBFalse).toHaveBeenCalled();
    expect(mockCBFalse.mock.calls.length).toBe(3);
  });
});
