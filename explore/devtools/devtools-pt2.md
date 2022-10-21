# Explore

## DevTools - Debugging
### Question 1.
> `num1` and `num2` are type of `string`. 

so binary operator `+` at `calcumateSum()` is working as string concatenation operator.

Thus, result contains concatenated `string` `num1 + num2`, which is not expected.
### Question 2.
> Do numeric type conversion for `num1` and `num2` 

parse the string from original element, and do numeric type conversion. If input is not validate(is not number string), it will return NaN 
