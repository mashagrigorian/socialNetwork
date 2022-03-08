export type FieldVaildatorType = (value: string) => string | undefined

export const required: FieldVaildatorType = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength: number): FieldVaildatorType => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
