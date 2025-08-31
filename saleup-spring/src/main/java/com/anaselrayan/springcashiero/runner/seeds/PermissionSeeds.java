package com.anaselrayan.springcashiero.runner.seeds;

import com.anaselrayan.springcashiero.features.permissions.constant.Permissions;
import com.anaselrayan.springcashiero.security.model.Permission;

import java.util.List;

public class PermissionSeeds {

    public static List<Permission> getPermList() {
        return List.of(
                Permission.builder().permCode(Permissions.PERM_ACCESS_DASHBOARD).permName("PERM_ACCESS_DASHBOARD").permCategory("DASHBOARD").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_PRODUCT).permName("PERM_ACCESS_PRODUCT").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_PRODUCT).permName("PERM_CREATE_PRODUCT").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_PRODUCT).permName("PERM_UPDATE_PRODUCT").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_PRODUCT).permName("PERM_DELETE_PRODUCT").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_CATEGORY).permName("PERM_ACCESS_CATEGORY").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_CATEGORY).permName("PERM_CREATE_CATEGORY").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_BRAND).permName("PERM_ACCESS_BRAND").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_BRAND).permName("PERM_CREATE_BRAND").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_BRAND).permName("PERM_UPDATE_BRAND").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_BRAND).permName("PERM_DELETE_BRAND").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_PRINT_BARCODE).permName("PERM_PRINT_BARCODE").permCategory("PRODUCTS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_POS).permName("PERM_ACCESS_POS").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_SALE).permName("PERM_ACCESS_SALE").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_SALE).permName("PERM_CREATE_SALE").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_SALE).permName("PERM_UPDATE_SALE").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_SALE).permName("PERM_DELETE_SALE").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_SALE_RETURN).permName("PERM_ACCESS_SALE_RETURN").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_SALE_RETURN).permName("PERM_CREATE_SALE_RETURN").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_SALE_RETURN).permName("PERM_DELETE_SALE_RETURN").permCategory("SALES").build(),
                Permission.builder().permCode(Permissions.PERM_PRODUCTS_REPORT).permName("PERM_PRODUCTS_REPORT").permCategory("REPORTS").build(),
                Permission.builder().permCode(Permissions.PERM_SALES_REPORT).permName("PERM_SALES_REPORT").permCategory("REPORTS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_CUSTOMER).permName("PERM_ACCESS_CUSTOMER").permCategory("CUSTOMERS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_CUSTOMER).permName("PERM_CREATE_CUSTOMER").permCategory("CUSTOMERS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_CUSTOMER).permName("PERM_UPDATE_CUSTOMER").permCategory("CUSTOMERS").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_CUSTOMER).permName("PERM_DELETE_CUSTOMER").permCategory("CUSTOMERS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_SETTINGS).permName("PERM_ACCESS_SETTINGS").permCategory("SETTINGS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_SETTINGS).permName("PERM_UPDATE_SETTINGS").permCategory("SETTINGS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_ROLE).permName("PERM_ACCESS_ROLE").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_ROLE).permName("PERM_CREATE_ROLE").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_ROLE).permName("PERM_UPDATE_ROLE").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_ROLE).permName("PERM_DELETE_ROLE").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_ACCESS_USER).permName("PERM_ACCESS_USER").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_CREATE_USER).permName("PERM_CREATE_USER").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_UPDATE_USER).permName("PERM_UPDATE_USER").permCategory("USERS").build(),
                Permission.builder().permCode(Permissions.PERM_DELETE_USER).permName("PERM_DELETE_USER").permCategory("USERS").build()
        );
    }

}
