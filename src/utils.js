export function prettyPrice(prices) {
    if(prices == null) {
        return 'Not enough data';
    } 
    return `£${((prices.reduce((a,b) => a + b)/prices.length)/100).toFixed(2)} for a pint`
}

export const host = `http://localhost`