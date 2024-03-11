
export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    branch: string,
    category: string,
    thumbnail: string,
    images: string[],
}

export type ProductResponse = {
    products: Product[]
}

export type CartItem = {
    product: Product,
    quantity: number,
}

