package AGM.backend.RestService;

import AGM.backend.Model.Vacancy;

import java.util.List;

public interface VacancyRestService {
    Vacancy createVacancy(Vacancy vacancy);
    Vacancy updateVacancy(Vacancy vacancy);
    Vacancy getVacancyById(Long id);
    List<Vacancy> getAllVacancy();
}
