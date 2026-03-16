package com.magestichotel.backend.controller;

import com.magestichotel.backend.service.UserService;
import com.magestichotel.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user/dashboard")
public class UserController {
    @Autowired
    private UserService userService;

//    create User
    @PostMapping("/create")
    ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

//    get User By Id
    @GetMapping("/{id}")
    ResponseEntity<User> getUserById(@PathVariable long id){
        try{
            User getUserId = userService.getUserById(id);
            return new ResponseEntity<>(getUserId,HttpStatus.OK);
        }catch (RuntimeException e) {
            return new ResponseEntity<>((HttpHeaders) null, HttpStatus.NOT_FOUND);
        }
    }

//    get All User
    @GetMapping
    ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
    }

//    update User
    @PutMapping("/update/{id}")
    ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User userDetails){
        User updatedUser = userService.updateUser(id,userDetails);
        return new ResponseEntity<>(updatedUser,HttpStatus.OK);
    }

//    delete User
    @DeleteMapping("/delete/{id}")
    public  void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }


}

