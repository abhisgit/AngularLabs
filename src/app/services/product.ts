export interface Product {
    id: number;
    code: string;
    description: string;
    quantity: number;
    cost: number;
    active: boolean;
    commnents: string;
}

export const products: Product[] = [
    { id: 1, code: 'P-01', description: 'Product 01', quantity: 10, cost: 500, active: true, commnents: '' },
    { id: 2, code: 'P-02', description: 'Product 02', quantity: 12, cost: 200, active: true, commnents: '' },
    { id: 3, code: 'P-03', description: 'Product 03', quantity: 5, cost: 400, active: true, commnents: '' },
    { id: 4, code: 'P-04', description: 'Product 04', quantity: 20, cost: 100, active: true, commnents: '' },
    { id: 5, code: 'P-05', description: 'Product 05', quantity: 7, cost: 900, active: false, commnents: '' },
    { id: 6, code: 'P-06', description: 'Product 06', quantity: 15, cost: 600, active: true, commnents: '' },
    { id: 7, code: 'P-07', description: 'Product 07', quantity: 13, cost: 500, active: false, commnents: '' },
    { id: 8, code: 'P-08', description: 'Product 08', quantity: 18, cost: 600, active: true, commnents: '' },
    { id: 9, code: 'P-09', description: 'Product 09', quantity: 25, cost: 1000, active: true, commnents: '' },
    { id: 10, code: 'P-10', description: 'Product 10', quantity: 100, cost: 2000, active: true, commnents: '' }
];