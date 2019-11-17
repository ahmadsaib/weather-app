
function getWeatherDataByPlaceName(){
	var searchString =  $('#searchByPlace').val();
	$.ajax({
		type : "GET",
		url : "/getWeatherDataByPlaceName/" + searchString,
		dataType : "json",
		cache : false,
		timeout : 600000,
		success : function(data) {
			document.getElementById("showData").innerHTML = "";
			var finalString = '<section class="content-section"> <div class="container" > <div id="main_div">';
			
			for ( var item in data) {
				
				   
				   var date    = new Date(data[item].forecastDate),
			str	=   DateFormat.format.date(date, "dd MMM h mm a")
			
				finalString +=' <div class="col-sm-4"> <div class="content"> <div class="buttonslocation"> <h3 style="visibility:hidden;">'+data[item].placeName+'</h3> <h2 ><b>'+data[item].placeName+'</b></h2><h4>'+str+ ' <h3 > <img  src="assets/images/calendar.png"> '+data[item].duration+  '<h4 >'+data[item].phenomenon+'('+data[item].placePhenomenon +')<h4 ><h3>Min Temperature:<b>'+data[item].tempmin+'</b> &#176;F | &#176;C</h3><h3>Max Temperature:<b>'+data[item].tempmax+'</b> &#176;F | &#176;C</h3></h3></h4><h3 style="visibility:hidden;">'+data[item].placeName+'</h3> </div> </div></div> ';
			}
			finalString+='</div> </div> </section>';
			$('#showData').append(finalString);
		},
		error : function(e) {
			document.getElementById("feedback").innerHTML = "";
			$('#feedback').append("<pre> Wrong place name </pre>");
		}
	});
}

function getAllWeatherData(){
	$.ajax({
		type : "GET",
		url : "/getAllWeatherData",
		dataType : "json",
		cache : false,
		timeout : 600000,
		success : function(data) {
			document.getElementById("showData").innerHTML = "";
			var finalString = '<table cellspacing="0" cellpadding="0" dir="ltr" border="1" style="table-layout: fixed; font-size: 10pt; font-family: arial, sans, sans-serif; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="132"><col width="100"></colgroup><tbody><tr style="height: 21px;"><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">Date</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">Duration</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">phenomenon</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">tempmin</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">tempmax</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">place</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">place phenomenon</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(201, 218, 248); font-weight: bold; border: 1px solid rgb(204, 204, 204);">place tempmin</td></tr>';
			for ( var item in data) {
				finalString +='<tr style="height: 21px;"><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].forecastDate+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].duration+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].phenomenon+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].tempmin+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].tempmax+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].placeName+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].placePhenomenon+'</td><td style="overflow: hidden; padding: 2px 3px; vertical-align: bottom; border: 1px solid rgb(204, 204, 204);">'+data[item].placeTempmin+'</td></tr>';
			}
			finalString+='</tbody></table>';
			$('#showData').append(finalString);
		},
		error : function(e) {
			document.getElementById("feedback").innerHTML = "";
			$('#feedback').append("<pre> Wrong place name </pre>");
		}
	});
}