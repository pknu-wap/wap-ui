import { ToastOptions, ToastState, ToastPosition } from './types';

interface ToastStore {
  getState: () => ToastState;
  subscribe: (listener: () => void) => () => void;
  notify: (options?: CreateToastOptions) => void;
  removeToast: (id: ToastOptions['id'], position: ToastPosition) => void;
}

const initialState: ToastState = {
  'top-center': [],
  'top-left': [],
  'top-right': [],
  'bottom-center': [],
  'bottom-left': [],
  'bottom-right': [],
};

export const createStore = (initialState: ToastState): ToastStore => {
  let state = initialState;
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: ToastState) => ToastState) => {
    state = setStateFn(state);
    listeners.forEach((listener) => listener());
  };

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    notify: (options) => {
      const toast = createToast(options);
      const { position } = toast;

      setState((state) => ({
        ...state,
        [position]: [...state[position], toast],
      }));
    },
    removeToast: (id, position) =>
      setState((state) => ({
        ...state,
        [position]: state[position].filter((toast) => toast.id !== id),
      })),
  };
};

export const toastStore = createStore(initialState);

let counter = 0;

type CreateToastOptions = Partial<
  Pick<
    ToastOptions,
    'duration' | 'status' | 'title' | 'description' | 'position'
  >
>;

const createToast = (options: CreateToastOptions = {}) => {
  counter += 1;

  const id = counter;
  const duration =
    typeof options.duration === 'undefined' ? 3000 : options.duration;
  const position = options.position || 'bottom-center';
  const status = options.status || 'info';
  const handleRequestClose = () => toastStore.removeToast(id, position);

  return {
    id,
    title: options.title,
    description: options.description,
    position,
    duration,
    status,
    onRequestClose: handleRequestClose,
  };
};

export default toastStore;
