package AGM.backend.RestController;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Model.SkillModel;
import AGM.backend.Repository.KandidatDB;
import AGM.backend.Repository.SkillDB;
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
public class SkillRestController {

    @Autowired
    private KandidatRestService kandidatRestService;

    @Autowired
    private SkillRestService skillRestService;

    @Autowired
    private SkillDB skillDB;

    @Autowired
    private KandidatDB kandidatDB;

    @GetMapping(value = "/list-skill")
    private List<SkillModel> retrieveListSkill(){
        return skillRestService.retrieveListSkill();
    }

    @PostMapping(value = "/create-skill/{idKandidat}")
    private ResponseEntity createSkill(@PathVariable("idKandidat") Integer idKandidat, @RequestBody SkillModel skill) {
        try {
            KandidatModel kandidat = kandidatRestService.getKandidatById(idKandidat);
            skill.setKandidat(kandidat);
            skillRestService.createSkill(skill);
            return ResponseEntity.ok("Create skills success");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Failed."
            );
        }
    }

    @GetMapping(value = "/skill/{idKandidat}")
    private List<SkillModel> retrieveSkillKandidat(@PathVariable("idKandidat") Integer idKandidat) {
        try {
            KandidatModel kandidat = kandidatDB.findOneById(idKandidat);
            return skillDB.findByKandidat(kandidat);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Id Skill " + String.valueOf(idKandidat) + " Not Found,"
            );
        }
    }

    @PutMapping(value = "/skill/{idKandidat}")
    private ResponseEntity updateSkill(@PathVariable("idKandidat") Integer idKandidat, @RequestBody SkillModel kandidat) {
        try {
            skillRestService.updateSkill(idKandidat, kandidat);
            return ResponseEntity.ok("Update skill success");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Skill with Id Skill " + String.valueOf(idKandidat) + " Not Found."
            );
        }
    }

    @DeleteMapping(value = "/skill/{idSkill}")
    private ResponseEntity deleteSkill(@PathVariable("idSkill") Integer idSkill) {
        try {
            skillRestService.deleteSkill(idSkill);
            return ResponseEntity.ok("Skill has been deleted");
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Skill with Id Skill " + String.valueOf(idSkill) + " Not Found."
            );
        }
    }


}
