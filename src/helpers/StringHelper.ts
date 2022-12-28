export default class StringHelper {
  static shortString = (text: string, count: number, haveDot = true) => {
    if (text.length <= count) {
      return text;
    }

    return haveDot ? text.substring(0, count) + '...' : text.substring(0, count);
  };

  static shortStringOnCenter = (text: string | null | undefined, count: number) => {
    if (!text) {
      return;
    }

    return `${text.substring(0, count)}...${text.substring(text.length - count, text.length)}`;
  };
}
