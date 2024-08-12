package com.hiten.easy_eat.request;

import com.hiten.easy_eat.model.Address;
import com.hiten.easy_eat.model.ContactInformation;

import lombok.Data;


import java.util.List;


@Data


public class CreateRestaurantRequest {

    private Long id;
    private String name;

    private String description;

    private String cuisineType;

    private Address address;

    private ContactInformation contactInformation;

    private String openingHours;
    private List<String> images;

}
