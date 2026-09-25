export interface Finish {
    name: string;
    colorCode: string;
    image: string;
}

export interface Dimensions {
    widthCm: number;
    heightCm: number;
    depthCm: number;
}

export type StockPolicy = 'stock' | 'made_to_order';

export interface ProductType {
    id: string,
    category: string,
    type: string,
    name: string,
    new: boolean,
    sale: boolean,
    rate: number,
    price: number,
    originPrice: number,
    sold: number,
    quantity: number,
    quantityPurchase: number,
    dimensions: Dimensions,
    material: string,
    finishes: Finish[],
    boxContents: string[],
    leadTimeDays: number,
    stockPolicy: StockPolicy,
    care: string,
    installation: string,
    featured: boolean,
    thumbImage: Array<string>,
    images: Array<string>,
    description: string,
    slug: string
}
