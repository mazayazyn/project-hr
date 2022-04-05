package AGM.backend.RestService;

import AGM.backend.Model.IndustryModel;
import AGM.backend.Model.KandidatModel;

import java.util.List;

public interface KandidatRestService {
    public KandidatModel saveKandidat(KandidatModel kandidat);
    public List<KandidatModel> getAllKandidat();
    KandidatModel getKandidatById(Integer idKandidat);
    KandidatModel updateKandidat(Integer idKandidat, KandidatModel kandidatUpdate);
}
