package AGM.backend.Model;

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

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "workExperience")
public class WorkExperienceModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max=30)
    @Column(name="title", nullable = false)
    private String title;

    @NotNull
    @Size(max=100)
    @Column(name="company_name", nullable = false)
    private String companyName;

    @Column(name = "start_date", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @Column(name = "end_date", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    @NotNull
    @Size(max=100)
    @Column(name="description", nullable = false)
    private String description;

    //Relasi dengan Kandidat
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_work_experience", referencedColumnName = "id", nullable = false)
    private KandidatModel kandidat_experience;

}
