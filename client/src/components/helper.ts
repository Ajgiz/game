export const shuffing = (arr: number[] | string[]) => {
  return arr
    .map((elem: any, index: any) => {
      return [elem, Math.random()];
    })
    .sort((a: any, b: any) => {
      return a[1] - b[1];
    })
    .map((elem: any) => {
      return elem[0];
    });
};

