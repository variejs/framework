export default function(data: object, path: string, value: any) {
  let parts = path.split(".");
  return parts.reduce(function(prev: object, curr: string, ix: number) {
    return ix + 1 == parts.length ? (prev[curr] = value) : prev[curr] || {};
  }, data);
}
