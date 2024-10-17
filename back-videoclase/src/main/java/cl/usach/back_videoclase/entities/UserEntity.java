package cl.usach.back_videoclase.entities;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;

@Entity
@Table(name = "usuarios")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserEntity {
    @Id
    @Column(nullable = false, length = 20)
    private String username;

    @Column(length = 40)
    private String nombres;

    @Column(length = 40)
    private String apellidos;

    @Column(length = 50)
    private String correo;

    @Column(nullable = false, length = 200)
    private String contrasena;

    @Column(nullable = false)
    private Boolean locked;

    @Column(nullable = false)
    private Boolean disabled;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<UserRoleEntity> roles;
}
