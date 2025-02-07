export interface Product {
  
    id?: string; // Optional, since Sanity automatically assigns an ID
    _type: 'categories'; // Ensures the type matches Sanity's document type
    title: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    product: string;
    inventory: number;
    price: number;
    badge: string;
    priceWithoutDiscount: number;
  }
  