export const formatCurrency = (num) => {
    return '$' + Number(num.toFixed(1)).toLocaleString() + ' ';
}

export const generateRandomPrice = (min = 1000, max = 100000) => {
    let difference = max - min;
    let rand = Math.random(); 
    rand = Math.floor( rand * difference);
    rand = rand + min;
    rand = parseInt(rand / 10) * 10;
    return rand;
}

