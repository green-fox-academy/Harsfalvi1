
export abstract class Vehicle  {
    protected serialNumber: string;
    protected yearOfProduct: number;
    protected manufacturer: string;

    constructor(manufacturer: string, yearOfProduct: number, serialNumber: string){
        this.serialNumber = serialNumber;
        this.yearOfProduct = yearOfProduct;
        this.manufacturer = manufacturer;
    }
}