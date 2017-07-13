# CSS Class Name Minifier

## Usage Example

```ts
import { clsmin, easyListFilter } from "clsmin";

const minifier = clsmin(
  (className) => {
    if (className.startsWith("ad")) {
      return true;
    }
    return easyListFilter(className);
  },
);

minifier("header");
// => a
minifier("footer");
// => b
minifier("header");
// => a
```

## API

### Class Name Minifier

```ts
clsmin(filter: (className: string) => boolean = () => false): (className: string) => string;
```

### EasyList

Class names blocked by adblocking software.

```ts
const EasyListClassNames: Set<string>;
function easyListFilter(className: string): boolean;
```
