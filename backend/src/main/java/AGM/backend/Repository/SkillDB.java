package AGM.backend.Repository;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SkillDB extends JpaRepository<SkillModel, Integer> {
    Optional<SkillModel> findById(Integer id);
    SkillModel findOneById(Integer id);
    List<SkillModel> findByKandidat(KandidatModel id);
    SkillModel findByKandidatAndId (KandidatModel obj, Integer id);
}
