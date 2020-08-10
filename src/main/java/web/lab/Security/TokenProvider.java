package web.lab.Security;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import web.lab.Entities.User;

import javax.servlet.http.HttpServletRequest;

@Component
public class TokenProvider {

    @Autowired
    private UserDetailService userDetailService;

    @Autowired
    private TokenService tokenService;

    public String resolveToken(String username){
        User user = userDetailService.find(username);

        String token = null;

        if (user.getAuthToken() != null){
            token = user.getAuthToken();
        }else{
            token = tokenService.generateNewToken();
        }

        user.setAuthToken(token);
        userDetailService.save(user);
        return token;
    }

    public Authentication getAuthentication(String token){
        UserDetails userDetails = userDetailService.findByAuthToken(token);
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public String resolveToken(HttpServletRequest request){
        String headerToken = request.getHeader("Authorization");
        if (headerToken != null && headerToken.startsWith("Basic ")){
            return headerToken.substring(6);
        }
        return null;
    }

    public boolean validateToken(String token){
        return userDetailService.findByAuthToken(token) != null;
    }
}
