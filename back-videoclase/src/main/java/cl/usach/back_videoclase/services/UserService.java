package cl.usach.back_videoclase.services;

import cl.usach.back_videoclase.entities.UserEntity;
import cl.usach.back_videoclase.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RestTemplate restTemplate;

    public ArrayList<UserEntity> obtenerUsers(){
        return (ArrayList<UserEntity>) userRepository.findAll();
    }

    public UserEntity findByUser(String usuario){
        return userRepository.findByUsername(usuario);
    }

    public boolean existeUser(String username) {

        UserEntity user = userRepository.findByUsername(username);
        return user != null;
    }

    public UserEntity findByCorreo(String correo){
        return userRepository.findByCorreo(correo);
    }

    public UserEntity findByID(int ID){
        return userRepository.findByID(ID);
    }


    public void guardarUser(UserEntity user){
        userRepository.save(user);
    }

    public void eliminarUsers(){
        userRepository.deleteAll();
    }
    public UserEntity modificarCorreo(Integer id, String correo){
        UserEntity user = userRepository.findByID(id);

        user.setCorreo(correo);
        userRepository.save(user);
        return user;
    }



}
