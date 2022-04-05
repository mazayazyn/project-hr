package AGM.backend.RestService;

import AGM.backend.Model.EducationModel;
import AGM.backend.Model.SkillModel;

import java.util.List;

public interface EducationRestService {
    EducationModel getEducationById(Integer id);
    EducationModel createEducation(EducationModel skill);
    EducationModel updateEducation(Integer id, EducationModel educationUpdate);
    void deleteEducation(Integer id);
}
