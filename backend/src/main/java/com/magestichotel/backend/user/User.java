package com.magestichotel.backend.user;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column(name = "First Name")
    String firstname;
    @Column(name = "Last Name")
    String lastname;
    @Column(name = "Phone no.")
    long phonenumber;
    @Column(name = "Upi Id")
    String upiid;
}
