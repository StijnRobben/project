/**
* ScatterPlot.js
*
* Stijn Robben
* 10559558
*
*/

function ScatterCorruption(){

	// determine parameters
	var margin = {top: 20, right: 20, bottom: 200, left: 50},
	width = 600 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	// determine x scale
	var x = d3.scale.linear()
	.range([0, width]);

	// determine y scale
	var y = d3.scale.linear()
	.range([height, 0]);

	// determine x-axis
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	// determine y-axis
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	// make svg
	var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// load in data
	d3.tsv("ScatCor.txt", function(error, data) {
		if (error) throw error;

	  // convert data
	  data.forEach(function(d) {

	  	d.GDP = +d.GDP;
	  	d.Variable = +d.Variable;
	  });

	  // extract the x labels for the axis and scale domain
		// var xLabels = data.map(function (d) { return d['GDP']; })

	  // x and y labels
	  x.domain(d3.extent(data, function(d) { return d.GDP; }));
	  y.domain(d3.extent(data, function(d) { return d.Variable; }));

	  // make x-axis
	  svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")  
	  .style("text-anchor", "end")
	  .attr("dx", "-.5em")
	  .attr("dy", ".15em")
	  .attr("transform", "rotate(-40)" )

		// make x-axis label
		svg.append("text")
		.attr("x", (width -20))
		.attr("y", height - 5)
		.attr("class", "text-label")
		.attr("text-anchor", "end")
		.text("GDP");

	// make y-axis
	svg.append("g")
	.attr("class", "y axis")
	.call(yAxis)
	.append("text")
	.attr("class", "label")
	.attr("transform", "rotate(-90)")
	.attr("y", -40)
	.attr("dy", ".71em")
	.style("text-anchor", "end")
	.text("corruption points")

	// make dots
	svg.selectAll(".dot")
	.data(data)
	.enter().append("circle")
	.attr("id", function(d) { return (d.CountryCode); })
	.attr("r", 3.5)
	.attr("cx", function(d) { return x(d.GDP); })
	.attr("cy", function(d) { return y(d.Variable); });

	// select element from clicked country
	var clicked = document.getElementById(country)

	// add class to this element
	clicked.classList.add("highlight");
	console.log(clicked)

	// chart title
	svg.append("text")
	.attr("x", (width + (margin.left + margin.right) )/ 2)
	.attr("y", 0)
	.attr("text-anchor", "middle")
	.style("font-size", "16px")
	.style("font-family", "sans-serif")
	.text("Corruption");

	// get the x and y values for least squares
	var xSeries = data.map(function(d) {return parseFloat(d['GDP']); });
	var ySeries = data.map(function(d) { return parseFloat(d['Variable']); });

	var leastSquaresCoeff = leastSquares(xSeries, ySeries);

	// apply the reults of the least squares regression
	var x1 = xSeries[0];
	var y1 = leastSquaresCoeff[0]*xSeries[0] + leastSquaresCoeff[1];
	var x2 = xSeries[xSeries.length - 1];
	var y2 = leastSquaresCoeff[0] * xSeries[xSeries.length - 1] + leastSquaresCoeff[1];
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

		// display equation on the chart
		// svg.append("text")
		// .text("eq: " + decimalFormat(leastSquaresCoeff[0]) + "x + " + 
		// 	decimalFormat(leastSquaresCoeff[1]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 30;});

		// display r-square on the chart
		// svg.append("text")
		// .text("r-sq: " + decimalFormat(leastSquaresCoeff[2]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 10;});
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

function ScatterMilitarySecurity(){

	// determine parameters
	var margin = {top: 20, right: 20, bottom: 200, left: 140},
	width = 600 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	// determine x scale
	var x = d3.scale.linear()
	.range([0, width]);

	// determine y scale
	var y = d3.scale.linear()
	.range([height, 0]);

	// determine x-axis
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	// determine y-axis
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	// make svg
	var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// load in data
	d3.tsv("ScatMili.txt", function(error, data) {
		if (error) throw error;

	  // convert data
	  data.forEach(function(d) {

	  	d.GDP = +d.GDP;
	  	d.Variable = +d.Variable;
	  });

	  // extract the x labels for the axis and scale domain
		// var xLabels = data.map(function (d) { return d['GDP']; })

	  // x and y labels
	  x.domain(d3.extent(data, function(d) { return d.GDP; }));
	  y.domain(d3.extent(data, function(d) { return d.Variable; }));

	  // make x-axis
	  svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")  
	  .style("text-anchor", "end")
	  .attr("dx", "-.5em")
	  .attr("dy", ".15em")
	  .attr("transform", "rotate(-40)" )

		// make x-axis label
		svg.append("text")
		.attr("x", (width -20))
		.attr("y", height - 5)
		.attr("class", "text-label")
		.attr("text-anchor", "end")
		.text("GDP");

	  // make y-axis
	  svg.append("g")
	  .attr("class", "y axis")
	  .call(yAxis)
	  .append("text")
	  .attr("class", "label")
	  .attr("transform", "rotate(-90)")
	  .attr("y", -40)
	  .attr("dy", ".71em")
	  .style("text-anchor", "end")
	  .text("Military Security")

	  // make dots
	  svg.selectAll(".dot")
	  .data(data)
	  .enter().append("circle")
	  .attr("class", "dot")
	  .attr("r", 2.5)
	  .attr("cx", function(d) { return x(d.GDP); })
	  .attr("cy", function(d) { return y(d.Variable); });

	  // chart title
	  svg.append("text")
	  .attr("x", (width + (margin.left + margin.right) )/ 2)
	  .attr("y", 0)
	  .attr("text-anchor", "middle")
	  .style("font-size", "16px")
	  .style("font-family", "sans-serif")
	  .text("Military Security");

	  // get the x and y values for least squares
	  var xSeries = data.map(function(d) {return parseFloat(d['GDP']); });
	  var ySeries = data.map(function(d) { return parseFloat(d['Variable']); });

	  var leastSquaresCoeff = leastSquares(xSeries, ySeries);

		// apply the reults of the least squares regression
		var x1 = xSeries[0];
		var y1 = leastSquaresCoeff[0]*xSeries[0] + leastSquaresCoeff[1];
		var x2 = xSeries[xSeries.length - 1];
		var y2 = leastSquaresCoeff[0] * xSeries[xSeries.length - 1] + leastSquaresCoeff[1];
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

		// display equation on the chart
		// svg.append("text")
		// .text("eq: " + decimalFormat(leastSquaresCoeff[0]) + "x + " + 
		// 	decimalFormat(leastSquaresCoeff[1]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 30;});

		// display r-square on the chart
		// svg.append("text")
		// .text("r-sq: " + decimalFormat(leastSquaresCoeff[2]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 10;});
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

function ScatterTeleCommunication(){

	// determine parameters
	var margin = {top: 20, right: 20, bottom: 200, left: 50},
	width = 600 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	// determine x scale
	var x = d3.scale.linear()
	.range([0, width]);

	// determine y scale
	var y = d3.scale.linear()
	.range([height, 0]);

	// determine x-axis
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	// determine y-axis
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	// make svg
	var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// load in data
	d3.tsv("ScatTele.txt", function(error, data) {
		if (error) throw error;

	  // convert data
	  data.forEach(function(d) {

	  	d.GDP = +d.GDP;
	  	d.Variable = +d.Variable;
	  });

	  // extract the x labels for the axis and scale domain
		// var xLabels = data.map(function (d) { return d['GDP']; })

	  // x and y labels
	  x.domain(d3.extent(data, function(d) { return d.GDP; }));
	  y.domain(d3.extent(data, function(d) { return d.Variable; }));

	  // make x-axis
	  svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")  
	  .style("text-anchor", "end")
	  .attr("dx", "-.5em")
	  .attr("dy", ".15em")
	  .attr("transform", "rotate(-40)" )

		// make x-axis label
		svg.append("text")
		.attr("x", (width -20))
		.attr("y", height - 5)
		.attr("class", "text-label")
		.attr("text-anchor", "end")
		.text("GDP");

	  // make y-axis
	  svg.append("g")
	  .attr("class", "y axis")
	  .call(yAxis)
	  .append("text")
	  .attr("class", "label")
	  .attr("transform", "rotate(-90)")
	  .attr("y", -40)
	  .attr("dy", ".71em")
	  .style("text-anchor", "end")
	  .text("TeleCommunication")

	  // make dots
	  svg.selectAll(".dot")
	  .data(data)
	  .enter().append("circle")
	  .attr("class", "dot")
	  .attr("r", 2.5)
	  .attr("cx", function(d) { return x(d.GDP); })
	  .attr("cy", function(d) { return y(d.Variable); });

	  // chart title
	  svg.append("text")
	  .attr("x", (width + (margin.left + margin.right) )/ 2)
	  .attr("y", 0)
	  .attr("text-anchor", "middle")
	  .style("font-size", "16px")
	  .style("font-family", "sans-serif")
	  .text("TeleCommunication");

	  // get the x and y values for least squares
	  var xSeries = data.map(function(d) {return parseFloat(d['GDP']); });
	  var ySeries = data.map(function(d) { return parseFloat(d['Variable']); });

	  var leastSquaresCoeff = leastSquares(xSeries, ySeries);

		// apply the reults of the least squares regression
		var x1 = xSeries[0];
		var y1 = leastSquaresCoeff[0]*xSeries[0] + leastSquaresCoeff[1];
		var x2 = xSeries[xSeries.length - 1];
		var y2 = leastSquaresCoeff[0] * xSeries[xSeries.length - 1] + leastSquaresCoeff[1];
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

		// display equation on the chart
		// svg.append("text")
		// .text("eq: " + decimalFormat(leastSquaresCoeff[0]) + "x + " + 
		// 	decimalFormat(leastSquaresCoeff[1]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 30;});

		// display r-square on the chart
		// svg.append("text")
		// .text("r-sq: " + decimalFormat(leastSquaresCoeff[2]))
		// .attr("class", "text-label")
		// .attr("x", function(d) {return xScale(x2) - 60;})
		// .attr("y", function(d) {return yScale(y2) - 10;});
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