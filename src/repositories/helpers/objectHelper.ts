const removeNullKeys = (object: any) => {
  const newObj: any = {};

  Object.keys(object).forEach((key: string) => {
    if (object[key] !== null) newObj[key] = object[key];
  });

  return newObj;
};

export {
  removeNullKeys,
};
