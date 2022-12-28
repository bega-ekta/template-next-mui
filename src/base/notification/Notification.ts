import { toast } from 'react-toastify';

class Notifications {
  showSuccess = (message: string) => {
    toast(message, { type: 'success' });
  };

  showError = (message: string) => {
    toast(message, { type: 'error' });
  };

  showInfo = (message: string) => {
    toast(message, { type: 'info' });
  };

  showWarning = (message: string) => {
    toast(message, { type: 'warning' });
  };
}

const Notification = new Notifications();
export default Notification;
