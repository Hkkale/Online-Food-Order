package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {

}
