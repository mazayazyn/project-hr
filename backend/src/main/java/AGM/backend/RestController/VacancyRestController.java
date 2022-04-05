package AGM.backend.RestController;

import javax.validation.Valid;

import AGM.backend.Rest.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import AGM.backend.Model.Vacancy;
import AGM.backend.RestService.VacancyRestService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VacancyRestController {
    @Autowired
    private VacancyRestService vacancyRestService;

    @PostMapping(value = "/create-vacancy")
    private ResponseEntity<?> createVacancy(@Valid @RequestBody Vacancy vacancy, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return ResponseEntity.badRequest().body("Invalid Request");
        } else {
            vacancy.setStatus(2);
            return ResponseEntity.status(HttpStatus.CREATED).body(vacancyRestService.createVacancy(vacancy));
        }
    }

    @PutMapping(value = "/update-vacancy")
    private ResponseEntity<?> updateVacancy(@Valid @RequestBody Vacancy vacancy, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return ResponseEntity.badRequest().body("Invalid Request");
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(vacancyRestService.updateVacancy(vacancy));
        }
    }

    @GetMapping(value="/vacancy/{id}")
    private ResponseEntity<?> getVacancy(@PathVariable Long id) {
        Vacancy vacancy = vacancyRestService.getVacancyById(id);
        if (vacancy == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(vacancy);
        }
    }

    @GetMapping(value="/list-vacancy")
    private BaseResponse<List<Vacancy>> getAllVacancy() {
        BaseResponse<List<Vacancy>> response = new BaseResponse<>();
        response.setStatus(200);
        response.setMessage("success");
        response.setResult(vacancyRestService.getAllVacancy());
        return response;
    }
}
