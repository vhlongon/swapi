export const omit = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj as Omit<T, K>;
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
