package AGM.backend.RestService;

import AGM.backend.Model.SkillModel;

import java.util.List;

public interface SkillRestService {
    SkillModel getSkillById(Integer id);
    SkillModel createSkill(SkillModel skill);
    List<SkillModel> retrieveListSkill();
    SkillModel updateSkill(Integer id, SkillModel skillUpdate);
    void deleteSkill(Integer id);
}
