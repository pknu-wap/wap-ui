import React, { useState } from 'react';
import './Menu.css';

export const Menu = () => {
  // 메뉴 표시 또는 숨기기
  const [isShown, setIsShown] = useState(false);

  // 메뉴 위치
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 메뉴 표시
  const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // 메뉴 사용 안 함
    event.preventDefault();

    setIsShown(false);
    const newPosition = {
      x: event.pageX,
      y: event.pageY,
    };

    setPosition(newPosition);
    setIsShown(true);
  };

  // 메뉴 숨김
  const hideContextMenu = () => {
    setIsShown(false);
  };

  // 옵션 선택
  const [selectedValue, setSelectedValue] = useState<string>();
  const doSomething = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };

  return (
    <div
      className="container"
      onContextMenu={showContextMenu}
      onClick={hideContextMenu}
    >
      <>
      <h2>Right-Click</h2>
        {selectedValue && <h1>{selectedValue} is selected</h1>}

        {/* 메뉴 정의 */}
        {isShown && (
          <div
            style={{ top: position.y, left: position.x }}
            className="custom-context-menu"
          >
            <div className="option" onClick={() => doSomething('Option 1')}>
              Option #1
            </div>
            <div className="option" onClick={() => doSomething('Option 2')}>
              Option #2
            </div>
            <div className="option" onClick={() => doSomething('Option 3')}>
              Option #3
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Menu;
