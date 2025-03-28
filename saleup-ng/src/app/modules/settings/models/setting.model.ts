export interface Setting {
    key: string;
    value: string;
    type: string;
    category: SettingCategory;
}

export interface SettingCategory {
    id: number;
    name: string;
    description: string;
}