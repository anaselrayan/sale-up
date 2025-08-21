package com.anaselrayan.springcashiero.features.reports;

import java.time.LocalDateTime;

public record ReportFilterRequest(LocalDateTime from, LocalDateTime to) {
}
