import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastify = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info('is working or not');
  }
};

export default toastify;
