package com.hiten.easy_eat.controller;


import com.hiten.easy_eat.model.Restaurant;
import com.hiten.easy_eat.model.User;
import com.hiten.easy_eat.request.CreateRestaurantRequest;
import com.hiten.easy_eat.response.MessageResponse;
import com.hiten.easy_eat.service.RestaurantService;
import com.hiten.easy_eat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;


    @PostMapping()
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody CreateRestaurantRequest req, @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        Restaurant restaurant= restaurantService.createRestaurant(req,user);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }



    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@RequestBody CreateRestaurantRequest req, @RequestHeader("authorization") String jwt,@PathVariable long id) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        Restaurant restaurant= restaurantService.updateRestaurant(id,req);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }



    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus( @RequestHeader("authorization") String jwt,@PathVariable long id) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        Restaurant restaurant=restaurantService.updateRestaurantStatus(id);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(@RequestBody CreateRestaurantRequest req, @RequestHeader("authorization") String jwt,@PathVariable long id) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
       restaurantService.deleteRestaurant(id);
        MessageResponse res= new MessageResponse();
        res.setMessage("Restaurant Deleted Successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }



    @GetMapping("/user")
    public ResponseEntity<Restaurant> findRestaurantByUserId( @RequestHeader("authorization") String jwt) throws Exception {
        User user= userService.findUserByJwtToken(jwt);
        Restaurant restaurant=restaurantService.getRestaurantByUserId(user.getId());

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


}
