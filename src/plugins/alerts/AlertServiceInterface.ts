export default interface AlertServiceInterface {
  showError(message: string, title?: string, duration?: number): void;
  showInfo(message: string, title?: string, duration?: number): void;
  showSuccess(message: string, title?: string, duration?: number): void;
  showWarning(message: string, title?: string, duration?: number): void;
}
