package com.anaselrayan.springcashiero.infrastructure.response;

import lombok.*;
import org.springframework.util.Assert;

import java.time.ZonedDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class ApiResponse {

    private Boolean success;
    private Integer code;
    private String message;
    private Object data;
    private Boolean error;
    private ZonedDateTime timestamp;

    public ApiResponse(Boolean success, Integer code, String message) {
        Assert.notNull(success, "success flag can't be null!");
        if (code == null) {
            code = success ? StatusCode.OK : StatusCode.INTERNAL_ERROR;
        }
        this.message = message;
        this.success = success;
        this.code = code;
        this.timestamp = ZonedDateTime.now();
    }

    public ApiResponse(Object body, Integer code) {
        success = true;
        error = false;
        timestamp = ZonedDateTime.now();
        this.code = code;
        this.data = body;
        message = "";
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private Boolean success;
        private Integer code;
        private String message;
        private Object data;
        private Boolean error;

        public Builder success(boolean success) {
            this.success = success;
            return this;
        }

        public Builder code(int code) {
            this.code = code;
            return this;
        }

        public Builder message(String message) {
            this.message = message;
            return this;
        }

        public Builder data(Object data) {
            this.data = data;
            return this;
        }

        public Builder error(boolean error) {
            this.error = error;
            return this;
        }

        public ApiResponse build() {
            ZonedDateTime timestamp = ZonedDateTime.now();
            return new ApiResponse(success, code, message, data, error, timestamp);
        }
    }

}
