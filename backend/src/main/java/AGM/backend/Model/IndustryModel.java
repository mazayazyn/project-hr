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
@Table(name = "industry")
public class IndustryModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(max=30)
    @Column(name="industry", nullable = false)
    private String industry;

    //Relasi dengan Kandidat
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_industry", referencedColumnName = "id", nullable = false)
    private KandidatModel kandidat;

}
