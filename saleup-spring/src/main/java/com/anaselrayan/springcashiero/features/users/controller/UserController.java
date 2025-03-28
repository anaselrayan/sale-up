package com.anaselrayan.springcashiero.features.users.controller;

import com.anaselrayan.springcashiero.core.response.ApiResponse;
import com.anaselrayan.springcashiero.features.users.request.UserRequest;
import com.anaselrayan.springcashiero.features.users.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.core.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<ApiResponse> createUser(@ModelAttribute @Valid UserRequest request) {
        ApiResponse res = userService.createUser(request);
        return ResponseEntity.status(res.getCode()).body(res);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getUsersPage(@RequestParam Integer page,
                                                   @RequestParam Integer size) {
        ApiResponse res = userService.getUsersPage(PageRequest.of(page, size));
        return ResponseEntity.status(res.getCode()).body(res);
    }

}
