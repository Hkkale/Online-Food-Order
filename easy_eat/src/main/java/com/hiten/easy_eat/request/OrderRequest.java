package com.hiten.easy_eat.request;

import com.hiten.easy_eat.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private  Long restaurantId;
    private Address deliveryAddress;
}
