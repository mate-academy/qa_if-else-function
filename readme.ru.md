# QA ifElse function
Создай функцию `ifElse`, которая принимает 3 колбэка `condition`, `first` и
`second` и запускает `condition` без аргументов. Если `condition` вернёт `true`
запусти `first`, иначе запусти `second` без аргументов. `isElse` не должна
возвращать результат.

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
