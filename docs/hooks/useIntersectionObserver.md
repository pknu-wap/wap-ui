# `[Hook] useIntersectionObserver`

## `description`

IntersectionObserver(교차 관찰자 API)는 타겟 엘레멘트와
타겟의 부모 혹은 상위 엘레멘트의 뷰포트가 교차되는 부분을 비동기적으로 관찰하는 API이다.

### `type`

```ts
interface useIntersectionObserverProps {
  onIntersect: () => void;
}
```

## `example`

```tsx
const loadMore = () => {
  if (hasNextPage) fetchNextPage();
};

const targetElement = useIntersectionObserver({ onIntersect: loadMore });
```
