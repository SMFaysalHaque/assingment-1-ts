# **Overview of Assignment**

This assignment is given for understanding of **TypeScript** and build thinking capability of *problem solving*. Different problem with typescript and **OOP** just make this assignment awesome. 

## **Assignment: Problem Solving with TypeScript & OOP**

### **Problem 1**

This is simple multiplication with _multiplier_ where the function _multiplyValue_ gets two arguments: _value_ and _multiplier_. There are some rules for _multiplier_. For example if it gets 0, the result will be 0. Again if the _multiplier_ does not get any argument, it will get value 2 which is set as the default value for the _multiplier_ argument.

### **Problem 2**

This problem is interesting for _typescript_. For this question, we have to use union type. The function take three types of values. They are string, number and boolean. In the function it checks the value using _typeof_ and depend on that it shows output.

### **Problem 3**

Formatting the coordinate is the main focus of this problem. To solve the problem, we can see an interesting thing here. That is a _readonly tuple_. This is an interesting part of _typescript_. According to the instructions, we have to make the argument _readonly_ in the type because the requirement is that we cannot mutate it inside the function. In this way, we take the values and show them in the give format.

### **Problem 4**

Here, we understand about _generic type parameter_ <T> and _rest parameter_. In this problem, the function get an argument, which is a rest parameter. this is because, function gets an array of arrays. From those arrays, we have to take all values and put them into a new array.

### **Problem 5**

In this problem, we use another interesting _feature_ of _typescript_, which is an interface. Using this interface, we define our data types. Then, in the function, we filter objects based on instructions.

### **Problem 6**

Here, we learn another new feature about _generic type_. That is _<T, K extends keyof T>_. Using this feature, we can create a type that is _(key: K)_. It also used in the function's return type _(T[K][])_. This problem is very interesting. Using _key_ we can get all value from the _object_. After getting all _item_ of same key, we put them in a new _array_.

### **Problem 7**

In this problem, we get two classes, which are part of _OOP_. They are: _Employee_ and _Manager_. Where manager is the subclass of Employee. Actually, this problem is about understanding _OOP_. According to the instructions, we have to use private, protected, super. 

### **Problem 8**

In this problem, we have to return a _Promise<string>_. So, since this function returns a promise, we have to use an _async_ function. Due to some strict requirements, we have to use `new Promise` with `setTimeout` and `reject` using an `Error instance (new Error(...))`. In this we grant or deny string if depends on age. 


#### I write two blogs understanding about TypeScript. I attach them bellow:

- [Type vs Interface](./type-vs-interface.md)
- [TypeScript Compilation tsconfig](./typescript-compilation-tsconfig.md)
