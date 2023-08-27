import React, { useState } from 'react';

import BottomSheet from './index';
import { Button } from '../Button';

export default {
  title: 'Components/BottomSheet',
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <Button type="button" onClick={toggle}>
        open bottom sheet / 모바일로 확인하세요
      </Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
        </BottomSheet.Content>
      </BottomSheet>
    </div>
  );
};
