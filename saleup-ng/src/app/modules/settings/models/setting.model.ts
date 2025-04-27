export interface Setting {
    key: string;
    value: string;
    type: string;
    category: SettingCategory;
    options: SettingOption[];
}

export interface SettingCategory {
    id: number;
    name: string;
    description: string;
}

export interface SettingOption {
    id: number,
    name: string,
    value: string
}

export enum SettingType {
    STRING="STRING",
    NUMBER="NUMBER",
    BOOLEAN="BOOLEAN",
    SELECT="SELECT",
    IMAGE="IMAGE"
}