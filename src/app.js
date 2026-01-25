document.addEventListener('alpine:init', () => {

    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'TS NIRVANA', img: 'nirvana.jpg', price: 650000 },
            { id: 2, name: 'TS NECK DEEP', img: 'nd.jpg', price: 258000 },
            { id: 3, name: 'TS GREEN DAY', img: 'gd.jpg', price: 875000 },
            { id: 4, name: 'TS BLINK-182', img: 'bl182.jpg', price: 958000 },
            { id: 5, name: 'TS SYSTEM OF A DOWN', img: 'soad.jpg', price: 459000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            this.items.push(newItem);
            this.quantity++;
            this.total += newItem.price;
            console.log(this.items);
        },
    });
});

// Konversi ke Rupiah
const rupiah = (Number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(Number);
};