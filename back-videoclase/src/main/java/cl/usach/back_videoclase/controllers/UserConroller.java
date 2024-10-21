package cl.usach.back_videoclase.controllers;

import cl.usach.back_videoclase.entities.UserEntity;
import cl.usach.back_videoclase.repositories.UserRepository;
import cl.usach.back_videoclase.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserConroller {

    @Autowired
    UserService userService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<UserEntity>> obtenerUsers(){
        List<UserEntity> users = userService.obtenerUsers();
        if(users.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/usuario/{usuario}")
    public Boolean existeUser(@PathVariable String usuario) {

        return userService.existeUser(usuario);
    }


    @GetMapping("/correo/{correo}")
    public ResponseEntity<UserEntity> obtenerUserPorCorreo(@PathVariable String correo){
        UserEntity userCorreo = userService.findByCorreo(correo);
        if (userCorreo == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(userCorreo);
    }

    @GetMapping("/id/{ID}")
    public ResponseEntity<UserEntity> obtenerUserPorID(@PathVariable int ID){
        UserEntity userID = userService.findByID(ID);
        if (userID == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(userID);
    }

    @PostMapping
    public void guardarUser(@RequestBody UserEntity user){
        userService.guardarUser(user);
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity<Void> eliminarTodosLosUsuarios() {
        userService.eliminarUsers();
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/modificar/correo/{id}/{correo}")
    public ResponseEntity<UserEntity> modificarCorreo(@PathVariable int id, @PathVariable String correo){
        UserEntity userModificado= userService.modificarCorreo(id,correo);
        return ResponseEntity.ok(userModificado);
    }

    //    @PatchMapping("/modificarSalida/{id}/{fecha_salida}/{hora_salida}")
//    public ResponseEntity<ReparacionEntity> modificarReparacionSalida(@PathVariable Long id, @PathVariable String fecha_salida,@PathVariable String hora_salida) {
//        ReparacionEntity reparacionModificado = reparacionService.modificarReparacionSalida(id, fecha_salida, hora_salida);
//        return ResponseEntity.ok(reparacionModificado);
//    }




}
