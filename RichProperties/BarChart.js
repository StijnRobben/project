	/**
	* BarChart.js
	*
	* Stijn Robben
	* 10559558
	*
	*/

function Barchart(dataset, ytitle){
	
	d3.select(".barchart").remove();

	// declaring the margin
	var margin = { top: 20, right: 15, bottom: 200, left: 140 },
		width = 650 - margin.right - margin.left,
		height = 550 - margin.top - margin.bottom;

	// define x-axis scale
	var xScale = d3.scale.ordinal()
		.rangeRoundBands([0, width], 0.2, 0.2)

	// define y-axis scale
	var yScale = d3.scale.log()
		.range([height, 0]);

	// define x-axis
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	// define y-axis
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");

	// define d3-tip
	var tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function(d) {
			return "GDP: <span style='color:red'>" + d.GDP + "</span>";
		})

	// define SVG
	var svg = d3.select('body')
		.append('svg')
		.attr("class", "barchart")
		.attr ({
			"width" : width + margin.right + margin.left,
			"height" : height + margin.top + margin.bottom
		})
		.append('g')
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	svg.call(tip);

	// import de JSON data
	d3.tsv(dataset, function(error, data) {
		if (error) throw error;

		  	// convert data
		  	data.forEach(function(d) {

		  	d.GDP = +d.GDP;
		  	d.Variable = +d.Variable;
	  	});

		// get the index of clicked country
		for (var i = 0; i < data.length; i+= 1){
			if (data[i].CountryCode == country){
				index = i
			}
		}

		console.log(index)
		console.log(data[index]);

		var datatemp = [];

		// get the index of 5 countries with a lower GDP and 5 with a higher GDP
		for (var s = index -5; s < index +6; s += 1){
			if (s > 147){
				break
			}
			console.log(s)
			datatemp.push(data[s])
		}
		console.log(datatemp)

	  	xScale.domain(datatemp.map(function(d){return d.CountryName}));
	  	yScale.domain(d3.extent(data, function(d) { return d.Variable;}));

		// draw the bars
		svg.selectAll(".bar")
		.data(datatemp)
		.enter()	
			.append("rect")
			.attr("class", "bar")
			.attr("id", function(d) {return d.CountryName })
			.attr ({
				"x": function(d) {return xScale(d.CountryName);},
				"y": function(d) {return yScale(d.Variable);},
				"width": xScale.rangeBand(),
				"height": function(d) { return height - yScale(d.Variable);}
			})
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	  // make x axis
	    svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
			.selectAll("text")  
				.style("text-anchor", "end")
				.attr("dx", "-.5em")
				.attr("dy", ".15em")
				.attr("transform", "rotate(-40)" );

	    // make y axis and label it
		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text(ytitle);
	});
}