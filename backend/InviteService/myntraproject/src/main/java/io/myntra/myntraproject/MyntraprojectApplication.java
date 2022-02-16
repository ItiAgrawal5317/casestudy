package io.myntra.myntraproject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableEurekaClient
public class MyntraprojectApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(MyntraprojectApplication.class, args);
	}
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return  application.sources(MyntraprojectApplication.class);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurerAdapter() {
			@Override
			public  void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","DELETE","PATCH","PUT").exposedHeaders(HttpHeaders.CONTENT_DISPOSITION);
			}
		};
	}
}
