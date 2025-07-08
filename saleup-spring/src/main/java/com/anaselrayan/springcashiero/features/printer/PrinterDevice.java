package com.anaselrayan.springcashiero.features.printer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class PrinterDevice {
    private String name;
    private boolean isDefault;

    public PrinterDevice(String name, boolean isDefault) {
        this.name = name;
        this.isDefault = isDefault;
    }

}
