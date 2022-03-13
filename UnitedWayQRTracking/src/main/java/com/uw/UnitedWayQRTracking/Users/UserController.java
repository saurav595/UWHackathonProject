package com.uw.UnitedWayQRTracking.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class UserController {

    private final UserService userservice;

    @Autowired
    public UserController(UserService userservice) {
        this.userservice = userservice;
    }

    @GetMapping
    public List<User> getUsers() {
        return userservice.getUsers();
    }

    @PostMapping(path = "/createUser")
    public void createUser(@RequestBody User user) {
         userservice.createUser(user);
    }


}
