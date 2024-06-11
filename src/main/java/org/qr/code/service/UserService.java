package org.qr.code.service;

import org.qr.code.dao.UserDao;
import org.qr.code.dto.Response;
import org.qr.code.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	public ResponseEntity<Response<User>> saveUser(User user) {
		Response<User> response = new Response<>();
		response.setData(userDao.saveUser(user));
		response.setMessgae("User Saved");
		response.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<Response<User>>(response, HttpStatus.CREATED);
	}

}
