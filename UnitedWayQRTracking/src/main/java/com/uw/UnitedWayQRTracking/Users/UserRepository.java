package com.uw.UnitedWayQRTracking.Users;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
@Component
public interface UserRepository extends JpaRepository<User, Long> {


}
