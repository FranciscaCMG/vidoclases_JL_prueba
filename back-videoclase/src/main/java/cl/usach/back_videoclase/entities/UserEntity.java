package cl.usach.back_videoclase.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
@Table( name = "usuario")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserEntity {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;

    private String nombres;
    private String apellidos;
    private String nickname;
    private String correo;
    private String contrasena;
}
