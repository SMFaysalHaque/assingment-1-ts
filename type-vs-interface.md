# Type Alias vs Interface in Typescript

## Introduction

In typescript, both `type` and `interface` help us define the shape of data. They look similar, but they have some difference.

## Detailed Explanation

A **type alias** uses the `type` keyword. It can describe objects, primitive types, unions, and intersections. An **interface** mainly describes the structure of an object. we can extend an interface using `extends`. We can also merge two interfaces with the same name. However, declaring two types aliases with the same name causes an error.

```ts
type Role = "admin" | "member"

interface User {
    name: string; 
    role: Role;
}
interface Employee extends User {
    salary: number;
}

type Person = { name: string };
type Staff = Person & { salary: number }
```

Here, `Role` is a union type, so a type alias is useful. `Employee` extends `User`, while `Staff` combines two object types using `&`. Both approaches can describe object data.

## Conclusion

Use `interface` when defining object structure that may be extended or merged. Use `type` when you need unions. intersections, primitives, or more flexible type combinations. In many object based cases, either one is a good choice.