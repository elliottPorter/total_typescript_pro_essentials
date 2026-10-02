type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  bar: 12,
  baz: true,
  foo: 'Chester',
});

document.addEventListener(
  // Autocomplete this string!
  'DOMContentLoaded',
  (event) => {
    console.log(event);
  }
);
