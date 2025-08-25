import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FieldType, FilterConfig, getNumericOperators, getTextOperators } from "@shared/models/filter";

@Injectable({
    providedIn: 'root'
})
export class EntityFilter {

    constructor(private translate: TranslateService) {}

    public getProductFilterConfig(): FilterConfig[] {
        return [
            {
                field: 'name',
                label: this.translate.instant('PRODUCT_NAME'),
                type: FieldType.TEXT,
                operators: getTextOperators()
            },
            {
                field: 'barcode',
                label: this.translate.instant('BARCODE'),
                type: FieldType.TEXT,
                operators: getTextOperators()
            },
            {
                field: 'quantity',
                label: this.translate.instant('QUANTITY'),
                type: FieldType.NUMBER,
                operators: getNumericOperators()
            },
            {
                field: 'cost',
                label: this.translate.instant('COST'),
                type: FieldType.NUMBER,
                operators: getNumericOperators()
            },
            {
                field: 'price',
                label: this.translate.instant('SELLING_PRICE'),
                type: FieldType.NUMBER,
                operators: getNumericOperators()
            }
        ];
    }
}