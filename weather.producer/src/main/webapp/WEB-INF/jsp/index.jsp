<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Weather Forecasts</title>

 <!-- Bootstrap css -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/font-awesome.min.css">
        <link href="plugins/typeahead/typeahead.css" rel="stylesheet" type="text/css" />
        <!--Animation-->
        <link href="assets/css/animate.css" rel='stylesheet'  />
       
        <link rel="stylesheet" href="assets/css/animatedmodals.css">
        <link rel="stylesheet" href="assets/css/style.css">

      
        <script type="text/javascript" src="assets/js/jquery-2.1.3.min.js" ></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js" ></script>
  <script type="text/javascript" src="js/dateFormat.js" ></script>
       
        <!--         BEGIN PAGE LEVEL PLUGINS -->
       


<script src="js/custom.js"></script>

<head>
<style>
.btn_b {
    
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

}
</style>

</head>
<body>
	<div class="body">
	 <section class="top-header">
            <div class="container">
            <h3>Weather Forecasts</h3>
                <div class="row searchFilter">
                   
                    <div class="col-sm-12 no-pad">
                      
                     
                            <div class="input-group">
                                
                                <div class="col-sm-6 search-panel">
                                  
                                    <div class="innertext">Search By Place</div>
                                    <input type="text" class="form-control searchbox" name="searchByPlace" id="searchByPlace" value="" placeholder="enter place...">
                                   
                                    <span class="input-group-btn btnsearch ">
                                            <button class="btn btn-default" onclick="getWeatherDataByPlaceName();">
                                            <a href="#"> <span class="fa fa-search"></span></a>
                                        </button>
                                    </span>
                                </div>
                            </div>
                       
                    </div>
                   <div style="height:100px;visibilty:hidden;">
                   </div>
                </div>

             
             
            </div>
       
    </section>
    
		
		<div id="showData"></div>
	</div>

</body>
</html>