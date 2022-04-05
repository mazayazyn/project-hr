package AGM.backend.Service;

import AGM.backend.Model.KandidatModel;
import org.springframework.stereotype.Service;

import java.util.List;

public interface KandidatService {
    List<KandidatModel> getKandidatList();
}
