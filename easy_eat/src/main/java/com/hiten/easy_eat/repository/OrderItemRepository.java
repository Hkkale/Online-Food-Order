package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.Order;
import com.hiten.easy_eat.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
}
