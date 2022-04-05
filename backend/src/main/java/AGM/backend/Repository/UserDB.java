package AGM.backend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import AGM.backend.Model.UserModel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDB extends JpaRepository<UserModel, Long> {
    UserModel findUserModelByEmail(String email);
    UserModel findUserModelById(String id);
    Optional<UserModel> getUserModelById(String id);
    Optional<UserModel> getUserModelByEmail(String email);
}
