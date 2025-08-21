export class Permissions {
  static readonly PERM_ACCESS_DASHBOARD = 'perm.access.dashboard';

  static readonly PERM_ACCESS_PRODUCT = 'perm.access.product';
  static readonly PERM_CREATE_PRODUCT = 'perm.create.product';
  static readonly PERM_UPDATE_PRODUCT = 'perm.update.product';
  static readonly PERM_ACCESS_CATEGORY = 'perm.access.category';
  static readonly PERM_CREATE_CATEGORY = 'perm.create.category';
  static readonly PERM_ACCESS_BRAND = 'perm.access.brand';
  static readonly PERM_CREATE_BRAND = 'perm.create.brand';
  static readonly PERM_PRINT_BARCODE = 'perm.print-barcodes';

  static readonly PERM_ACCESS_POS = 'perm.access.pos';
  static readonly PERM_ACCESS_SALE = 'perm.access.sale';
  static readonly PERM_CREATE_SALE = 'perm.create.sale';
  static readonly PERM_UPDATE_SALE = 'perm.update.sale';
  static readonly PERM_DELETE_SALE = 'perm.delete.sale';

  static readonly PERM_ACCESS_SALE_RETURN = 'perm.access.sale-return';
  static readonly PERM_CREATE_SALE_RETURN = 'perm.create.sale-return';
  static readonly PERM_DELETE_SALE_RETURN = 'perm.delete.sale-return';

  static readonly PERM_ACCESS_CUSTOMER = 'perm.access.customer';
  static readonly PERM_CREATE_CUSTOMER = 'perm.create.customer';

  static readonly PERM_ACCESS_SETTINGS = 'perm.access.setting';
  static readonly PERM_UPDATE_SETTINGS = 'perm.update.setting';

  static readonly PERM_ACCESS_ROLE = 'perm.access.role';
  static readonly PERM_CREATE_ROLE = 'perm.create.role';

  static readonly PERM_ACCESS_USER = 'perm.access.user';
  static readonly PERM_CREATE_USER = 'perm.create.user';

  static readonly PERM_PRODUCTS_REPORT = 'perm.product-report';
  static readonly PERM_SALES_REPORT = 'perm.sales-report';

  static getAllPermissions(): string[] {
    return Object.values(Permissions);
  }
}
