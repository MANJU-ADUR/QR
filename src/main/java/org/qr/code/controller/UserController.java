package org.qr.code.controller;

import org.qr.code.dto.Response;
import org.qr.code.model.User;
import org.qr.code.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping
	public ResponseEntity<Response<User>> saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

}
