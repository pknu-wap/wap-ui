import { useCallback, useState } from 'react';

interface UseDisclosureProps {
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

const useDisclosure = ({ defaultIsOpen = false }: UseDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onClose = useCallback(() => setIsOpen(false), []);

  const onOpen = useCallback(() => setIsOpen(true), []);

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onClose, onOpen, onToggle };
};

export default useDisclosure;
