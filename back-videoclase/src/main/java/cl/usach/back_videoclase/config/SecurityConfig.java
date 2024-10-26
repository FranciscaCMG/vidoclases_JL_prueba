package cl.usach.back_videoclase.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

//indica que la clase puede contener métodos de bean. Un método de bean es un método que Spring ejecuta para registrar
// un objeto en su contenedor de inversión de control (IoC
@Configuration
//Agrega varias características de seguridad, como la protección CSRF, la autenticación y la autorización.
@EnableWebSecurity
public class SecurityConfig {

    // indica que el método que sigue debe ser ejecutado por Spring para registrar un bean en su contenedor IoC
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //Personalizacion de la configuración de seguridad
                .authorizeHttpRequests(customRequest -> {
                    customRequest
                            .requestMatchers(HttpMethod.GET, "/user/*").hasRole("ADMIN")
                            .requestMatchers(HttpMethod.GET, "/user").hasRole("ADMIN")
                            .requestMatchers(HttpMethod.DELETE, "/user/*").hasRole("ADMIN")
                            .requestMatchers(HttpMethod.POST, "/user").permitAll()

                            //.requestMatchers(HttpMethod.POST, "/user").hasAnyRole("ADMIN", "CUSTOMER")
                            .requestMatchers(HttpMethod.PATCH, "/user/*").hasAnyRole("ADMIN", "CUSTOMER")
                            .requestMatchers(HttpMethod.PUT).denyAll()
                            .anyRequest().authenticated();
                    // Para permisos especiales tengo que Aplicar authorities a los usuarios
                })
                //desactivando la protección CSRF (Cross-Site Request Forgery)
                // es una característica de seguridad que ayuda a prevenir ciertos tipos de ataques, pero en algunos casos, puedes querer desactivarla
                .csrf(AbstractHttpConfigurer::disable)
                //habilitando la configuración de CORS (Cross-Origin Resource Sharing)
                .cors(Customizer.withDefaults())
                //habilitando la autenticación básica HTTP
                .httpBasic(Customizer.withDefaults());

        // construyendo la configuración de seguridad y devolviéndola
        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


