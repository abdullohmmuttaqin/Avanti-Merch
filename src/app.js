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
            // Cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;   
            } else {
                // Jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    // Jika barang beda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // Jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;  
                        return item;
                    }
                });

            }
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