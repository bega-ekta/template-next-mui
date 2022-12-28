export default class NumberHelper {
  static fixNumber = (num: number, fixCount: number) => {
    const result = num.toFixed(fixCount);
    return parseFloat(result);
  };
}
