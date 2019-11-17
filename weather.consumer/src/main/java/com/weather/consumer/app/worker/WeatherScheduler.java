package com.weather.consumer.app.worker;

import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.json.XML;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.weather.consumer.app.model.Weather;
import com.weather.consumer.app.repository.WeatherRepository;

@Component
public class WeatherScheduler {
	private static final Logger logger = LoggerFactory.getLogger(WeatherScheduler.class);
	private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

	@Value("${weather.api.url}")
	private String url;

	@Autowired
	private WeatherRepository weatherRepository;

	@Scheduled(fixedRate = (1800*1000))
	public void scheduleTaskWithFixedRate() {
		logger.info("Fixed Rate Task :: Execution Time - {}", dateTimeFormatter.format(LocalDateTime.now()));

		try {
			System.out.print("task");
			System.setProperty("http.agent", "Chrome");
			URL myURL = new URL(url);
			HttpURLConnection myURLConnection = (HttpURLConnection) myURL.openConnection();
			myURLConnection.setRequestProperty("User-Agent",
					"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36");
			myURLConnection.setUseCaches(false);
			myURLConnection.setDoInput(true);
			myURLConnection.setDoOutput(true);

			String xmlData = IOUtils.toString(myURL, Charset.forName("UTF-8"));
			String betByanJsonString = XML.toJSONObject(xmlData).toString();
			ObjectMapper mapper = new ObjectMapper();
			JsonNode node = mapper.readTree(betByanJsonString);
			insertJsonDataInDataBase(node);
		} catch (Exception e) {
			logger.error("exception in reading data from api : ", e);
		}
	}

	private void insertJsonDataInDataBase(JsonNode node) {
		JsonNode forecasts = node.path("forecasts").path("forecast");
		for (JsonNode forecast : forecasts) {
			String date = forecast.path("date").asText();
			JsonNode nightNode = forecast.path("night");
			JsonNode dayNode = forecast.path("day");
			fillAndUpdateWeatherDetails(date, nightNode, "night");
			fillAndUpdateWeatherDetails(date, dayNode, "day");
		}
	}

	private void fillAndUpdateWeatherDetails(String date, JsonNode nightNode, String duration) {
		int tempmax = nightNode.path("tempmax").asInt();
		int tempmin = nightNode.path("tempmin").asInt();
		String phenomenon = nightNode.path("phenomenon").asText();
		String text = nightNode.path("text").asText();
		JsonNode places = nightNode.path("place");
		for (JsonNode place : places) {
			String placeName = place.path("name").asText();
			String placePhenomenon = place.path("phenomenon").asText();
			String placeTempmin = place.path("tempmin").asText();
			Weather weather = new Weather();
			weather.setForecastDate(date);
			weather.setDuration(duration);
			weather.setPhenomenon(phenomenon);
			weather.setPlacePhenomenon(placePhenomenon);
			weather.setPlaceName(placeName);
			weather.setPlaceTempmin(placeTempmin);
			weather.setTempmax(tempmax);
			weather.setTempmin(tempmin);
			weather.setText(text);
			saveAndUpdateWeatherDetails(weather);
		}
	}

	private void saveAndUpdateWeatherDetails(Weather weather) {
		List<Weather> weatherList = weatherRepository.findByForecastDateAndDurationAndPlaceName(
				weather.getForecastDate(), weather.getDuration(), weather.getPlaceName());
		if (!weatherList.isEmpty()) {
			weather.setId(weatherList.get(0).getId());
		}
		weatherRepository.save(weather);
	}
}
