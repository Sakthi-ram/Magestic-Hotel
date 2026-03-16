package com.magestichotel.backend.repository;

import com.magestichotel.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
