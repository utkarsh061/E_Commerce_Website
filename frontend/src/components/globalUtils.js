export const NumberToString = (price) => {
    return `Rs ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}