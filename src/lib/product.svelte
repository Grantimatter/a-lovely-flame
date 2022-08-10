<script context="module" lang="ts">
  export interface Product {
    name: string;
    url: string;
    price: number;
    description: string;
    notes: ScentNotes[];
    thumbnail?: string;
    sku: string;
    category: string;
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
</script>
