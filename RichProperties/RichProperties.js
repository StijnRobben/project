/**
* RichProperties.js
*
* Stijn Robben
* 10559558
*
*/

// MAKE WORLDMAP
$("#container1").datamap({
 scope: 'world', 
 // done: $('.datamaps-subunit').on('click', function(geography) {
 //    var countryData = mapData[geography.id];
 //    console.log("test");
 //  }),
  // }),
  done: function(datamap) {  
  console.log(datamap)

  datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
    var countryData = mapData[geography.id];
    console.log("test");
     if (typeof countryData != 'undefined') {
     setCountry(geography.properties.name, countryData.population);
    }
  })
},
geography_config: {
 borderColor: 'rgba(255,255,255,0.3)',
 highlightBorderColor: 'rgba(0,0,0,0.5)',
 popupTemplate: _.template([
   '<div class="hoverinfo">',
   '<% if (data.country) { %> <strong><%= data.country %></strong><br/><% } %>',
       '<% if (data.GDP) { %>',
       'GDP: <strong><%= data.GDP %><strong><br/> <% } %>',
       '</div>'
       ].join('') )
},
fills: {
 A: '#fdd0a2',
 B: '#fdae6b',
 C: '#fd8d3c',
 D: '#f16913',
 E: '#d94801',
 F: '#a63603',
 G: '#7f2704',
 defaultFill: 'grey' 
},
data: {
    "ABW": {
        "country": "Aruba",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "AND": {
        "country": "Andorra",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "AFG": {
        "country": "Afghanistan",
        "fillKey": "A",
        "GDP": "20038215159.39"
    },
    "AGO": {
        "country": "Angola",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ALB": {
        "country": "Albania",
        "fillKey": "A",
        "GDP": "13211513725.59"
    },
    "ARE": {
        "country": "United Arab Emirates",
        "fillKey": "A",
        "GDP": "399451327433.63"
    },
    "ARG": {
        "country": "Argentina",
        "fillKey": "A",
        "GDP": "537659972702.09"
    },
    "ARM": {
        "country": "Armenia",
        "fillKey": "A",
        "GDP": "11644438422.98"
    },
    "ASM": {
        "country": "American Samoa",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ATG": {
        "country": "Antigua and Barbuda",
        "fillKey": "A",
        "GDP": "1220976011.11"
    },
    "AUS": {
        "country": "Australia",
        "fillKey": "A",
        "GDP": "1454675479665.84"
    },
    "AUT": {
        "country": "Austria",
        "fillKey": "A",
        "GDP": "436887543466.95"
    },
    "AZE": {
        "country": "Azerbaijan",
        "fillKey": "A",
        "GDP": "75198010965.19"
    },
    "BDI": {
        "country": "Burundi",
        "fillKey": "A",
        "GDP": "3093647226.81"
    },
    "BEL": {
        "country": "Belgium",
        "fillKey": "A",
        "GDP": "531546586178.58"
    },
    "BEN": {
        "country": "Benin",
        "fillKey": "A",
        "GDP": "9575356734.73"
    },
    "BFA": {
        "country": "Burkina Faso",
        "fillKey": "A",
        "GDP": "12542221941.86"
    },
    "BGD": {
        "country": "Bangladesh",
        "fillKey": "A",
        "GDP": "172886567164.18"
    },
    "BGR": {
        "country": "Bulgaria",
        "fillKey": "A",
        "GDP": "56717054673.72"
    },
    "BHR": {
        "country": "Bahrain",
        "fillKey": "A",
        "GDP": "33851063829.79"
    },
    "BHS": {
        "country": "Bahamas, The",
        "fillKey": "A",
        "GDP": "8510500000.00"
    },
    "BIH": {
        "country": "Bosnia and Herzegovina",
        "fillKey": "A",
        "GDP": "18521475376.48"
    },
    "BLR": {
        "country": "Belarus",
        "fillKey": "A",
        "GDP": "76139250364.52"
    },
    "BLZ": {
        "country": "Belize",
        "fillKey": "A",
        "GDP": "1699154132.06"
    },
    "BMU": {
        "country": "Bermuda",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "BOL": {
        "country": "Bolivia",
        "fillKey": "A",
        "GDP": "32996187988.42"
    },
    "BRA": {
        "country": "Brazil",
        "fillKey": "A",
        "GDP": "2416635506076.31"
    },
    "BRB": {
        "country": "Barbados",
        "fillKey": "A",
        "GDP": "4354500000.00"
    },
    "BRN": {
        "country": "Brunei Darussalam",
        "fillKey": "A",
        "GDP": "17104656669.30"
    },
    "BTN": {
        "country": "Bhutan",
        "fillKey": "A",
        "GDP": "1958803866.95"
    },
    "BWA": {
        "country": "Botswana",
        "fillKey": "A",
        "GDP": "15813364345.32"
    },
    "CAF": {
        "country": "Central African Republic",
        "fillKey": "A",
        "GDP": "1722529061.42"
    },
    "CAN": {
        "country": "Canada",
        "fillKey": "A",
        "GDP": "1785386649602.19"
    },
    "CHE": {
        "country": "Switzerland",
        "fillKey": "A",
        "GDP": "701037135966.05"
    },
    "CHI": {
        "country": "Channel Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "CHL": {
        "country": "Chile",
        "fillKey": "A",
        "GDP": "258061522886.53"
    },
    "CHN": {
        "country": "China",
        "fillKey": "E",
        "GDP": "10354831729340.40"
    },
    "CIV": {
        "country": "Cote d'Ivoire",
        "fillKey": "A",
        "GDP": "34253607832.41"
    },
    "CMR": {
        "country": "Cameroon",
        "fillKey": "A",
        "GDP": "32050817632.96"
    },
    "COG": {
        "country": "Congo, Rep.",
        "fillKey": "A",
        "GDP": "14177440494.82"
    },
    "COL": {
        "country": "Colombia",
        "fillKey": "A",
        "GDP": "377739622865.84"
    },
    "COM": {
        "country": "Comoros",
        "fillKey": "A",
        "GDP": "623751049.73"
    },
    "CPV": {
        "country": "Cabo Verde",
        "fillKey": "A",
        "GDP": "1871187071.00"
    },
    "CRI": {
        "country": "Costa Rica",
        "fillKey": "A",
        "GDP": "49552580683.15"
    },
    "CSS": {
        "country": "Caribbean small states",
        "fillKey": "A",
        "GDP": "71288024078.60"
    },
    "CUB": {
        "country": "Cuba",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "CUW": {
        "country": "Curacao",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "CYM": {
        "country": "Cayman Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "CYP": {
        "country": "Cyprus",
        "fillKey": "A",
        "GDP": "23226158986.17"
    },
    "CZE": {
        "country": "Czech Republic",
        "fillKey": "A",
        "GDP": "205269709743.47"
    },
    "DEU": {
        "country": "Germany",
        "fillKey": "B",
        "GDP": "3868291231823.77"
    },
    "DJI": {
        "country": "Djibouti",
        "fillKey": "A",
        "GDP": "1589026157.88"
    },
    "DMA": {
        "country": "Dominica",
        "fillKey": "A",
        "GDP": "524074074.07"
    },
    "DNK": {
        "country": "Denmark",
        "fillKey": "A",
        "GDP": "342362478767.51"
    },
    "DOM": {
        "country": "Dominican Republic",
        "fillKey": "A",
        "GDP": "64137819040.49"
    },
    "DZA": {
        "country": "Algeria",
        "fillKey": "A",
        "GDP": "213518488688.12"
    },
    "EAS": {
        "country": "East Asia & Pacific (all income levels)",
        "fillKey": "21467980438307.30",
        "GDP": "21467980438307.30"
    },
    "ECU": {
        "country": "Ecuador",
        "fillKey": "A",
        "GDP": "100917372000.00"
    },
    "EGY": {
        "country": "Egypt, Arab Rep.",
        "fillKey": "A",
        "GDP": "301498960051.64"
    },
    "ERI": {
        "country": "Eritrea",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ESP": {
        "country": "Spain",
        "fillKey": "A",
        "GDP": "1381342101735.68"
    },
    "EST": {
        "country": "Estonia",
        "fillKey": "A",
        "GDP": "26485161115.94"
    },
    "ETH": {
        "country": "Ethiopia",
        "fillKey": "A",
        "GDP": "55612228233.52"
    },
    "FIN": {
        "country": "Finland",
        "fillKey": "A",
        "GDP": "272216575502.25"
    },
    "FJI": {
        "country": "Fiji",
        "fillKey": "A",
        "GDP": "4531817940.97"
    },
    "FRA": {
        "country": "France",
        "fillKey": "B",
        "GDP": "2829192039171.84"
    },
    "FRO": {
        "country": "Faroe Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "FSM": {
        "country": "Micronesia, Fed. Sts.",
        "fillKey": "A",
        "GDP": "318071978.58"
    },
    "GAB": {
        "country": "Gabon",
        "fillKey": "A",
        "GDP": "18179717776.16"
    },
    "GBR": {
        "country": "United Kingdom",
        "fillKey": "B",
        "GDP": "2988893283565.20"
    },
    "GEO": {
        "country": "Georgia",
        "fillKey": "A",
        "GDP": "16529963187.40"
    },
    "GHA": {
        "country": "Ghana",
        "fillKey": "A",
        "GDP": "38616536131.65"
    },
    "GIN": {
        "country": "Guinea",
        "fillKey": "A",
        "GDP": "6624068015.50"
    },
    "GMB": {
        "country": "Gambia, The",
        "fillKey": "A",
        "GDP": "850902397.34"
    },
    "GNB": {
        "country": "Guinea-Bissau",
        "fillKey": "A",
        "GDP": "1022371991.53"
    },
    "GNQ": {
        "country": "Equatorial Guinea",
        "fillKey": "A",
        "GDP": "15529729676.69"
    },
    "GRC": {
        "country": "Greece",
        "fillKey": "A",
        "GDP": "235574074998.31"
    },
    "GRD": {
        "country": "Grenada",
        "fillKey": "A",
        "GDP": "911803790.37"
    },
    "GRL": {
        "country": "Greenland",
        "fillKey": "A",
        "GDP": "2441226080.04"
    },
    "GTM": {
        "country": "Guatemala",
        "fillKey": "A",
        "GDP": "58827085046.95"
    },
    "GUM": {
        "country": "Guam",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "GUY": {
        "country": "Guyana",
        "fillKey": "A",
        "GDP": "3096747286.98"
    },
    "HKG": {
        "country": "Hong Kong SAR, China",
        "fillKey": "A",
        "GDP": "290895784165.80"
    },
    "HND": {
        "country": "Honduras",
        "fillKey": "A",
        "GDP": "19385314718.41"
    },
    "HRV": {
        "country": "Croatia",
        "fillKey": "A",
        "GDP": "57113389357.45"
    },
    "HTI": {
        "country": "Haiti",
        "fillKey": "A",
        "GDP": "8713041022.95"
    },
    "HUN": {
        "country": "Hungary",
        "fillKey": "A",
        "GDP": "138346669914.95"
    },
    "IDN": {
        "country": "Indonesia",
        "fillKey": "A",
        "GDP": "888538201025.35"
    },
    "IMN": {
        "country": "Isle of Man",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "IND": {
        "country": "India",
        "fillKey": "A",
        "GDP": "2048517438873.54"
    },
    "IRL": {
        "country": "Ireland",
        "fillKey": "A",
        "GDP": "250813607686.11"
    },
    "IRN": {
        "country": "Iran, Islamic Rep.",
        "fillKey": "A",
        "GDP": "425326068422.88"
    },
    "IRQ": {
        "country": "Iraq",
        "fillKey": "A",
        "GDP": "223500000000.00"
    },
    "ISL": {
        "country": "Iceland",
        "fillKey": "A",
        "GDP": "17036097481.81"
    },
    "ISR": {
        "country": "Israel",
        "fillKey": "A",
        "GDP": "305674837195.00"
    },
    "ITA": {
        "country": "Italy",
        "fillKey": "A",
        "GDP": "2141161325367.43"
    },
    "JAM": {
        "country": "Jamaica",
        "fillKey": "A",
        "GDP": "13891359467.72"
    },
    "JOR": {
        "country": "Jordan",
        "fillKey": "A",
        "GDP": "35826925774.65"
    },
    "JPN": {
        "country": "Japan",
        "fillKey": "B",
        "GDP": "4601461206885.08"
    },
    "KAZ": {
        "country": "Kazakhstan",
        "fillKey": "A",
        "GDP": "217872250221.41"
    },
    "KEN": {
        "country": "Kenya",
        "fillKey": "A",
        "GDP": "60936509777.96"
    },
    "KGZ": {
        "country": "Kyrgyz Republic",
        "fillKey": "A",
        "GDP": "7404412710.31"
    },
    "KHM": {
        "country": "Cambodia",
        "fillKey": "A",
        "GDP": "16777820332.71"
    },
    "KIR": {
        "country": "Kiribati",
        "fillKey": "A",
        "GDP": "166756805.48"
    },
    "KNA": {
        "country": "St. Kitts and Nevis",
        "fillKey": "A",
        "GDP": "852203083.88"
    },
    "KOR": {
        "country": "Korea, Rep.",
        "fillKey": "A",
        "GDP": "1410382988616.48"
    },
    "KSV": {
        "country": "Kosovo",
        "fillKey": "A",
        "GDP": "7386758657.29"
    },
    "KWT": {
        "country": "Kuwait",
        "fillKey": "A",
        "GDP": "163612438510.19"
    },
    "LAC": {
        "country": "Latin America & Caribbean (developing only)",
        "fillKey": "B",
        "GDP": "4845035083138.30"
    },
    "LAO": {
        "country": "Lao PDR",
        "fillKey": "A",
        "GDP": "11997062176.69"
    },
    "LBN": {
        "country": "Lebanon",
        "fillKey": "A",
        "GDP": "45730945273.63"
    },
    "LBR": {
        "country": "Liberia",
        "fillKey": "A",
        "GDP": "2013000000.00"
    },
    "LBY": {
        "country": "Libya",
        "fillKey": "A",
        "GDP": "41142722414.34"
    },
    "LCA": {
        "country": "St. Lucia",
        "fillKey": "A",
        "GDP": "1404430563.81"
    },
    "LIE": {
        "country": "Liechtenstein",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "LKA": {
        "country": "Sri Lanka",
        "fillKey": "A",
        "GDP": "78823610056.93"
    },
    "LSO": {
        "country": "Lesotho",
        "fillKey": "A",
        "GDP": "2181300505.86"
    },
    "LTU": {
        "country": "Lithuania",
        "fillKey": "A",
        "GDP": "48353937110.26"
    },
    "LUX": {
        "country": "Luxembourg",
        "fillKey": "A",
        "GDP": "64873963098.49"
    },
    "LVA": {
        "country": "Latvia",
        "fillKey": "A",
        "GDP": "31286809075.23"
    },
    "MAC": {
        "country": "Macao SAR, China",
        "fillKey": "A",
        "GDP": "55501734046.15"
    },
    "MAF": {
        "country": "St. Martin (French part)",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MAR": {
        "country": "Morocco",
        "fillKey": "A",
        "GDP": "110009040838.42"
    },
    "MCO": {
        "country": "Monaco",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MDA": {
        "country": "Moldova",
        "fillKey": "A",
        "GDP": "7962423551.54"
    },
    "MDG": {
        "country": "Madagascar",
        "fillKey": "A",
        "GDP": "10593147380.73"
    },
    "MDV": {
        "country": "Maldives",
        "fillKey": "A",
        "GDP": "3061829144.68"
    },
    "MEX": {
        "country": "Mexico",
        "fillKey": "A",
        "GDP": "1294689733233.03"
    },
    "MHL": {
        "country": "Marshall Islands",
        "fillKey": "A",
        "GDP": "186716625.75"
    },
    "MIC": {
        "country": "Middle income",
        "fillKey": "24748448400393.40",
        "GDP": "24748448400393.40"
    },
    "MKD": {
        "country": "Macedonia, FYR",
        "fillKey": "A",
        "GDP": "11323769141.48"
    },
    "MLI": {
        "country": "Mali",
        "fillKey": "A",
        "GDP": "12037229619.42"
    },
    "MLT": {
        "country": "Malta",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MMR": {
        "country": "Myanmar",
        "fillKey": "A",
        "GDP": "64330038664.73"
    },
    "MNE": {
        "country": "Montenegro",
        "fillKey": "A",
        "GDP": "4587928884.17"
    },
    "MNG": {
        "country": "Mongolia",
        "fillKey": "A",
        "GDP": "12015944336.55"
    },
    "MNP": {
        "country": "Northern Mariana Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MOZ": {
        "country": "Mozambique",
        "fillKey": "A",
        "GDP": "15938468562.50"
    },
    "MRT": {
        "country": "Mauritania",
        "fillKey": "A",
        "GDP": "5061180371.05"
    },
    "MUS": {
        "country": "Mauritius",
        "fillKey": "A",
        "GDP": "12630332836.95"
    },
    "MWI": {
        "country": "Malawi",
        "fillKey": "A",
        "GDP": "4258033615.30"
    },
    "MYS": {
        "country": "Malaysia",
        "fillKey": "A",
        "GDP": "338103822298.27"
    },
    "NAM": {
        "country": "Namibia",
        "fillKey": "A",
        "GDP": "12995241138.15"
    },
    "NCL": {
        "country": "New Caledonia",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "NER": {
        "country": "Niger",
        "fillKey": "A",
        "GDP": "8168695869.87"
    },
    "NGA": {
        "country": "Nigeria",
        "fillKey": "A",
        "GDP": "568508262377.80"
    },
    "NIC": {
        "country": "Nicaragua",
        "fillKey": "A",
        "GDP": "11805641286.80"
    },
    "NLD": {
        "country": "Netherlands",
        "fillKey": "A",
        "GDP": "879319321494.64"
    },
    "NOR": {
        "country": "Norway",
        "fillKey": "A",
        "GDP": "499817138323.20"
    },
    "NPL": {
        "country": "Nepal",
        "fillKey": "A",
        "GDP": "19769642122.58"
    },
    "NZL": {
        "country": "New Zealand",
        "fillKey": "A",
        "GDP": "199969858903.72"
    },
    "OMN": {
        "country": "Oman",
        "fillKey": "A",
        "GDP": "81796618985.70"
    },
    "PAK": {
        "country": "Pakistan",
        "fillKey": "A",
        "GDP": "243631917866.48"
    },
    "PAN": {
        "country": "Panama",
        "fillKey": "A",
        "GDP": "46212600000.00"
    },
    "PER": {
        "country": "Peru",
        "fillKey": "A",
        "GDP": "202596307719.12"
    },
    "PHL": {
        "country": "Philippines",
        "fillKey": "A",
        "GDP": "284777093019.07"
    },
    "PLW": {
        "country": "Palau",
        "fillKey": "A",
        "GDP": "250625562.79"
    },
    "PNG": {
        "country": "Papua New Guinea",
        "fillKey": "A",
        "GDP": "16928577232.47"
    },
    "POL": {
        "country": "Poland",
        "fillKey": "A",
        "GDP": "544966555714.06"
    },
    "PRI": {
        "country": "Puerto Rico",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "PRT": {
        "country": "Portugal",
        "fillKey": "A",
        "GDP": "230116912513.59"
    },
    "PRY": {
        "country": "Paraguay",
        "fillKey": "A",
        "GDP": "30880859579.51"
    },
    "PSS": {
        "country": "Pacific island small states",
        "fillKey": "A",
        "GDP": "8699784931.29"
    },
    "PYF": {
        "country": "French Polynesia",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "QAT": {
        "country": "Qatar",
        "fillKey": "A",
        "GDP": "210109065934.07"
    },
    "ROU": {
        "country": "Romania",
        "fillKey": "A",
        "GDP": "199043652215.45"
    },
    "RUS": {
        "country": "Russian Federation",
        "fillKey": "A",
        "GDP": "1860597922763.44"
    },
    "RWA": {
        "country": "Rwanda",
        "fillKey": "A",
        "GDP": "7890190336.75"
    },
    "SAS": {
        "country": "South Asia",
        "fillKey": "B",
        "GDP": "2588688024254.73"
    },
    "SAU": {
        "country": "Saudi Arabia",
        "fillKey": "A",
        "GDP": "753831733333.33"
    },
    "SDN": {
        "country": "Sudan",
        "fillKey": "A",
        "GDP": "73814947340.90"
    },
    "SEN": {
        "country": "Senegal",
        "fillKey": "A",
        "GDP": "15657551477.20"
    },
    "SGP": {
        "country": "Singapore",
        "fillKey": "A",
        "GDP": "307859758503.67"
    },
    "SLB": {
        "country": "Solomon Islands",
        "fillKey": "A",
        "GDP": "1158183053.76"
    },
    "SLE": {
        "country": "Sierra Leone",
        "fillKey": "A",
        "GDP": "4837512587.35"
    },
    "SLV": {
        "country": "El Salvador",
        "fillKey": "A",
        "GDP": "25163700000.00"
    },
    "SMR": {
        "country": "San Marino",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "SOM": {
        "country": "Somalia",
        "fillKey": "A",
        "GDP": "5707000000.00"
    },
    "SRB": {
        "country": "Serbia",
        "fillKey": "A",
        "GDP": "43866423166.94"
    },
    "SSD": {
        "country": "South Sudan",
        "fillKey": "A",
        "GDP": "13282084041.62"
    },
    "STP": {
        "country": "Sao Tome and Principe",
        "fillKey": "A",
        "GDP": "337413478.15"
    },
    "SUR": {
        "country": "Suriname",
        "fillKey": "A",
        "GDP": "5210303030.30"
    },
    "SVK": {
        "country": "Slovak Republic",
        "fillKey": "A",
        "GDP": "100248607784.10"
    },
    "SVN": {
        "country": "Slovenia",
        "fillKey": "A",
        "GDP": "49491440620.37"
    },
    "SWE": {
        "country": "Sweden",
        "fillKey": "A",
        "GDP": "571090480171.00"
    },
    "SWZ": {
        "country": "Swaziland",
        "fillKey": "A",
        "GDP": "4412891830.03"
    },
    "SXM": {
        "country": "Sint Maarten (Dutch part)",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "SYC": {
        "country": "Seychelles",
        "fillKey": "A",
        "GDP": "1422608276.10"
    },
    "SYR": {
        "country": "Syrian Arab Republic",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "TCA": {
        "country": "Turks and Caicos Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "TCD": {
        "country": "Chad",
        "fillKey": "A",
        "GDP": "13922224560.79"
    },
    "TGO": {
        "country": "Togo",
        "fillKey": "A",
        "GDP": "4518443476.63"
    },
    "THA": {
        "country": "Thailand",
        "fillKey": "A",
        "GDP": "404823952117.93"
    },
    "TJK": {
        "country": "Tajikistan",
        "fillKey": "A",
        "GDP": "9241627840.61"
    },
    "TKM": {
        "country": "Turkmenistan",
        "fillKey": "A",
        "GDP": "47931929824.56"
    },
    "TLS": {
        "country": "Timor-Leste",
        "fillKey": "A",
        "GDP": "1417000000.00"
    },
    "TON": {
        "country": "Tonga",
        "fillKey": "A",
        "GDP": "434380116.96"
    },
    "TTO": {
        "country": "Trinidad and Tobago",
        "fillKey": "A",
        "GDP": "28882663253.84"
    },
    "TUN": {
        "country": "Tunisia",
        "fillKey": "A",
        "GDP": "48612652412.09"
    },
    "TUR": {
        "country": "Turkey",
        "fillKey": "A",
        "GDP": "798429233036.33"
    },
    "TUV": {
        "country": "Tuvalu",
        "fillKey": "A",
        "GDP": "37859550.40"
    },
    "TZA": {
        "country": "Tanzania",
        "fillKey": "A",
        "GDP": "48056680982.15"
    },
    "UGA": {
        "country": "Uganda",
        "fillKey": "A",
        "GDP": "26998477288.85"
    },
    "UKR": {
        "country": "Ukraine",
        "fillKey": "A",
        "GDP": "131805126738.29"
    },
    "URY": {
        "country": "Uruguay",
        "fillKey": "A",
        "GDP": "57471030095.37"
    },
    "USA": {
        "country": "United States",
        "fillKey": "G",
        "GDP": "17419000000000.00"
    },
    "UZB": {
        "country": "Uzbekistan",
        "fillKey": "A",
        "GDP": "62643953021.76"
    },
    "VCT": {
        "country": "St. Vincent and the Grenadines",
        "fillKey": "A",
        "GDP": "729309384.44"
    },
    "VEN": {
        "country": "Venezuela, RB",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "VIR": {
        "country": "Virgin Islands (U.S.)",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "VNM": {
        "country": "Vietnam",
        "fillKey": "A",
        "GDP": "186204652922.26"
    },
    "VUT": {
        "country": "Vanuatu",
        "fillKey": "A",
        "GDP": "814954306.97"
    },
    "WSM": {
        "country": "Samoa",
        "fillKey": "A",
        "GDP": "800418989.62"
    },
    "YEM": {
        "country": "Yemen, Rep.",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ZAF": {
        "country": "South Africa",
        "fillKey": "A",
        "GDP": "350140810003.32"
    },
    "COD": {
        "country": "Congo, Dem. Rep.",
        "fillKey": "A",
        "GDP": "33121070959.39"
    },
    "ZMB": {
        "country": "Zambia",
        "fillKey": "A",
        "GDP": "27066230009.10"
    },
    "ZWE": {
        "country": "Zimbabwe",
        "fillKey": "A",
        "GDP": "14196912534.63"
    }
}
});