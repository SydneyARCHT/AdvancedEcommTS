import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }

export const useProductData = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchProducts();
    }, []);

    return { products, error };
};