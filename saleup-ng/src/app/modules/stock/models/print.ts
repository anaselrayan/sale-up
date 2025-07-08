export class PrintBarcodeRequest {
    printer!: string;
    barcodes!: string[];
    barcodeFormat!: string;
    copies!: number;
    size!: number; 

    constructor() {
        this.barcodes = [];
        this.barcodeFormat = 'CODE_128';
        this.copies = 1;
        this.size = 100;
    }
}