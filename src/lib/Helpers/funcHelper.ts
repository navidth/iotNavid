export const formatNumberWithCommas = (str: number | string) => {
      const string = String(str)
      return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function convertToPersian(input: string) {
      if (typeof input !== "string") {
            console.warn("Invalid input for convertToPersian:", input);
            return input;
      }
      const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return input.replace(/[0-9]/g, function (match) {
            return persianNumbers[parseInt(match)];
      });
}