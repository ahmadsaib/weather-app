package com.weather.producer.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.weather.producer.app.model.Weather;
import com.weather.producer.app.repository.WeatherRepository;

@RestController
public class SearchRequestController {

	@Autowired
	private WeatherRepository weatherRepository;

	@RequestMapping(value = "/getWeatherDataByPlaceName/{searchByPlace}", method = RequestMethod.GET)
	public List<Weather> getChallanDetails(@PathVariable String searchByPlace) {

		List<Weather> weatherList = weatherRepository.findByPlaceName(searchByPlace);
		return weatherList;
	}

	@RequestMapping(value = "/getAllWeatherData", method = RequestMethod.GET)
	public List<Weather> getAllWeatherData() {
		List<Weather> weatherList = weatherRepository.findAll();
		return weatherList;
	}
}
