package AGM.backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import AGM.backend.Model.KandidatModel;
import AGM.backend.Service.KandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/kandidat")
public class KandidatController {

    @Autowired
    private KandidatService kandidatService;

    @GetMapping(value = "/list")
    private Map<String, List<KandidatModel>> getListKandidat() {
        HashMap<String, List<KandidatModel>> res = new HashMap<>();
        List<KandidatModel> listKandidat = kandidatService.getKandidatList();
        res.put("result", listKandidat);
        System.out.println(res);
        return res;
    }
}
