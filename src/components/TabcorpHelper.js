export default class TabcorpHelper {
  static buildArrayFromNumber = (totalNumbers) => {
    return Array(parseInt(totalNumbers)).fill();
  };

  static buildArrayFromStartingNumber = (start, end, step) => {
    return Array.from(
      Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
      (x) => start + x * step
    );
  };
}
