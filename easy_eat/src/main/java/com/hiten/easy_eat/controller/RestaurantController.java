package com.hiten.easy_eat.controller;

import com.hiten.easy_eat.dto.RestaurantDto;
import com.hiten.easy_eat.model.Restaurant;
import com.hiten.easy_eat.model.User;
import com.hiten.easy_eat.request.CreateRestaurantRequest;
import com.hiten.easy_eat.service.RestaurantService;
import com.hiten.easy_eat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {


    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;


    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestParam String keyword, @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        List<Restaurant> restaurant= restaurantService.searchRestaurant(keyword);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Restaurant>> getAllRestaurant( @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        List<Restaurant> restaurant= restaurantService.getAllRestaurant();

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(@PathVariable Long id, @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        Restaurant restaurant= restaurantService.findRestaurantById(id);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addFavorites(@PathVariable Long id, @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        RestaurantDto restaurant= restaurantService.addToFavorites(id,user);



        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
}
