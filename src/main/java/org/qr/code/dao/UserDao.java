package org.qr.code.dao;

import org.qr.code.Repo.UserRepo;
import org.qr.code.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

	@Autowired
	private UserRepo userRepo;

	public User saveUser(User user) {
		return userRepo.save(user);
	}

}
