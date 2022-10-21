import React, { ReactNode } from 'react';

/**
 * @todo 이거는 일단 링크를 참고한거고 나중에 다시 공부해서 정리해야함
 * @see https://github.dev/nextui-org/nextui/blob/main/packages/react/src/utils/collections.ts
 */
export const setChildrenIndex = (
  children: ReactNode | undefined,
  targetComponents: Array<React.ElementType> = [],
): ReactNode | undefined => {
  if (React.Children.count(children) === 0) return [];
  const allowAll = targetComponents.length === 0;
  const clone = (child: React.ReactElement, props = {}) =>
    React.cloneElement(child, props);
  let index = 0;

  return React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) return item;
    index = index + 1;
    if (allowAll) return clone(item, { index });

    const isAllowed = targetComponents.find((child) => child === item.type);

    if (isAllowed) return clone(item, { index });
    index = index - 1;

    return item;
  });
};
