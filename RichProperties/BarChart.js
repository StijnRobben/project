/**
* BarChart.js
*
* Stijn Robben
* 10559558
*
*/

// declaring the margin
var margin = { top: 20, right: 15, bottom: 200, left: 80 },
  width = 450 - margin.right - margin.left,
  height = 550 - margin.top - margin.bottom;

// define x-axis scale
var xScale = d3.scale.ordinal()
  .rangeRoundBands([0, width], 0.2, 0.2)

// define y-axis scale
var yScale = d3.scale.linear()
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
// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "Population: <span style='color:red'>" + d.people + "</span>";
//   })

 // define SVG
var svg = d3.select('body')
  .append('svg')
  .attr ({
    "width" : width + margin.right + margin.left,
    "height" : height + margin.top + margin.bottom
  })
  .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.call(tip);

// import de JSON data
var data=

d3.json("population.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log(data)

  xScale.domain(data.map(function(d){ return d.year;}));
  yScale.domain([0, d3.max(data, function(d){return d.people})]);

  // draw the bars
  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr ({
      "x": function(d) {return xScale(d.year);},
      "y": function(d) {return yScale(d.people);},
      "width": xScale.rangeBand(),
      "height": function(d) { return height - yScale(d.people);}
    })
    // .on('mouseover', tip.show)
    //     .on('mouseout', tip.hide)

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
      .text("Rich Property value");
});