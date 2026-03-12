s# QA ifElse function ([uk](readme.uk.md), [ru](readme.ru.md))
Write tests for `ifElse` function that takes 3 callbacks `condition`, `first` and
`second` and runs `condition` with no arguments. If `condition` returns `true`
run a `first` callback otherwise run `second` with no arguments. No result is
expected from `isElse` function.

```js
ifElse(
  () => Math.random() > 0.5,
  () => console.log(1),
  () => console.log(2),
); // 1 is printed if random value > 0.5
```

---
- [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
- Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)
