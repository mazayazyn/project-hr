package AGM.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AGM.backend.Model.Vacancy;

import java.util.List;
import java.util.Optional;

@Repository
public interface VacanciesDB extends JpaRepository<Vacancy, Long> {
    List<Vacancy> findAll();
    Optional<Vacancy> findById(Long id);
}
