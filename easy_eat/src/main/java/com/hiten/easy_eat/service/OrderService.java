package com.hiten.easy_eat.service;

import com.hiten.easy_eat.model.Order;
import com.hiten.easy_eat.model.User;
import com.hiten.easy_eat.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user) throws Exception;

    public Order updateOrder(Long orderID , String orderStatus) throws Exception;


    public void cancelOrder(Long orderId) throws Exception;

    public List<Order> getUserOrder(Long userID) throws Exception;


    public List<Order> getRestaurantsOrder(Long restaurantId,String orderStatus) throws  Exception;

    public Order findOrderById(Long orderId) throws  Exception;


}
