package AGM.backend.RestService;

import AGM.backend.Model.EducationModel;
import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import AGM.backend.Repository.KandidatDB;
import AGM.backend.Repository.EducationDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class EducationRestServiceImpl implements EducationRestService{

    @Autowired
    private EducationDB educationDB;

    @Autowired
    private KandidatDB kandidatDB;


    @Override
    public EducationModel createEducation(EducationModel education) {
        return educationDB.save(education);
    }

    @Override
    public EducationModel getEducationById(Integer id) {
        Optional<EducationModel> education = educationDB.findById(id);

        if(education.isPresent()){
            return education.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    public void deleteEducation(Integer id) {
        EducationModel education = educationDB.findOneById(id);
        educationDB.delete(education);
    }

    @Override
    public EducationModel updateEducation(Integer id, EducationModel educationUpdate) {
        KandidatModel kandidat = kandidatDB.findOneById(id);
        EducationModel education = educationDB.findByKandidatAndId(kandidat, educationUpdate.getId());
        education.setDegree(educationUpdate.getDegree());
        education.setDescription(educationUpdate.getDescription());
        education.setEndDate(educationUpdate.getEndDate());
        education.setStartDate(educationUpdate.getStartDate());
        education.setFieldOfStudy(educationUpdate.getFieldOfStudy());
        education.setSchool(educationUpdate.getSchool());
        return educationDB.save(education);
    }

}
