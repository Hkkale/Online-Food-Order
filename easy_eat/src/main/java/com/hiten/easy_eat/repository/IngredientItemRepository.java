package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem,Long> {


    List<IngredientsItem> findByRestaurantId(Long restaurantId);
}
