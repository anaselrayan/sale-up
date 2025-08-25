import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FilterConfig, FilterCriteria, FilterFieldCriteria, FilterOperator, FieldType } from '@shared/models/filter';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-filter-drawer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Drawer, Select,
    Button, InputNumber, InputTextModule, TranslateModule],
  templateUrl: './filter-drawer.component.html',
  styleUrl: './filter-drawer.component.scss'
})
export class FilterDrawerComponent {
  @Input() configs: FilterConfig[] = [];
  @Input() visible: boolean = false;   // control drawer open/close
  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() applyFilters = new EventEmitter<FilterCriteria>();
  @Output() resetFilters = new EventEmitter<void>();

  form!: FormGroup;

  textOperators: any;
  numericOperators: any;
  dateOperators: any;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.initFilterOperators();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      filters: this.fb.array([])
    });

    this.configs.forEach(cfg => {
      this.filters.push(this.buildFilterGroup(cfg));
    });
  }

  initFilterOperators() {
    this.textOperators = [
      { value: FilterOperator.STARTS_WITH, label: this.translate.instant('startsWith') },
      { value: FilterOperator.CONTAINS, label: this.translate.instant('contains') },
      { value: FilterOperator.ENDS_WITH, label: this.translate.instant('endsWith') }
    ];

    this.numericOperators = [
      { value: FilterOperator.EQUALS, label: this.translate.instant('equals') },
      { value: FilterOperator.GREATER_THAN, label: this.translate.instant('greaterThan') },
      { value: FilterOperator.LESS_THAN, label: this.translate.instant('lessThan') },
      { value: FilterOperator.BETWEEN, label: this.translate.instant('between') }
    ];

    this.dateOperators = [
      { value: FilterOperator.BEFORE, label: this.translate.instant('before') },
      { value: FilterOperator.AFTER, label: this.translate.instant('after') },
      { value: FilterOperator.DATE_BETWEEN, label: this.translate.instant('dateBetween') }
    ];
  }

  get filters(): FormArray {
    return this.form.get('filters') as FormArray;
  }

  private buildFilterGroup(cfg: FilterConfig): FormGroup {
    return this.fb.group({
      fieldName: [cfg.field],
      operator: [cfg.operators[0].value],   // default operator
      value1: '',
      value2: ''
    });
  }

  onApply(): void {
    const filters: FilterFieldCriteria[] = this.form.value.filters
      .filter((f: any) => f.value1 !== '' && f.value1 !== null)
      .map((f: any) => ({
        fieldName: f.fieldName,
        operator: f.operator,
        value1: f.value1,
        value2: f.value2 || 0
      }));

    this.applyFilters.emit({
      filterFields: filters
    });
    this.close();
  }

  onReset(): void {
    this.filters.controls.forEach((ctrl, i) => {
      const fieldName = this.configs[i].field;
      const firstOperator = (this.configs[i].operators[0] as any).value;

      ctrl.patchValue({
        fieldName,
        operator: firstOperator,
        value1: '',
        value2: ''
      }, { emitEvent: false });
    });

    this.resetFilters.emit();
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  fieldType(fieldName: string): FieldType | undefined {
    return this.configs.find(c => c.field === fieldName)?.type;
  }

}
