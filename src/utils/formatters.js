const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export const formatPrice = (price) => {
    return formatCurrency.format(price);
}