# TypeScript Compiler and tsconfig.json

## Introduction

Browser and Node.js normally execute JS, so TS code is complied into JS. The TS compiler is called `tsc`.

## Detailed Explanation

When we run `tsc`, on that time compiler read ts files and checks their type. It reports type errors and then remove ts only syntax, suc as type annotations and interfaces. It also converts supported js features based on the selected target. The output is JS code. TypeScript types do not exist at runtime.

```ts
const greet = (name: string): string => {
    return `Hello ${name}`
}
```

The type annotations are used during development and checking. They are not included in the generated JS. The `tsconfig.json` file controls compiler settings for a project.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "esnext",
    "target": "esnext",
    "strict": true,
    "skipLibCheck": true
  }
}
```

Here, `rootDir` identify the source folder and `outDir` identify the output folder. `target` and `module` control the js output style. The `strict` option enables stricter the type checking. We can run `tsc` in the project to compile files using this configuration. `"skipLibCheck": true` skip type checking external `.d.ts` files to reduce compilation time.

## Conclusion

The `tsc` compiler check typescript and produce javascript. The `tsconfig.json` file helps use manage compilation and type-checking rules in one place.