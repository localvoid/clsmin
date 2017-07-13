# CSS Class Name Minifier

## Usage Example

```ts
import { ClassNameMinifier, easyListFilter } from "clsmin";

const minifier = new ClassNameMinifier(
  (className) => {
    if (className.startsWith("ad")) {
      return true;
    }
    return easyListFilter(className);
  },
);

minifier.get("header");
// => a
minifier.get("footer");
// => b
```

## API

### Class Name Minifier

```ts
class ClassNameMinifier {
  readonly index = new Map<string, string>();
  constructor(filter: (className: string) => boolean = () => false);
  get(className: string): string;
}
```

### EasyList

Class names blocked by adblocking software.

```ts
const EasyListClassNames = new Set<string>;
function easyListFilter(className: string): boolean;
```