package AGM.backend.RestController;

import AGM.backend.Model.EducationModel;
import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import AGM.backend.Repository.EducationDB;
import AGM.backend.Repository.KandidatDB;
import AGM.backend.Repository.SkillDB;
import AGM.backend.RestService.EducationRestService;
import AGM.backend.RestService.KandidatRestService;
import AGM.backend.RestService.SkillRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("api/v1")
public class EducationRestController {

    @Autowired
    private KandidatRestService kandidatRestService;

    @Autowired
    private EducationRestService educationRestService;

    @Autowired
    private EducationDB educationDB;

    @Autowired
    private KandidatDB kandidatDB;

    @PostMapping(value = "/create-education/{idKandidat}")
    private ResponseEntity createEducation(@PathVariable("idKandidat") Integer idKandidat, @RequestBody EducationModel education) {
        try {
            KandidatModel kandidat = kandidatRestService.getKandidatById(idKandidat);
            education.setKandidat(kandidat);
            educationRestService.createEducation(education);
            return ResponseEntity.ok("Create education success");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Failed."
            );
        }
    }

    @GetMapping(value = "/education/{idKandidat}")
    private List<EducationModel> retrieveEducationKandidat(@PathVariable("idKandidat") Integer idKandidat) {
        try {
            KandidatModel kandidat = kandidatDB.findOneById(idKandidat);
            return educationDB.findByKandidat(kandidat);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Id education " + String.valueOf(idKandidat) + " Not Found,"
            );
        }
    }

    @PutMapping(value = "/education/{idKandidat}")
    private ResponseEntity updateEducation(@PathVariable("idKandidat") Integer idKandidat, @RequestBody EducationModel kandidat) {
        try {
            educationRestService.updateEducation(idKandidat, kandidat);
            return ResponseEntity.ok("Update education success");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Education with Id " + String.valueOf(idKandidat) + " Not Found."
            );
        }
    }

    @DeleteMapping(value = "/education/{idKandidat}")
    private ResponseEntity deleteEducation(@PathVariable("idKandidat") Integer idKandidat) {
        try {
            educationRestService.deleteEducation(idKandidat);
            return ResponseEntity.ok("Education has been deleted");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Education with Id" + String.valueOf(idKandidat) + " Not Found."
            );
        }
    }


}
