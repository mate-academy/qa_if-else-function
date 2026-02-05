"use strict";

describe(`ifElse`, () => {
  const { ifElse } = require(`./ifElse`);

  it(`should be a function`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`the first function must be called`, () => {
    const condition = () => true;
    let count = null;

    const first = () => {
      count = 1;
    };

    const second = () => {
      count = 2;
    };

    ifElse(condition, first, second);
    expect(count).toBe(1);
  });

  it(`the second function must be called`, () => {
    const condition = () => false;
    let count = null;

    const first = () => {
      count = 1;
    };

    const second = () => {
      count = 2;
    };

    ifElse(condition, first, second);
    expect(count).toBe(2);
  });

  it(`should return undefined`, () => {
    const result = ifElse(
      () => Math.random() > 0.5,
      // eslint-disable-next-line no-console
      () => console.log(1),
      // eslint-disable-next-line no-console
      () => console.log(2),
    );

    expect(result).toBeUndefined();
  });
});
