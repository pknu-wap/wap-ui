import { createReactContext } from '../../hooks';

export interface BottomSheetConfig {
  isOpen: boolean;
  onClose: () => void;
}

const [BottomSheetProvider, useBottomSheetContext] =
  createReactContext<BottomSheetConfig>({
    name: 'BottomSheetContext',
    errorMessage:
      'useBottomSheetContext must be used within a BottomSheetProvider',
  });

export { BottomSheetProvider, useBottomSheetContext };
