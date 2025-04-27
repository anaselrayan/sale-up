package com.anaselrayan.springcashiero.core.constatnts;

public class Table {

    private static final String PREFIX = "CASHIERO_";

    public static final String PRODUCT = PREFIX + "PRODUCT";
    public static final String PRODUCT_CATEGORY = PRODUCT + "_CATEGORY";
    public static final String PRODUCT_STATUS = PRODUCT + "_STATUS";
    public static final String PRODUCT_BASIC = PRODUCT + "_BASIC";
    public static final String PRODUCT_PRICE = PRODUCT + "_PRICE";
    public static final String PRODUCT_BRAND = PRODUCT + "_BRAND";
    public static final String PRODUCT_UNIT_OF_MEASURE = PRODUCT + "_UNIT_OF_MEASURE";
    public static final String PRODUCT_IMAGE = PRODUCT + "_IMAGE";

    public static final String CUSTOMER = PREFIX + "CUSTOMER";

    public static final String SALE = PREFIX + "SALE";
    public static final String SALE_ITEM = SALE + "_ITEM";

    public static final String SALE_RETURN = PREFIX + "SALE_RETURN";
    public static final String SALE_RETURN_ITEM = SALE_RETURN + "_ITEM";

    public static final String APP_USER = PREFIX + "APP_USER";
    public static final String USER_ROLE = PREFIX + "USER_ROLE";
    public static final String ROLE_PERMISSION = PREFIX + "ROLE_PERMISSION";
    public static final String JT_ROLE_PERMISSIONS = USER_ROLE + "_PERMISSIONS";

    public static final String SETTING = PREFIX + "SETTING";
    public static final String SETTING_CATEGORY = SETTING + "_CATEGORY";
    public static final String SETTING_OPTION = SETTING + "_OPTION";

}
