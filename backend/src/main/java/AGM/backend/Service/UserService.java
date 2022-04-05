package AGM.backend.Service;

import AGM.backend.Model.UserModel;
import AGM.backend.Rest.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.*;

@Service

public interface UserService {
    UserModel addUser(UserModel user);
    UserModel getUser(String email);
    List<UserModel> getAllUser();
    String getUserRole(Authentication auth);
    UserModel getUserById(String id);
    UserModel addUserDTO(UserDTO userDTO);
}
