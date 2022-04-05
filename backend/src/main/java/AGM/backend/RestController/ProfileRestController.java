package AGM.backend.RestController;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Repository.KandidatDB;
import AGM.backend.RestService.KandidatRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("profile")
public class ProfileRestController {

    @Autowired
    private KandidatDB kandidatDB;

    @Autowired
    private KandidatRestService kandidatRestService;

    @PostMapping("/add-core")
    public String add (@RequestBody KandidatModel kandidat){
        kandidatRestService.saveKandidat(kandidat);
        return "Saved";
    }

    @GetMapping(value = "/{idKandidat}")
    private KandidatModel retrieveKandidat(@PathVariable("idKandidat") Integer idKandidat) {
        try {
            return kandidatRestService.getKandidatById(idKandidat);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Id Kandidat " + String.valueOf(idKandidat) + " Not Found,"
            );
        }
    }

    @PutMapping(value = "/update/{idKandidat}")
    private KandidatModel updateKandidat(@PathVariable("idKandidat") Integer idKandidat, @RequestBody KandidatModel kandidat) {
        try {
            return kandidatRestService.updateKandidat(idKandidat, kandidat);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Kandidat with Id " + String.valueOf(idKandidat) + " Not Found."
            );
        }
    }

    @GetMapping("/getAll")
    public List<KandidatModel> getAllKandidat(){
        return kandidatRestService.getAllKandidat();
    }
}
