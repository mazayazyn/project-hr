package AGM.backend.Service;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Repository.KandidatDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class KandidatServiceImpl implements KandidatService{

    @Autowired
    KandidatDB kandidatDB;

    @Override
    public List<KandidatModel> getKandidatList() {
        return kandidatDB.findAll();
    }
}
