package com.weather.consumer.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.consumer.app.model.Weather;


@Repository
public interface WeatherRepository extends JpaRepository<Weather, Long> {

	List<Weather> findByForecastDateAndDurationAndPlaceName(String forecastDate, String duration, String placeName);

}
