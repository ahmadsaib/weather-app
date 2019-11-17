package com.weather.producer.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.producer.app.model.Weather;

@Repository
public interface WeatherRepository extends JpaRepository<Weather, Long> {

	List<Weather> findByPlaceName(String placeName);

}
