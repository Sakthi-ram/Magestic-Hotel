package com.magestichotel.backend.service;

import com.magestichotel.backend.repository.UserRepository;
import com.magestichotel.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

//    create user
    public User createUser(User user){
        return userRepository.save(user);
    }

//    get User
    public User getUserById(long id){
        return userRepository.findById(id).orElseThrow(()-> new RuntimeException(" User Not Found"));
    }

//    get All User
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

//    update User
    public  User updateUser(long id,User updateUserDetails){
        User existingUser=userRepository.findById(id).orElseThrow(()->new RuntimeException("User Not Found"));
        existingUser.setFirstname(updateUserDetails.getFirstname());
        existingUser.setLastname(updateUserDetails.getLastname());
        existingUser.setPhonenumber(updateUserDetails.getPhonenumber());
        existingUser.setUpiid(updateUserDetails.getUpiid());
        return userRepository.save(existingUser);
    }

//    delete User
    public void deleteUser(long id){
        userRepository.delete(getUserById(id));
    }
}
