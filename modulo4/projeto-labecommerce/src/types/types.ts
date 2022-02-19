export type User = {
    id: number,
    name: string, 
    email: string, 
    password: string
    purchase?: Purchase[]
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