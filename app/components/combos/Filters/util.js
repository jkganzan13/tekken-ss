export const getLabelValuesFromNames = names =>
  names.map(name => ({
    label: name,
    value: name,
  }));
