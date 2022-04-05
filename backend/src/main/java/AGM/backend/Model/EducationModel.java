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

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "education")
public class EducationModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max=30)
    @Column(name="school", nullable = false)
    private String school;

    @NotNull
    @Size(max=100)
    @Column(name="degree", nullable = false)
    private String degree;

    @NotNull
    @Size(max=100)
    @Column(name="field_of_study", nullable = false)
    private String fieldOfStudy;

    @NotNull
    @Size(max=100)
    @Column(name="description", nullable = false)
    private String description;

    @Column(name = "start_date", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @Column(name = "end_date", nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    //Relasi dengan Kandidat
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_education", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private KandidatModel kandidat;

}
