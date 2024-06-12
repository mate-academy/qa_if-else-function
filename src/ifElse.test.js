'use strict';

const { ifElse } = require('./ifElse');

describe(`'ifElse' function:`, () => {
  it(`should call a 'first' callback `
      + `if 'condition' returns boolean 'true'`, () => {
    const condition = jest.fn(() => true);
    const firstCb = jest.fn(() => {});
    const secondCb = jest.fn(() => {});

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
  });

  it(`should return nothing`, () => {
    const condition = jest.fn(() => true);
    const firstCb = jest.fn(() => {});
    const secondCb = jest.fn(() => {});

    const isElse = ifElse(condition, firstCb, secondCb);

    expect(isElse).toBeUndefined();
  });

  describe(`should call a 'second' callback if 'condition' is falsy:`, () => {
    it(`if 'condition' callback returns 'false'`, () => {
      const condition = jest.fn(() => false);
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });

    it(`if 'condition' callback returns 0`, () => {
      const condition = jest.fn(() => 0);
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });

    it(`if 'condition' callback returns an empty string`, () => {
      const condition = jest.fn(() => '');
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });

    it(`if 'condition' callback returns 'null'`, () => {
      const condition = jest.fn(() => null);
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });

    it(`if 'condition' callback returns 'undefined'`, () => {
      const condition = jest.fn(() => undefined);
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });

    it(`if 'condition' callback returns 'NaN'`, () => {
      const condition = jest.fn(() => NaN);
      const firstCb = jest.fn(() => {});
      const secondCb = jest.fn(() => {});

      ifElse(condition, firstCb, secondCb);

      expect(secondCb).toHaveBeenCalled();
    });
  });
});
