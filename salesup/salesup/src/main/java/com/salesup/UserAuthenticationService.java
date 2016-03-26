package com.salesup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.salesup.model.User;
import com.salesup.repository.Users;

@Component
public class UserAuthenticationService implements UserDetailsService {

	@Autowired
	private Users users;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 User user = users.findOne(username);
		 
	        if(user != null) { 
	            return user; 
	        } throw new UsernameNotFoundException("User " + username + " has not found.");
	}

} 
