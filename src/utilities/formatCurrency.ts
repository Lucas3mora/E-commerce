const currency_formatter = new Intl.NumberFormat(undefined, {
    currency: "EGP", style:"currency"
})
export function formatCurrency(number:number){
    return currency_formatter.format(number)
}