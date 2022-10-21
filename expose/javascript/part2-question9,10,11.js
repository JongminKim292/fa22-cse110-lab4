// Question 9,10,11,12
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i ++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(length);

    return discounted;
}

discountPrices([100, 200, 300], 0.5)