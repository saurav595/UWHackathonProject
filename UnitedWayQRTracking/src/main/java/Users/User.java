package Users;

import Visits.Visit;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "User")
@Table (
        name = "user",
        uniqueConstraints = {
                @UniqueConstraint(name = "phoneNumber_unique", columnNames = "phoneNumber")
        }
)
public class User {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    @Column(
            name = "userId"
    )
    private Long userID;

    @Column(
            name = "phoneNumber",
            nullable = false
    )
    private Long phoneNumber;

    @Column(
            name = "age",
            nullable = false
    )
    private int age;

    @Column(
            name = "zipcode",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String zipcode;

    @Column(
            name = "loneParent",
            nullable = false,
            columnDefinition = "BOOLEAN"
    )
    private boolean loneParent;

    @Column(
            name = "immigrantStatus",
            nullable = false,
            columnDefinition = "BOOLEAN"
    )
    private boolean immigrantStatus;

    @Column(
            name = "indigenous",
            nullable = false,
            columnDefinition = "BOOLEAN"
    )
    private boolean indigenous;

    @Column(
            name = "lowIncome",
            nullable = false,
            columnDefinition = "BOOLEAN"
    )
    private boolean lowIncome;

    @Column(
            name = "gender",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private Gender gender;

//    @OneToMany (
//            mappedBy = "user",
//            orphanRemoval = true,
//            cascade = {CascadeType.PERSIST, CascadeType.REMOVE}
//    )
    //private List<Visit> userVisits = new ArrayList<>();


    public User() {
    }

    public User(Long phoneNumber, int age, String zipcode, boolean loneParent, boolean immigrantStatus, boolean indigenous, boolean lowIncome, Gender gender) {
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.zipcode = zipcode;
        this.loneParent = loneParent;
        this.immigrantStatus = immigrantStatus;
        this.indigenous = indigenous;
        this.lowIncome = lowIncome;
        this.gender = gender;
    }

    public User(Long userID, Long phoneNumber, int age, String zipcode, boolean loneParent, boolean immigrantStatus, boolean indigenous, boolean lowIncome, Gender gender) {
        this.userID = userID;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.zipcode = zipcode;
        this.loneParent = loneParent;
        this.immigrantStatus = immigrantStatus;
        this.indigenous = indigenous;
        this.lowIncome = lowIncome;
        this.gender = gender;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public boolean isLoneParent() {
        return loneParent;
    }

    public void setLoneParent(boolean loneParent) {
        this.loneParent = loneParent;
    }

    public boolean isImmigrantStatus() {
        return immigrantStatus;
    }

    public void setImmigrantStatus(boolean immigrantStatus) {
        this.immigrantStatus = immigrantStatus;
    }

    public boolean isIndigenous() {
        return indigenous;
    }

    public void setIndigenous(boolean indigenous) {
        this.indigenous = indigenous;
    }

    public boolean isLowIncome() {
        return lowIncome;
    }

    public void setLowIncome(boolean lowIncome) {
        this.lowIncome = lowIncome;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", phoneNumber=" + phoneNumber +
                ", age=" + age +
                ", zipcode='" + zipcode + '\'' +
                ", loneParent=" + loneParent +
                ", immigrantStatus=" + immigrantStatus +
                ", indigenous=" + indigenous +
                ", lowIncome=" + lowIncome +
                '}';
    }

    enum Gender {Male, Female}
}
