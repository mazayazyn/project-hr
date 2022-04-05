package AGM.backend.Controller;

import AGM.backend.Model.RoleModel;
import AGM.backend.Model.UserModel;
import AGM.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    @Autowired
    private UserService userService;

    @GetMapping(value = { "/", "/{x:[\\w\\-]+}" })
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }

    @GetMapping("/dummy-user")
    public String addDummyUser(){
        UserModel user = new UserModel();
        user.setEmail("ulekan@gmail.com");
        user.setPassword("raulskut");
        userService.addUser(user);
        return "/";
    }
}
