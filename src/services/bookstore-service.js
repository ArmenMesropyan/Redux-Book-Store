export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'A Typographical Journey of Typography Through the Inland Printer, 1883-1900 compiled by Maurice Annenberg',
            author: 'Inland Printer',
            image: 'https://cdn.shopify.com/s/files/1/0880/2454/products/ATypographicalJourney_295x.jpg?v=1594920381',
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        })
    }
}