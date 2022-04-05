package AGM.backend.RestService;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import AGM.backend.Repository.KandidatDB;
import AGM.backend.Repository.SkillDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class SkillRestServiceImpl implements SkillRestService{

    @Autowired
    private SkillDB skillDB;

    @Autowired
    private KandidatDB kandidatDB;

    @Override
    public List<SkillModel> retrieveListSkill(){
        return skillDB.findAll();
    }

    @Override
    public SkillModel createSkill(SkillModel skill) {
        return skillDB.save(skill);
    }

    @Override
    public SkillModel getSkillById(Integer id) {
        Optional<SkillModel> skill = skillDB.findById(id);

        if(skill.isPresent()){
            return skill.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    public void deleteSkill(Integer id) {
        SkillModel skill = skillDB.findOneById(id);
        skillDB.delete(skill);
    }

    @Override
    public SkillModel updateSkill(Integer id, SkillModel skillUpdate) {
        KandidatModel kandidat = kandidatDB.findOneById(id);
        SkillModel skill = skillDB.findByKandidatAndId(kandidat, skillUpdate.getId());
        skill.setSkill(skillUpdate.getSkill());
        return skillDB.save(skill);
    }

}
