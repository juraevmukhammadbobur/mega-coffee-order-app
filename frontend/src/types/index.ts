export interface ProductCategory {
    hot: boolean;
    cold: boolean;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: ProductCategory;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}


export interface OrderItem {
    id: number;
    title: string;
    quantity: number;
    price: number;
    image: string;
}

export interface Order {
    id: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
}