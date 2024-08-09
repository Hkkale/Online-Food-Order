package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Long> {

    public User findByEmail(String username);




}
