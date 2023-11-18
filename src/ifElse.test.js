'use strict';

'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let conditionTrue, conditionFalse, firstCallback, secondCallback;

  beforeEach(() => {
    conditionTrue = jest.fn().mockReturnValue(true);
    conditionFalse = jest.fn().mockReturnValue(false);
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should call the first callback when the condition is true', () => {
    ifElse(conditionTrue, firstCallback, secondCallback);
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback when the condition is false', () => {
    ifElse(conditionFalse, firstCallback, secondCallback);
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
