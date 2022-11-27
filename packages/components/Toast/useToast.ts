import { useState } from 'react';
import { Toast } from './Toaster/Toaster';

/**
 * toast message를 cache하는 array
 */
const toastList: Toast[] = [];
/**
 * toast message가 지속되는 시간
 */
const DefaultToastDuration = 5000;

export const useToast = () => {
  /**
   * toast 함수가 호출될 때 마다 toaster컴포넌트를 re-rendering하기 위한 useState
   */
  const [_, setIsUpdateToast] = useState(false);

  /**
   * toast message를 삭제하는 함수
   */
  const removeToast = (id: number) => {
    const index = toastList.findIndex((toast) => toast.id === id);
    if (index !== -1) {
      toastList.splice(index, 1);
      setIsUpdateToast((prev) => !prev);
    }
  };

  /**
   * toast message를 추가하는 함수
   */
  const toast = (message: string) => {
    /**
     * toast message의 최대 개수 5개 까지 허용
     */
    if (toastList.length >= 5) return;

    const toast: Toast = {
      id: Date.now(),
      message,
    };

    toastList.push(toast);
    /**
     * toaster 컴포넌트를 re-rendering
     */
    setIsUpdateToast((prev) => !prev);

    /**
     * toast message를 삭제
     */
    setTimeout(() => {
      removeToast(toast.id);
    }, DefaultToastDuration);
  };

  return { toast };
};

export const getToastList = () => toastList;
