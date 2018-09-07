export default function(data: object) {
  for (let propName in data) {
    if (data[propName] === null || data[propName] === undefined) {
      delete data[propName];
    }
  }
  return data;
}
