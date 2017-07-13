const StartChars = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
  117, 118, 119, 120, 121, 122, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
  87, 88, 89, 90]

const Chars = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
  118, 119, 120, 121, 122, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 89, 90, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

const logCharsRadix = Math.log(Chars.length);

function minifiedClassName(index: number): string {
  let i = index / StartChars.length;
  const n = Math.floor(Math.log(i * (Chars.length - 1) + 1) / logCharsRadix);

  const classNameChars = new Array(n + 1);
  classNameChars[0] = StartChars[index % StartChars.length];

  for (let j = 1; j <= n; j++) {
    classNameChars[j] = Chars[i % Chars.length];
    i /= Chars.length;
  }

  return String.fromCharCode.apply(String, classNameChars);
}

export class ClassNameMinifier {
  readonly index = new Map<string, string>();
  private lastIndex = 0;
  private filter: (className: string) => boolean;

  constructor(filter: (className: string) => boolean = () => false) {
    this.filter = filter;
  }

  get(className: string): string {
    let result = this.index.get(className);
    if (result === undefined) {
      do {
        result = minifiedClassName(this.lastIndex++);
      } while (this.filter(result));

      this.index.set(className, result);
    }
    return result;
  }
}
