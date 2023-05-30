# `[Component] Dropdown`

## `type`

```ts
interface DropdownProps {
  children: React.ReactNode[];
}

interface DropdownMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}
```

## `example`

```tsx
import { Dropdown } from 'wap-ui';

const App = () => {
  return (
    <Dropdown>
      <Dropdown.Button color="secondary" shadow>
        Actions
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem onAction={() => alert('asdf')}>
          Create a Copy
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>Download</Dropdown.MenuItem>
        <Dropdown.MenuItem>Delete</Dropdown.MenuItem>
        <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};
```
