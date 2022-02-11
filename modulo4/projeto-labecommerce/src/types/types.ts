export type User = {
    name: string, 
    email: string, 
    password: string
}

export type Product = { 
    name: string, 
    price: number, 
    image_url: string
}

export type Purchase = {
    user_id: number,
    product_id: number, 
    quantity: number, 
    total_price: number
}