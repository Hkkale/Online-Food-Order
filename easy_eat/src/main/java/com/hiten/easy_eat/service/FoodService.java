package com.hiten.easy_eat.service;

import com.hiten.easy_eat.model.Category;
import com.hiten.easy_eat.model.Food;
import com.hiten.easy_eat.model.Restaurant;
import com.hiten.easy_eat.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;


    List<Food> getRestaurantsFood(Long restaurantId, boolean isVegetarian, boolean isNonveg,boolean isSeasonal, String foodCategory);

    List<Food> searchFood(String keyword);
    Food findFoodById(Long id) throws  Exception;

    Food updateAvailabilityStatus(Long foodId) throws  Exception;




}
