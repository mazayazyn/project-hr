package AGM.backend.Repository;
import AGM.backend.Model.SkillModel;
import org.springframework.data.jpa.repository.JpaRepository;
import AGM.backend.Model.KandidatModel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KandidatDB extends JpaRepository<KandidatModel, Integer>{
    KandidatModel findOneById(Integer id);
}
