package com.anaselrayan.springcashiero.security.service;

import com.anaselrayan.springcashiero.security.model.AppUser;
import com.anaselrayan.springcashiero.security.model.SecurityAppUser;
import com.anaselrayan.springcashiero.security.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> userOptional = appUserRepository.findByUsername(username);
        if (userOptional.isPresent())
            return new SecurityAppUser(userOptional.get());
        throw new UsernameNotFoundException("Username not found!");
    }

}
