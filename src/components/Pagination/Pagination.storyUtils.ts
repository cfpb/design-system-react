const ONE = 1;
const INDENTATION = 2;

// Produce tabular test data
export const generateTestRows = (rowCount: number): string[][] =>
  [...Array.from({ length: rowCount }).keys()].map(key => [
    `A${key + ONE}`,
    `B${key + ONE}`
  ]);

// Stringify an object while preserving Functions
export const stringify = (object: object): string => {
  const placeholder = '____PLACEHOLDER____';
  const fns = [];
  let json = JSON.stringify(
    object,
    (_key, value) => {
      if (typeof value === 'function') {
        fns.push(value);
        return placeholder;
      }
      return value;
    },
    INDENTATION
  );
  json = json.replaceAll(new RegExp(`"${placeholder}"`, 'g'), () =>
    fns.shift()
  );
  return json;
};
