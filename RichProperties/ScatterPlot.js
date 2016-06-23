/**
* ScatterPlot.js
*
* Stijn Robben
* 10559558
*
*/
function scatter(dataset, title, ytitle, tiptext, random){

	// create titles above chart
	document.getElementById("bigtitle").innerHTML = title;
	document.getElementById("smalltitle").innerHTML = "(" + name + ")";

	// delete old scatterplot
	d3.select(".scat").remove();

	// determine values
	var xValue = function(d) { return d.GDP;}
	var yValue = function(d) { return d.Variable;}

	// determine parameters
	var margin = {top: 20, right: 20, bottom: 200, left: 70},
		width = 600 - margin.left - margin.right,
		height = 550 - margin.top - margin.bottom;

	// determine x scale
	var x = d3.scale.linear()
	.range([0, width]);

	// determine y scale
	var y = d3.scale.linear()
	.range([height, 0]);

	// create different y axis for mili-dataset
	if (dataset == "Mili.txt"){
		var y = d3.scale.log()
		.range([height, 0]);
	}

	// determine x-axis
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	// determine y-axis
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	// make svg
	var svg = d3.select("#charts").append("svg")
	.attr("class", "scat")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// add the tooltip area to the webpage
	var tooltip = d3.select("body").append("div")
	    .attr("class", "tooltip")
	    .style("opacity", 0);

	// load in data
	d3.tsv(dataset, function(error, data) {
		if (error) throw error;

			// convert data
			data.forEach(function(d) {

		  	// make reasonable numbers for y axis of right dataset
		  	if (dataset == "Mili.txt"){
		  		d.GDP = +d.GDP;
		  		d.Variable = +d.Variable/1000000000;
		  	}

		  	d.GDP = +d.GDP;
		  	d.Variable = +d.Variable;
	  	});

		// x and y labels
		x.domain(d3.extent(data, function(d) { return d.GDP; }));
		y.domain([0,100]);

	  	// make y axis from 0 - 100 for corruption points
		if(dataset == "Mili.txt"){
			y.domain(d3.extent(data, function(d) { return d.Variable;}));
		}
		
		// make x-axis
		svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")  
			.style("text-anchor", "end")
			.attr("dx", "-.5em")
			.attr("dy", ".15em")
			.attr("transform", "rotate(-40)" );

		// make x-axis label
		svg.append("text")
		.attr("x", (width -20))
		.attr("y", height - 5)
		.attr("class", "text-label")
		.attr("text-anchor", "end")
		.text("GDP per Capita");

		// make y-axis
		svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "-4.11em")
			.style("text-anchor", "end")
			.text(ytitle);

		// make dots
		svg.selectAll(".dot")
		.data(data)
		.enter().append("circle")
			.attr("class", "circle")
			.attr("id", function(d) { return (d.CountryCode); })
			.attr("name", function(d) { return (d.CountryName); })
			.attr("r", 3.5)
			.attr("cx", function(d) { return x(d.GDP); })
			.attr("cy", function(d) { return y(d.Variable); })
			.on("mouseover", function(d) {
		          tooltip.transition()
		               .duration(200)
		               .style("opacity", 1)
		               .style("color", "white")
		          tooltip.html(d["CountryName"] + "<br/> GDP: <span style='color:red'> " + "$" + xValue(d) 
			        + "</span><br>"  + tiptext + ": <span style='color:red'> " + yValue(d).toFixed(2) + "</span><br>")
		               .style("left", (d3.event.pageX + 5) + "px")
		               .style("top", (d3.event.pageY - 28) + "px");
		      })
		      .on("mouseout", function(d) {
		          tooltip.transition()
		               .duration(500)
		               .style("opacity", 0);
		      });

		// select element from clicked country
		var clicked = document.getElementById(country)

		// check if country has data of this variable
		if (clicked == null){
			d3.select(".scat").remove();
			d3.select(".barchart").remove();
			document.getElementById("nodata").innerHTML = "Sorry, no data of this country";
			return;
		}

		// delete the "no data" message when new land is clicked
		document.getElementById("nodata").innerHTML = "";

		// add class to this element
		clicked.classList.add("highlight");

		// add bigger radisu to this element
		clicked.setAttribute("r", 8);

		// get the x and y values for least squares
		var xSeries = data.map(function(d) {return parseFloat(d['GDP']); });
		var ySeries = data.map(function(d) { return parseFloat(d['Variable']); });

		// all values for trendline
		var leastSquaresCoeff = leastSquares(xSeries, ySeries);

		// apply the reults of the least squares regression
		var x1 = xSeries[0];
		var y1 = leastSquaresCoeff[0]*xSeries[0] + leastSquaresCoeff[1];
		var x2 = xSeries[xSeries.length - 1];
		var y2 = leastSquaresCoeff[0] * xSeries[xSeries.length - 1] + leastSquaresCoeff[1];

		// change endpoints of the regression line if y2 is lower than minimal y-axis value
		if (dataset == "Mili.txt" || dataset =="Tele.txt"){
			if (y2 < d3.min(ySeries)){
				y2 = d3.min(ySeries);
				x2 = (d3.min(ySeries) - leastSquaresCoeff[1]) / leastSquaresCoeff[0];
			}
			if(y2 > d3.max(ySeries)){
				y2 = d3.max(ySeries);
				x2 = (d3.max(ySeries) - leastSquaresCoeff[1]) / leastSquaresCoeff[0];
			}
		}

		// make trendline long enough for y axis starting form 0
		if (y2 < 0){
				y2 = 0;
				x2 = - leastSquaresCoeff[1] / leastSquaresCoeff[0];
			}

		// make trendline
		var trendData = [[x1,y1,x2,y2]];
		var trendline = svg.selectAll(".trendline")
		.data(trendData);
		trendline.enter()
		.append("line")
		.attr("class", "trendline")
		.attr("x1", function(d) { return x(d[0]); })
		.attr("y1", function(d) { return y(d[1]); })
		.attr("x2", function(d) { return x(d[2]); })
		.attr("y2", function(d) { return y(d[3]); })
		.attr("stroke", "steelblue")
		.attr("stroke-width", 1.5);
		});

	// returns slope, intercept and r-square of the line
	function leastSquares(xSeries, ySeries) {
		var reduceSumFunc = function(prev, cur) { return prev + cur; };
		
		var xBar = xSeries.reduce(reduceSumFunc) * 1.0 / xSeries.length;
		var yBar = ySeries.reduce(reduceSumFunc) * 1.0 / ySeries.length;

		var ssXX = xSeries.map(function(d) { return Math.pow(d - xBar, 2); })
			.reduce(reduceSumFunc);
		
		var ssYY = ySeries.map(function(d) { return Math.pow(d - yBar, 2); })
			.reduce(reduceSumFunc);
			
		var ssXY = xSeries.map(function(d, i) { return (d - xBar) * (ySeries[i] - yBar); })
			.reduce(reduceSumFunc);
			
		var slope = ssXY / ssXX;
		var intercept = yBar - (xBar * slope);
		var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);

		return [slope, intercept, rSquare];
	}
}