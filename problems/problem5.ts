// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty = <O, K extends keyof O>(obj: O, key: K) => {
  return obj[key];
};