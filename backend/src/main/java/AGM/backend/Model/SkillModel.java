package AGM.backend.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name = "skill")
public class SkillModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max=30)
    @Column(name="skill", nullable = false)
    private String skill;

    //Relasi dengan Kandidat
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_skill", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private KandidatModel kandidat;

}
