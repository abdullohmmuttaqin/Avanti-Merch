document.addEventListener('alpine:init', () => {

    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'TS NIRVANA', img: 'N.jpg', price: 650000 }
    { id: 1, name: 'TS NECK DEEP', img: 'ND.jpg', price: 650000 }
    { id: 1, name: 'TS GREEN DAY', img: 'GD.jpg', price: 650000 }
    { id: 1, name: 'TS BLINK-182', img: 'B.jpg', price: 650000 }
    { id: 1, name: 'TS SYSTEM OF A DOWN', img: 'SOAD.jpg', price: 650000 }
        ],
    }));
});