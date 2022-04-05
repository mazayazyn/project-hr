package AGM.backend.RestService;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Repository.KandidatDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class KandidatRestServiceImpl implements KandidatRestService{
    @Autowired
    private KandidatDB kandidatDB;

    @Override
    public KandidatModel saveKandidat(KandidatModel kandidat) {
        return kandidatDB.save(kandidat);
    }

    @Override
    public List<KandidatModel> getAllKandidat(){
        return kandidatDB.findAll();
    }

    @Override
    public KandidatModel getKandidatById(Integer idKandidat) {
        Optional<KandidatModel> kandidat = kandidatDB.findById(idKandidat);

        if(kandidat.isPresent()){
            return kandidat.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    public KandidatModel updateKandidat(Integer idKandidat, KandidatModel kandidatUpdate) {
        KandidatModel kandidat = getKandidatById(idKandidat);
        kandidat.setAbout(kandidatUpdate.getAbout());
        kandidat.setAppliedStatus(kandidatUpdate.getAppliedStatus());
        kandidat.setCurrentSalary(kandidatUpdate.getCurrentSalary());
        kandidat.setDateOfBirth(kandidat.getDateOfBirth());
        kandidat.setJobLevel(kandidat.getJobLevel());
        kandidat.setJobPosition(kandidat.getJobPosition());
        kandidat.setNamaKandidat(kandidat.getNamaKandidat());
        kandidat.setNoTelp(kandidat.getNoTelp());
        kandidat.setYearExperience(kandidat.getYearExperience());
        return kandidatDB.save(kandidat);
    }
}
