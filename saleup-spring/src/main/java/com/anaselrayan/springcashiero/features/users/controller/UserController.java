package com.anaselrayan.springcashiero.features.users.controller;

import com.anaselrayan.springcashiero.features.users.request.UserRequest;
import com.anaselrayan.springcashiero.features.users.service.UserService;
import com.anaselrayan.springcashiero.infrastructure.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.anaselrayan.springcashiero.infrastructure.constatnts.Endpoint.API_URL;

@RestController
@RequestMapping(API_URL + "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PreAuthorize("hasAuthority('perm.create.user')")
    @PostMapping
    public ResponseEntity<ApiResponse> createUser(@ModelAttribute UserRequest request) {
        ApiResponse res = userService.createUser(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.create.user')")
    @PutMapping
    public ResponseEntity<ApiResponse> updateUser(@ModelAttribute UserRequest request) {
        ApiResponse res = userService.updateUser(request);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.delete.user')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long userId) {
        ApiResponse res = userService.deleteUser(userId);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.create.user')")
    @GetMapping("lock/{userId}")
    public ResponseEntity<ApiResponse> toggleUserStatus(@PathVariable Long userId, @RequestParam boolean lock) {
        ApiResponse res = userService.toggleUserStatus(userId, lock);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAuthority('perm.access.user')")
    @GetMapping
    public ResponseEntity<ApiResponse> getUsersPage(@RequestParam Integer page,
                                                   @RequestParam Integer size) {
        ApiResponse res = userService.getUsersPage(PageRequest.of(page, size));
        return ResponseEntity.ok(res);
    }

    @GetMapping("/image/{userId}/{fileName}")
    public ResponseEntity<Resource> getUserImage(@PathVariable Long userId, @PathVariable String fileName) {
        return userService.getUserImageResource(userId, fileName);
    }

    @GetMapping("/image/{username}")
    public ResponseEntity<Resource> getUserImage(@PathVariable String username) {
        return userService.getUserImageResource(username);
    }

}
