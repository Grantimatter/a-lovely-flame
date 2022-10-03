export default class ProductType {
    constructor(public Title: string, public Plural: string, public Slug: string, public SortOrder: number) {
    }

    /**
     * 
     * @param response API Response object holding the product type
     */
    public static createFromApi(attributes: any):  ProductType{
        return new ProductType(attributes.Title, attributes.Plural, attributes.Slug, attributes.SortOrder);
    }

    /**
     * 
     * @param response API Response object holding the product types
     */
    public static createAllFromApi(response: any): ProductType[] {
        const types: ProductType[] = [];
        for (const pt of response.data) {
            types.push(this.createFromApi(pt.attributes));
        }

        return types;
    }
}