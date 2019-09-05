function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
    //last one is the default and no need for condition
    // in fact it won't take consitional 
}

checkSign(10);
