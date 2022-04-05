package AGM.backend.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "kandidat")
public class KandidatModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max=30)
    @Column(name="nama_kandidat", nullable = false)
    private String namaKandidat;

    @NotNull
    @Size(max=100)
    @Column(name="about", nullable = false)
    private String about;

    @NotNull
    @Size(max=100)
    @Column(name="no_telp", nullable = false)
    private String noTelp;

    @Column(name = "date_of_birth", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;

    @NotNull
    @Size(max=100)
    @Column(name="yearExperience", nullable = false)
    private String yearExperience;

    @NotNull
    @Size(max=100)
    @Column(name="jobLevel", nullable = false)
    private String jobLevel;

    @NotNull
    @Size(max=100)
    @Column(name="jobPosition", nullable = false)
    private String jobPosition;

    @NotNull
    @Column(name="currentSalary", nullable = false)
    private Float currentSalary;

    //Relasi dengan Work Experience
    @OneToMany(mappedBy = "kandidat_experience", fetch = FetchType.LAZY)
    private List<WorkExperienceModel> listWorkExperience;

    //Relasi dengan Education
    @OneToMany(mappedBy = "kandidat", fetch = FetchType.LAZY)
    private List<EducationModel> listEducation;

    //Relasi dengan Industry
    @OneToMany(mappedBy = "kandidat", fetch = FetchType.LAZY)
    private List<IndustryModel> listIndustry;

    //Relasi dengan Skill
    @OneToMany(mappedBy = "kandidat", fetch = FetchType.LAZY)
    private List<SkillModel> listSkill;

    @NotNull
    @Column (name="applied_status", nullable = false)
    private Integer appliedStatus;
}
