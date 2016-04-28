package main;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private static User user;

    @RequestMapping(value = "/userJSON", method = RequestMethod.POST)
    public void setUserJSON(@RequestBody User user) {
        this.user = user;
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public void setUser(@RequestParam String name, @RequestParam String password) {
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        this.user = user;
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User getUser() {
        return user;
    }
}
