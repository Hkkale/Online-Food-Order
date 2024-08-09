package com.hiten.easy_eat.service;

import com.hiten.easy_eat.model.User;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email ) throws  Exception;


}
