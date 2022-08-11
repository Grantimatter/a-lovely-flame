
  export interface Product {
    name: string;
    price: number;
    description: string;
    notes: ScentNotes[];
    thumbnail?: string;
    sku: string;
    categories: Categories[];
  }

  export enum Categories {
    Candles,
    BathSoaks,
    SoapBars
  }

  export enum ScentNotes {
    Fruity, 
    Musky,
    Floral,
    Sweet,
    Masculine,
    Earthy,
    Foody,
    Fresh,
    Citrus,
    Spicy,
    Gourmand
  }