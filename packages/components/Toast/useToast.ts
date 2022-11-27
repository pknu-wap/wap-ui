import { useState } from 'react';
import { Toast } from './Toaster/Toaster';

const toastList: Toast[] = [];

export const useToast = () => {
  const [_, setIsUpdateToast] = useState(false);

  const toast = (message: string) => {
    const toast: Toast = {
      id: Date.now(),
      message,
    };
    toastList.push(toast);
    setIsUpdateToast((prev) => !prev);
  };

  return { toast };
};

export const getToastList = () => toastList;
