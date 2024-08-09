package com.hiten.easy_eat.request;

import com.hiten.easy_eat.model.ContactInformation;

import java.util.List;

public class CreateRestaurantRequest {

    private Long id;
    private String name;

    private String description;

    private String cuisineType;

    private String addresss;

    private ContactInformation contactInformation;

    private String openingHours;
    private List<String> images;

}
