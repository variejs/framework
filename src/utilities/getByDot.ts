export default function(data: object, path: string, defaultValue?: any) {
  let value = path.split(".").reduce(function(prev: object, curr: string) {
    return prev ? prev[curr] : undefined;
  }, data);

  return value !== undefined ? value : defaultValue;
}
