package com.hiten.easy_eat.controller;

import com.hiten.easy_eat.model.CartItem;
import com.hiten.easy_eat.model.Order;
import com.hiten.easy_eat.model.User;
import com.hiten.easy_eat.request.AddCartItemRequest;
import com.hiten.easy_eat.request.OrderRequest;
import com.hiten.easy_eat.service.OrderService;
import com.hiten.easy_eat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;



    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(@RequestBody OrderRequest req,
                                                  @RequestHeader("Authorization") String jwt) throws Exception {

        User user=userService.findUserByJwtToken(jwt);
        Order order =orderService.createOrder(req,user);
        return  new ResponseEntity<>(order, HttpStatus.OK);
    }


    @GetMapping("/order/user")
    public ResponseEntity <List<Order>> getOrderHistory(
                                             @RequestHeader("Authorization") String jwt) throws Exception {

        User user=userService.findUserByJwtToken(jwt);
        List<Order> orders =orderService.getUserOrder(user.getId());
        return  new ResponseEntity<>(orders, HttpStatus.OK);
    }



}
