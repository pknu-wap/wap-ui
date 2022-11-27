import { useState } from 'react';
import { Toast } from './Toaster/Toaster';

const toastList: Toast[] = [];
const DefaultToastDuration = 5000;

export const useToast = () => {
  const [_, setIsUpdateToast] = useState(false);

  const removeToast = (id: number) => {
    const index = toastList.findIndex((toast) => toast.id === id);
    if (index !== -1) {
      toastList.splice(index, 1);
      setIsUpdateToast((prev) => !prev);
    }
  };

  const toast = (message: string) => {
    const toast: Toast = {
      id: Date.now(),
      message,
    };
    toastList.push(toast);
    setIsUpdateToast((prev) => !prev);

    setTimeout(() => {
      removeToast(toast.id);
    }, DefaultToastDuration);
  };

  return { toast };
};

export const getToastList = () => toastList;
