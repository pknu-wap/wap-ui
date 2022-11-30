import { useCallback, useState } from 'react';

interface Props {
  defaultIsOpen?: boolean;
}

/**
 * @description
 * {열린상태, 열기, 닫기, 토글} 의 기능을 가진다.
 *
 * @example
 * ```tsx
 * const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
 * ```
 */

const useDisclosure = ({ defaultIsOpen = false }: Props = {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onToggle = useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onClose, onOpen]);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
