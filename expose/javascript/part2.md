# Part 2

### Question 1
*printed `3` on console.*
<br>
`i` is declared with **var**. Since **var** are function-scoped, so it doesn't loose the value after fininsing `for` loop
<hr>

### Question 2
*printed `150` on console*
<br>
`discountedPrice`  is declared with **var**. Since **var** are function-scoped, so it doesn't loose the value, and `discountedPrice` will update during the `for` loop. After finishing `for` loop (`line 13`), `discountedPrice` contains `150` which is last value
```
var discoutedPrice = prices[i] * (1 - discount); // 300 * (1 - 0.5) = 150
```
<hr>

### Question 3
*printed `150` on console*
<br>
`finalPrice`  is declared with **var**. Since **var** are function-scoped So it doesn't loose the value, and `final` will update during the `for` loop. After finishing `for` loop (`line 14`), `final` contains `150` which is last value
```
finalPrice = Math.round(discountedPrice * 100) / 100; // 15000 / 100 = 150
```
<hr>

### Question 4
*this function will return array `[50, 100, 150]`*
<br>
the return variable `discounted` is declared with **var** and it is in the function scope. during the `for` loop, it will continously push the `finalPrice` value. `finalprice` value is `50, 100, 150` respectively. So it will return array `[50, 100, 150]`
<hr>


### Question 5
*Error, `i` is not defined*
<br>
`i` is delcared with **let**. Since **let** has block - scoped. `i` is initially declared at `for` loop block 

```
for (let i = 0; i < prices.length; i ++){
    ...    
}
```

So, `i` in `line 12` below is out of scope. Thus, `i` is not defined, and it will get error
```
console.log(i)
```
<hr>

### Question 6
*Error, `discountedPrice` is not defined*
`discountedPrice` is delcared with **let**. Since **let** has block - scoped. `i` is initially declared at `for` loop block 

```
for (let i = 0; i < prices.length; i ++){
    let discountedPrice = price[i] * (1 - discount);
    ...
}
```

So, `discountedPrice` in `line 13` below is out of scope. Thus, `discountedPrice` is not defined, and it will get error
```
console.log(discountedPrice)
```
<hr>

### Question 7
*printed `150`*
<br>
`finalPrice` is initially declared with **let** at `line 4` which is same block as `line 14` Since **let** is mutable, so it can be changed (re-assgined) value at `line 8`
```
finalPrice = Math.round(discountedPrice * 100) / 100;
```
So, last assigned value in `finalPrice` is `150`
<hr>

### Question 8
*it will return `[50, 100, 150]`*
<br>
every variable in the function is declared with **let**. It suggested that all of variable value could be mutable.

Since `discounted`, which is return array, pushed item at `for` loop scope where `finalPrice` is properly changed based on `discount`

Thus, `discounted` will contain `[50, 100, 150]`
<hr>

### Question 9
*Error, `i` is not defined*
<br>
`i` is delcared with **let**. Since **let** has block - scoped. `i` is initially declared at `for` loop block 

```
for (let i = 0; i < prices.length; i ++){
    ...    
}
```

So, `i` in `line 11` below is out of scope. Thus, `i` is not defined, and it will get error
```
console.log(i)
```
<hr>

### Question 10
*printed `3`*
<br>
`length` is declared with **const** and there is no code that try to change the `length`. 
```
const length = prices.length;
```
So, it will keep length of `prices` array, which is `3`, and print it
<hr>

### Question 11
*it will return `[50, 100, 150]`*
<br>
Even though, `discounted` is declared with **const**, it doesn't mean that it coudln't push the values in it. 
```
const discounted = [];
```
It suggested that values that is in the container cannot be changed(re-assgined).
<hr>

### Question 12
