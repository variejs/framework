export default interface AlertModel {
  title: string;
  message: string;
  severity: string;
  id: null | number | string;
  duration: number | undefined | null;
}
