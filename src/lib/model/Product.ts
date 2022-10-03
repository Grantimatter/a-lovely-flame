import type { LineItem } from "../utility/strapi/productsApi";

export interface Product {
    attributes: PurpleAttributes;
    meta: string;
    fullSku: string;
    sku: string;
    Fragrances: Fragrances;
    LineItem: LineItem
}

export interface ProductData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    Title:          string;
    Price:          number;
    Description:    string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
    locale:         Locale;
    sku:            string;
    Slug:           string;
    Plural:         string;
    Media?:         Addons;
    Fragrances:    Fragrances;
    Addons?:        Addons;
    Thumbnail:      Thumbnail;
    localizations?: Fragrances;
}

export interface Addons {
    data: DataDatum[] | DataData | null;
}

export interface DataDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    Name:      string;
    Price:     number;
    createdAt: Date;
    updatedAt: Date;
    locale:    Locale;
    Sku:       null;
    Slug:      null;
}

export enum Locale {
    En = "en",
}

export interface DataData {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Fragrances {
    attributes: StickyAttributes;
}

export interface FragrancesDatum {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    Name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Summary:      string;
    locale:      Locale;
    SKU:         string;
    SKUID:       string;
    Story:       null | string;
}