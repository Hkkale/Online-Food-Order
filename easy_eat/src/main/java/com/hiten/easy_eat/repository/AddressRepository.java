package com.hiten.easy_eat.repository;

import com.hiten.easy_eat.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;




public interface AddressRepository extends JpaRepository<Address,Long> {
}
