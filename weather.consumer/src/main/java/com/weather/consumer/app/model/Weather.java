package com.weather.consumer.app.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.weather.commons.model.AuditModel;

@Entity
@Table(name = "weather")
public class Weather extends AuditModel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator = "id")
	@SequenceGenerator(name = "id", sequenceName = "id", initialValue = 1000)
	private Long id;

	@Column(name = "forecast_date", columnDefinition = "text")
	private String forecastDate;

	@Column(name = "duration", columnDefinition = "text")
	private String duration;

	@Column(name = "phenomenon", columnDefinition = "text")
	private String phenomenon;

	@Column(name = "tempmin")
	private int tempmin;

	@Column(name = "tempmax")
	private int tempmax;

	@Column(name = "text", columnDefinition = "text")
	private String text;

	@Column(name = "place_name", columnDefinition = "text")
	private String placeName;

	@Column(name = "place_phenomenon", columnDefinition = "text")
	private String placePhenomenon;

	@Column(name = "place_tempmin", columnDefinition = "text")
	private String placeTempmin;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getForecastDate() {
		return forecastDate;
	}

	public void setForecastDate(String forecastDate) {
		this.forecastDate = forecastDate;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getPhenomenon() {
		return phenomenon;
	}

	public void setPhenomenon(String phenomenon) {
		this.phenomenon = phenomenon;
	}

	public int getTempmin() {
		return tempmin;
	}

	public void setTempmin(int tempmin) {
		this.tempmin = tempmin;
	}

	public int getTempmax() {
		return tempmax;
	}

	public void setTempmax(int tempmax) {
		this.tempmax = tempmax;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getPlacePhenomenon() {
		return placePhenomenon;
	}

	public void setPlacePhenomenon(String placePhenomenon) {
		this.placePhenomenon = placePhenomenon;
	}

	public String getPlaceTempmin() {
		return placeTempmin;
	}

	public void setPlaceTempmin(String placeTempmin) {
		this.placeTempmin = placeTempmin;
	}

}
