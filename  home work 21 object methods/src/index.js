/* global module */
const getObjectEntries = (obj) => {
  const arr = [];
  for(const key in obj){
    arr.push([key,obj[key]]);
  }
  return arr;
};
const getObjectKeys = (obj) => {
  const arr = [];
  for(const key in obj){
    arr.push(key);
  }
  return arr;
};
const getObjectValues = (obj) => {
  const arr = [];
  for(const key in obj){
    arr.push(obj[key]);
  }
  return arr;
};

module.exports = {
  getObjectEntries,
  getObjectKeys,
  getObjectValues,
};
