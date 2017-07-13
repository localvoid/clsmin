import { ClassNameMinifier, easyListFilter } from "./index";

const minifier = new ClassNameMinifier(
  (className) => {
    if (className.startsWith("ad")) {
      return true;
    }
    return easyListFilter(className);
  },
);

console.log(minifier.get("header"), minifier.get("qwe"));
