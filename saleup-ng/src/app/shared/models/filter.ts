
export enum FilterOperator {
  EQUALS = 'equals',
  NOT_EQUALS = 'notEquals',
  STARTS_WITH = 'startsWith',
  ENDS_WITH = 'endsWith',
  CONTAINS = 'contains',
  GREATER_THAN = 'greaterThan',
  LESS_THAN = 'lessThan',
  GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
  BETWEEN = 'between',
  IN = 'in',
  NOT_IN = 'notIn',
  BEFORE = 'before',
  AFTER = 'after',
  DATE_BETWEEN = 'dateBetween'
}

export interface FilterFieldCriteria {
  fieldName: string;
  operator: {value: FilterOperator, label: string};
  value1: any;
  value2?: any;
}

export class FilterCriteria {
  filterFields!: FilterFieldCriteria[];
  sort?: string;
}

export interface FilterConfig {
  field: string;
  label: string;
  type: FieldType;
  operators: {value: string, label: string} [];
}

export enum FieldType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE'
}

export interface FieldFilterConfig {
  fieldName: string;
  label: string;
  type: FieldType;
  supportedOperators: FilterOperator[];
  options?: any[];
}

export interface EntityFilterConfig {
  entityName: string;
  filterableFields: FieldFilterConfig[];
}

export function getTextOperators() {
  return [
    { value: FilterOperator.STARTS_WITH, label: FilterOperator.STARTS_WITH },
    { value: FilterOperator.CONTAINS, label: FilterOperator.CONTAINS },
    { value: FilterOperator.ENDS_WITH, label: FilterOperator.ENDS_WITH }
  ];
}

export function getNumericOperators() {
  return [
    { value: FilterOperator.EQUALS, label: FilterOperator.EQUALS },
    { value: FilterOperator.GREATER_THAN, label: FilterOperator.GREATER_THAN },
    { value: FilterOperator.LESS_THAN, label: FilterOperator.LESS_THAN },
    { value: FilterOperator.BETWEEN, label: FilterOperator.BETWEEN }
  ];
}

export function getDateOperators() {
  return [
    { value: FilterOperator.BEFORE, label: FilterOperator.BEFORE },
    { value: FilterOperator.AFTER, label: FilterOperator.AFTER },
    { value: FilterOperator.DATE_BETWEEN, label: FilterOperator.DATE_BETWEEN }
  ];
}
