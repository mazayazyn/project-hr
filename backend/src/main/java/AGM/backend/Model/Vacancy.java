package AGM.backend.Model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "vacancies")
public class Vacancy implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
     * Relationship
     */
    // @ManyToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "client", referencedColumnName = "email")
    // @OnDelete(action = OnDeleteAction.CASCADE)
    // private UserModel client;

    // @OneToMany(mappedBy = "vacancies", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // private Set<UserModel> candidates;

    /*
     * status vacancies
     * 1 = published
     * 2 = pending
     * 3 = rejected
     * 4 = closed
     */
    @Column(nullable = false)
    private Integer status;

    // Contact Information
    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String companyDescription;

    @Column(nullable = false)
    private String companyAddress;

    @Column(nullable = false)
    private String companyPhone;

    @Column(nullable = false)
    private String companyEmail;

    private String companyWebsite;

    @Column(nullable = false)
    private Integer totalEmployee;

    // Vacancy Information
    @Column(nullable = false)
    private Boolean isContract;

    @Column(nullable = false)
    private Integer contractDur;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate openingDate;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate closingDate;

    // Job Description
    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String reportsTo;

    @Column(nullable = false)
    private String subordinates;

    @Column(nullable = false)
    private String workingLocation;

    @Column(nullable = false)
    private Integer workingTime;

    @Column(nullable = false)
    private Integer headcount;

    @Column(nullable = false)
    private String industry;

    @Column(nullable = false)
    private String yearsOfExperience;

    @Column(nullable = false)
    private String keyResponsibility;

    @Column(nullable = false)
    private String behaviouralCompetencies;

    private String ignoredCompany;
    
    private String culture;

    // Compensation Information
    @Column(nullable = false)
    private Integer startSalary;

    @Column(nullable = false)
    private Integer endSalary;

    @Column(nullable = false)
    private String firstSalaryReview;

    private String targetCompany;

    private String bonusSystem;

    @Column(nullable = false)
    private Boolean travel;

    // Benefits
    private String overtime;
    
    private String stock;
    
    private String tax;
    
    private String incentives;

    private String healthInsurance;

    private String car;

    private String lifeInsurance;

    private String other;

    // Interview
    @Column(nullable = false)
    private Integer stages;

    private String idealTime;

    private String offers;

    @Column(nullable = false)
    private Boolean evaluationTest;

    @Column(nullable = false)
    private Boolean secondClient;

    // Ads
    @Column(nullable = false)
    private Boolean internetAds;

    @Column(nullable = false)
    private Boolean paperAds;

    @Column(nullable = false)
    private Boolean cobrand;
}
