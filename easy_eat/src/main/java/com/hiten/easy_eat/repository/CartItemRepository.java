package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {



}
