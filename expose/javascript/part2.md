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
- A: student.name 
- B: student['Grad Year']
- C: student.greeting()
- D: student['Favorite Teacher']['name']
- E: student.courseLoad[0]
<hr>

### Question 13
- A: **32** with `string` type. `+` operator here is working as string concatenation operator. Thus, Since operation works from left to right, string **'3'** + string conversion of **2**. So this expression shows **32** as `string` with string conversion
- B: **1** with `number` type. `-` operator here is working as `math operator` So `string` **3** converted to `number`. So this expression shows **1** as `number` type with numeric conversion
- C: **3** with `number` type. **null** is converted to 0 by the Numeric conversion rules. 3 + 0 = **3** as `number` type with numeric conversion
- D: **3null** with `string` type. Similar with **A**, **3** with `string` type and string concatenation operator `+`. So **null** converted to `stirng`. So this expression shows **3null** as `string` type with string conversion
- E: **4** with `number` type. Even though `Bool` type is left, binary operator `+` only works as string concatenation operator or math operator. So, here  **true** will be converted 1 based on Numeric conversion rules
- F: **0** with `number` type. binary `+` operator will works only two purposes. In this case, there is no `String` type, so it will works as math operator Similar with **E**, **false** here will be convered 0 based on Numeric conversion rules, and **null* will be converted to 0 as well
- G: **3undefined** with `string` type. Similar with **A** and **D**, **3** is `string` type. `+` works as string concatenation operator. Thus this expression shows **3undefined** as `string` type with string conversion
- H: **NaN** with conversion failed (technically `number` type). binary `-` operater only works with math operator. **undefined** becomes **NaN** based on Numeric conversion rules 

### Question 14
- A: **true**, when comparing values of different types, JS converts the values to numbers. 
- B: **false**, `string` comparison uses lexicographical order. So **12** is faster order than **2**
- C: **true**, Similar with **A** `stirng` **2** is converted to number
- D: **false**, `===` is **strict equality operator**. it checks the equality without type conversions, different type causes **false**
- E: **false**, For boolean values, **true** becomes 1 and **false** becomes 0. 
- F: **true**, by boolean conversion rules, only numeric value that will become **false** is `0`. Thus, `Boolean(2)` will convert to **true**

### Question 15

`===` operator is called **strict equality operator**. it checks the equality without type conversions.

### Question 16
> this code block is also saved at expose/javascript/part2-question16.js 

> [Jump to directory](https://github.com/JongminKim292/fa22-cse110-lab4/blob/main/expose/javascript/part2-question16.js)

```
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (prop in statistics) {
    if (prop[0] == 'r' || statistics[prop]%2 == 1){
        console.log(prop + ", value : " + statistics[prop])
    }
}
```

### Question 17
*it will return `[2, 4, 6]`*
1. `line 13` called function modifyArray with paramater `[1,2,3]` and call back function `dosomething`
2. return variable **newArr** is declared at `line 2` with `const`
3. **newArr** push item that callback function `dosomething()` with callback parameter `array[i]` 
4. callback function `dosomething(array[i])` returns each item `array[i]*2`
5. `newArr ` = [ 1 * 2 = 2, 2 * 2 = 4, 3 * 2 = 6]
6. return `[2,4,6]`


### Question 18
> this code block is also saved at expose/javascript/part2-question18.js 

> [Jump to directory](https://github.com/JongminKim292/fa22-cse110-lab4/blob/main/expose/javascript/part2-question18.js)

```
function time() {
    let d = new Date();
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}

setInterval(time, 1000)
```

### Question 19
**1 - 4 - 3 -2**
<br>
`setTimeout()` function sets a timer which executes a function or specified piece of code once the timer expires. In this case, `line 1` and `line 5` executed directly (in order). `line 4` executed with slight delay and `line 3` executed after time set