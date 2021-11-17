const PRODUCTS = [
    {
        id: 1,
        name: 'Rose',
        price: 350,
        image: require('../assets/products/rr.jpg'),
        description: 'There are a variety of species of Roses, but all can produce showy flowers. The plants have flowers that bloom on a bush, and may occur in a variety of colors from pastel pinks to dark, deep blues. Price is per bouquet'
    },
    {
        id: 2,
        name: 'Bergenia',
        price: 120,
        image: require('../assets/products/bg.jpg'),
        description: 'Bergenia is also referred to as elephant’s ears. These plants are a great evergreen ground cover and have large, rounded leaves.   Price is per bouquet'


    },
    {
        id: 3,
        name: 'Tulips',
        price: 180,
        image: require('../assets/products/tu.jpg'),
        description: 'Tulips are hardy perennials that develop from bulbs best planted in the fall. Price is per bouquet '
    },
    {
        id: 4,
        name: 'Abutilon',
        price: 450,
        image: require('../assets/products/oa.jpg'),
        description: 'Abutilon is a shrub that blooms during the summer. This plant produces flowers that may be white to a purple blue color. Price is per bouquet'
    },
    {
        id: 5,
        name: 'Alyssum',
        price: 240 ,
        image: require('../assets/products/wa.jpg'),
        description: 'Alyssum or sweet alyssum is a hardy plant that features heat and drought resistance. Often grown as a component of alpine rock gardens, this plant can thrive in a wide range of regions across the United States, where it has become naturalized. Members of the mustard family, these plants smell sweet.'
    },
    {
        id: 6,
        name: 'African Daisy',
        price: 100 ,
        image: require('../assets/products/te.jpg'),
        description: 'The African Daisy is a perennial with flowers that come in a variety of colors including red, gold, and blue.'


    },
    {
        id: 7,
        name: 'Agapanthus',
        price: 300,
        image: require('../assets/products/bas.jpg'),
        description: 'Agapanthus comes in a variety of colors and heights. These showy flowers are produced in colors such as blue and purple.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

