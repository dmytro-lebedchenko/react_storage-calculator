export const getMinIndex = (values: number[]) => {
  return values.findIndex(item => item === Math.min(...values));
};
