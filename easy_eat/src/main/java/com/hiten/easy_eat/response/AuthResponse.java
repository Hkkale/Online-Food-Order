package com.hiten.easy_eat.response;

import com.hiten.easy_eat.model.USER_ROLE;
import lombok.Data;


@Data
public class AuthResponse {

    private String jwt;

    private String message;
    private USER_ROLE role;


}
