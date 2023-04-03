export const stringCutter = (string, end = undefined) => {
  return string.slice(0, end);
};

export const createMarkup = (value) => {
  return { __html: value };
};

export const objectStateChanger = (e, path, stateFn) => {
  stateFn({ ...path, [e.target.name]: e.target.value});
};
