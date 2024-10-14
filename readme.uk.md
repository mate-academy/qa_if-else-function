# QA ifElse function
Напиши тести для функції `ifElse`, яка приниймає 3 колбека `condition`, `first` та
`second` і запускає `condition` без аргументів. Якщо `condition` поверне `true`
запусти `first`, інакше запусти `second` без аргументів. `isElse` не повинна
повертати результат.

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
