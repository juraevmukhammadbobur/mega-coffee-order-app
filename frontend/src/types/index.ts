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
    id: string;
    title: string;
    quantity: number;
    price: number;
    imgage: string;
}

export interface Order {
    shortId: number;
    id: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
}