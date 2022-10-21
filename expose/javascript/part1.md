# Part 1

### **var** declaration
- Q1 : *values added: 20*
   - **var** are mutable, we can re-assign the value
- Q2 : *final result: 20*
   - Since **var** are either function-scoped or global-scoped, `line 13` has no error
<hr>

### **let** declaration
- Q3 : values added: 20
   - **let** are mutable, we can re-assign the value
- Q4 : Error, whereas **var** has no block scope **let** has block scope. By the scope resolution of **let**, `line 13` is out of scope.
<hr>

### **const** declaration
- Q5 : *Error*, **const** is immutable.
    ```
        const result = 0 // line 7
    ```
    Since **result** was already assgined as `0`, we cannot re-assgin as value `num1 + num2`

- Q6 : will not execute because there is error on `line 9` (JS is interpreter language, so it will interprete til `line 9`)
    - more specifically, even though if there doesn't exsist error before `line 13`, it should be error because of scope (same as **let** variable)
