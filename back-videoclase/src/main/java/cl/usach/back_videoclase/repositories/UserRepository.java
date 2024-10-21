package cl.usach.back_videoclase.repositories;

import cl.usach.back_videoclase.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    @Query("select e from UserEntity e where e.nombres = :nombres")
    UserEntity findByNameCustomQuery(@Param("nombres") String nombres);

    @Query("select e from UserEntity e where e.correo = :correo")
    UserEntity findByCorreo(
            @Param("correo")String correo);

    @Query("select e from UserEntity e where e.username = :username")
    UserEntity findByUsername(
            @Param("username")String username);

    @Query("select e from UserEntity e where e.ID = :ID")
    UserEntity findByID(
            @Param("ID")int ID);


}
