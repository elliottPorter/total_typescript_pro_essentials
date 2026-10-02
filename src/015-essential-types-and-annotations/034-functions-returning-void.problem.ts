type AddClickEventListener_function = () => void;

const addClickEventListener = (listener: AddClickEventListener_function) => {
  document.addEventListener('click', listener);
};

addClickEventListener(() => {
  console.log('Clicked!');
});

addClickEventListener(
  // @ts-expect-error
  'abc'
);
