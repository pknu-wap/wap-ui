# `[Component] Accordion`

## `type`

```ts
interface AccordionProps extends AccordionProviderProps {
  children: React.ReactNode;
  /**
   * 여러개가 열리게 할 수 있는지, 하나가 열릴 때 나머지는 닫히게 할 지 결정합니다.
   */
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  children: React.ReactNode;
  /**
   * AccordionItem의 닫혔을 경우에도 보여지는 부분입니다.
   */
  label: React.ReactNode;

  /**
   * AccordionItem의 닫혔을 경우에도 보여지는 label 밑에 위치하는 부연설명입니다.
   */
  description?: React.ReactNode;

  /**
   * Accordion에 의해 자동으로 부여되는 index
   */
  index?: number;
}
```

## `example`

```tsx
import { Accordion } from 'wap-ui';

const App = () => {
  return (
    <Accordion>
      <Accordion.Item label="Item 1" description="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      </Accordion.Item>
      <Accordion.Item label="Item 2" description="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      </Accordion.Item>
      <Accordion.Item label="Item 3" description="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      </Accordion.Item>
    </Accordion>
  );
};
```
