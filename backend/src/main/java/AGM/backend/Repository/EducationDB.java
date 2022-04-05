package AGM.backend.Repository;

import AGM.backend.Model.EducationModel;
import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EducationDB extends JpaRepository<EducationModel, Integer> {
    Optional<EducationModel> findById(Integer id);
    EducationModel findOneById(Integer id);
    List<EducationModel> findByKandidat(KandidatModel id);
    EducationModel findByKandidatAndId (KandidatModel obj, Integer id);
}
