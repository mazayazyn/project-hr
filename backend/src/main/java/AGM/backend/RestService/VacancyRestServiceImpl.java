package AGM.backend.RestService;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AGM.backend.Model.Vacancy;
import AGM.backend.Repository.VacanciesDB;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VacancyRestServiceImpl implements VacancyRestService {
    @Autowired
    private VacanciesDB vacanciesDB;

    @Override
    public Vacancy createVacancy(Vacancy vacancy) {
        return vacanciesDB.save(vacancy);
    }

    @Override
    public Vacancy updateVacancy(Vacancy vacancy) {
        return vacanciesDB.save(vacancy);
    }

    @Override
    public Vacancy getVacancyById(Long id) {
        Optional<Vacancy> vacancy = vacanciesDB.findById(id);
        if (vacancy.isPresent()) {
            return vacancy.get();
        }
        return null;
    }

    @Override
    public List<Vacancy> getAllVacancy() {
        return vacanciesDB.findAll();
    }
}
