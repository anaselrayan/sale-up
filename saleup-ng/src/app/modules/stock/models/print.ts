export class PrintBarcodeRequest {
    printer!: string;
    barcodes!: string[];
    barcodeFormat!: string;
    copies!: number;
    width!: number; 
    height!: number; 
    marginLeft!: number; 
    marginTop!: number; 

    constructor() {
        this.barcodes = [];
        this.barcodeFormat = 'CODE_128';
        this.copies = 1;
        this.width = 50;
        this.height = 20;
        this.marginLeft = 0;
        this.marginTop = 0;
    }
}