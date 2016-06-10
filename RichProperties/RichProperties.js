/**
* RichProperties.js
*
* Stijn Robben
* 10559558
*
*/
// MAKE WORLDMAP
new Datamap({
  scope: 'world',
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      var country = geography.id
      window.country = country
      console.log(country);
      ScatterCorruption()
  });
},
element: document.getElementById('container1'),
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
geographyConfig: {
    borderColor: 'rgba(255,255,255,0.3)',
    highlightBorderColor: 'rgba(0,0,0,0.5)',
    popupTemplate: function(geo, data) {
      return data && data.GDP ?
      '<div class="hoverinfo"><strong>' + geo.properties.name + '</strong><br/>GDP: <strong> $ ' + data.GDP + '</strong></div>' :
      '<div class="hoverinfo"><strong>' + geo.properties.name + '</strong></div>';
  }
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
        "fillKey": "D",
        "GDP": "20038215159.39"
    },
    "AGO": {
        "country": "Angola",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ALB": {
        "country": "Albania",
        "fillKey": "D",
        "GDP": "13211513725.59"
    },
    "ARE": {
        "country": "United Arab Emirates",
        "fillKey": "E",
        "GDP": "399451327433.63"
    },
    "ARG": {
        "country": "Argentina",
        "fillKey": "E",
        "GDP": "537659972702.09"
    },
    "ARM": {
        "country": "Armenia",
        "fillKey": "D",
        "GDP": "11644438422.98"
    },
    "ASM": {
        "country": "American Samoa",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ATG": {
        "country": "Antigua and Barbuda",
        "fillKey": "C",
        "GDP": "1220976011.11"
    },
    "AUS": {
        "country": "Australia",
        "fillKey": "F",
        "GDP": "1454675479665.84"
    },
    "AUT": {
        "country": "Austria",
        "fillKey": "E",
        "GDP": "436887543466.95"
    },
    "AZE": {
        "country": "Azerbaijan",
        "fillKey": "D",
        "GDP": "75198010965.19"
    },
    "BDI": {
        "country": "Burundi",
        "fillKey": "C",
        "GDP": "3093647226.81"
    },
    "BEL": {
        "country": "Belgium",
        "fillKey": "E",
        "GDP": "531546586178.58"
    },
    "BEN": {
        "country": "Benin",
        "fillKey": "C",
        "GDP": "9575356734.73"
    },
    "BFA": {
        "country": "Burkina Faso",
        "fillKey": "D",
        "GDP": "12542221941.86"
    },
    "BGD": {
        "country": "Bangladesh",
        "fillKey": "E",
        "GDP": "172886567164.18"
    },
    "BGR": {
        "country": "Bulgaria",
        "fillKey": "D",
        "GDP": "56717054673.72"
    },
    "BHR": {
        "country": "Bahrain",
        "fillKey": "D",
        "GDP": "33851063829.79"
    },
    "BHS": {
        "country": "Bahamas, The",
        "fillKey": "C",
        "GDP": "8510500000.00"
    },
    "BIH": {
        "country": "Bosnia and Herzegovina",
        "fillKey": "D",
        "GDP": "18521475376.48"
    },
    "BLR": {
        "country": "Belarus",
        "fillKey": "D",
        "GDP": "76139250364.52"
    },
    "BLZ": {
        "country": "Belize",
        "fillKey": "C",
        "GDP": "1699154132.06"
    },
    "BMU": {
        "country": "Bermuda",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "BOL": {
        "country": "Bolivia",
        "fillKey": "D",
        "GDP": "32996187988.42"
    },
    "BRA": {
        "country": "Brazil",
        "fillKey": "F",
        "GDP": "2416635506076.31"
    },
    "BRB": {
        "country": "Barbados",
        "fillKey": "C",
        "GDP": "4354500000.00"
    },
    "BRN": {
        "country": "Brunei Darussalam",
        "fillKey": "D",
        "GDP": "17104656669.30"
    },
    "BTN": {
        "country": "Bhutan",
        "fillKey": "C",
        "GDP": "1958803866.95"
    },
    "BWA": {
        "country": "Botswana",
        "fillKey": "D",
        "GDP": "15813364345.32"
    },
    "CAF": {
        "country": "Central African Republic",
        "fillKey": "C",
        "GDP": "1722529061.42"
    },
    "CAN": {
        "country": "Canada",
        "fillKey": "F",
        "GDP": "1785386649602.19"
    },
    "CHE": {
        "country": "Switzerland",
        "fillKey": "E",
        "GDP": "701037135966.05"
    },
    "CHI": {
        "country": "Channel Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "CHL": {
        "country": "Chile",
        "fillKey": "E",
        "GDP": "258061522886.53"
    },
    "CHN": {
        "country": "China",
        "fillKey": "G",
        "GDP": "10354831729340.40"
    },
    "CIV": {
        "country": "Cote d'Ivoire",
        "fillKey": "D",
        "GDP": "34253607832.41"
    },
    "CMR": {
        "country": "Cameroon",
        "fillKey": "D",
        "GDP": "32050817632.96"
    },
    "COG": {
        "country": "Congo, Rep.",
        "fillKey": "D",
        "GDP": "14177440494.82"
    },
    "COL": {
        "country": "Colombia",
        "fillKey": "E",
        "GDP": "377739622865.84"
    },
    "COM": {
        "country": "Comoros",
        "fillKey": "B",
        "GDP": "623751049.73"
    },
    "CPV": {
        "country": "Cabo Verde",
        "fillKey": "C",
        "GDP": "1871187071.00"
    },
    "CRI": {
        "country": "Costa Rica",
        "fillKey": "D",
        "GDP": "49552580683.15"
    },
    "CSS": {
        "country": "Caribbean small states",
        "fillKey": "D",
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
        "fillKey": "D",
        "GDP": "23226158986.17"
    },
    "CZE": {
        "country": "Czech Republic",
        "fillKey": "E",
        "GDP": "205269709743.47"
    },
    "DEU": {
        "country": "Germany",
        "fillKey": "F",
        "GDP": "3868291231823.77"
    },
    "DJI": {
        "country": "Djibouti",
        "fillKey": "C",
        "GDP": "1589026157.88"
    },
    "DMA": {
        "country": "Dominica",
        "fillKey": "B",
        "GDP": "524074074.07"
    },
    "DNK": {
        "country": "Denmark",
        "fillKey": "E",
        "GDP": "342362478767.51"
    },
    "DOM": {
        "country": "Dominican Republic",
        "fillKey": "D",
        "GDP": "64137819040.49"
    },
    "DZA": {
        "country": "Algeria",
        "fillKey": "E",
        "GDP": "213518488688.12"
    },
    "EAS": {
        "country": "East Asia & Pacific (all income levels)",
        "fillKey": "G",
        "GDP": "21467980438307.30"
    },
    "ECU": {
        "country": "Ecuador",
        "fillKey": "E",
        "GDP": "100917372000.00"
    },
    "EGY": {
        "country": "Egypt, Arab Rep.",
        "fillKey": "E",
        "GDP": "301498960051.64"
    },
    "ERI": {
        "country": "Eritrea",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ESP": {
        "country": "Spain",
        "fillKey": "F",
        "GDP": "1381342101735.68"
    },
    "EST": {
        "country": "Estonia",
        "fillKey": "D",
        "GDP": "26485161115.94"
    },
    "ETH": {
        "country": "Ethiopia",
        "fillKey": "D",
        "GDP": "55612228233.52"
    },
    "FIN": {
        "country": "Finland",
        "fillKey": "E",
        "GDP": "272216575502.25"
    },
    "FJI": {
        "country": "Fiji",
        "fillKey": "C",
        "GDP": "4531817940.97"
    },
    "FRA": {
        "country": "France",
        "fillKey": "F",
        "GDP": "2829192039171.84"
    },
    "FRO": {
        "country": "Faroe Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "FSM": {
        "country": "Micronesia, Fed. Sts.",
        "fillKey": "B",
        "GDP": "318071978.58"
    },
    "GAB": {
        "country": "Gabon",
        "fillKey": "D",
        "GDP": "18179717776.16"
    },
    "GBR": {
        "country": "United Kingdom",
        "fillKey": "F",
        "GDP": "2988893283565.20"
    },
    "GEO": {
        "country": "Georgia",
        "fillKey": "D",
        "GDP": "16529963187.40"
    },
    "GHA": {
        "country": "Ghana",
        "fillKey": "D",
        "GDP": "38616536131.65"
    },
    "GIN": {
        "country": "Guinea",
        "fillKey": "C",
        "GDP": "6624068015.50"
    },
    "GMB": {
        "country": "Gambia, The",
        "fillKey": "B",
        "GDP": "850902397.34"
    },
    "GNB": {
        "country": "Guinea-Bissau",
        "fillKey": "C",
        "GDP": "1022371991.53"
    },
    "GNQ": {
        "country": "Equatorial Guinea",
        "fillKey": "D",
        "GDP": "15529729676.69"
    },
    "GRC": {
        "country": "Greece",
        "fillKey": "E",
        "GDP": "235574074998.31"
    },
    "GRD": {
        "country": "Grenada",
        "fillKey": "B",
        "GDP": "911803790.37"
    },
    "GRL": {
        "country": "Greenland",
        "fillKey": "C",
        "GDP": "2441226080.04"
    },
    "GTM": {
        "country": "Guatemala",
        "fillKey": "D",
        "GDP": "58827085046.95"
    },
    "GUM": {
        "country": "Guam",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "GUY": {
        "country": "Guyana",
        "fillKey": "C",
        "GDP": "3096747286.98"
    },
    "HKG": {
        "country": "Hong Kong SAR, China",
        "fillKey": "E",
        "GDP": "290895784165.80"
    },
    "HND": {
        "country": "Honduras",
        "fillKey": "D",
        "GDP": "19385314718.41"
    },
    "HRV": {
        "country": "Croatia",
        "fillKey": "D",
        "GDP": "57113389357.45"
    },
    "HTI": {
        "country": "Haiti",
        "fillKey": "C",
        "GDP": "8713041022.95"
    },
    "HUN": {
        "country": "Hungary",
        "fillKey": "E",
        "GDP": "138346669914.95"
    },
    "IDN": {
        "country": "Indonesia",
        "fillKey": "E",
        "GDP": "888538201025.35"
    },
    "IMN": {
        "country": "Isle of Man",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "IND": {
        "country": "India",
        "fillKey": "F",
        "GDP": "2048517438873.54"
    },
    "IRL": {
        "country": "Ireland",
        "fillKey": "E",
        "GDP": "250813607686.11"
    },
    "IRN": {
        "country": "Iran, Islamic Rep.",
        "fillKey": "E",
        "GDP": "425326068422.88"
    },
    "IRQ": {
        "country": "Iraq",
        "fillKey": "E",
        "GDP": "223500000000.00"
    },
    "ISL": {
        "country": "Iceland",
        "fillKey": "D",
        "GDP": "17036097481.81"
    },
    "ISR": {
        "country": "Israel",
        "fillKey": "E",
        "GDP": "305674837195.00"
    },
    "ITA": {
        "country": "Italy",
        "fillKey": "F",
        "GDP": "2141161325367.43"
    },
    "JAM": {
        "country": "Jamaica",
        "fillKey": "D",
        "GDP": "13891359467.72"
    },
    "JOR": {
        "country": "Jordan",
        "fillKey": "D",
        "GDP": "35826925774.65"
    },
    "JPN": {
        "country": "Japan",
        "fillKey": "F",
        "GDP": "4601461206885.08"
    },
    "KAZ": {
        "country": "Kazakhstan",
        "fillKey": "E",
        "GDP": "217872250221.41"
    },
    "KEN": {
        "country": "Kenya",
        "fillKey": "D",
        "GDP": "60936509777.96"
    },
    "KGZ": {
        "country": "Kyrgyz Republic",
        "fillKey": "C",
        "GDP": "7404412710.31"
    },
    "KHM": {
        "country": "Cambodia",
        "fillKey": "D",
        "GDP": "16777820332.71"
    },
    "KIR": {
        "country": "Kiribati",
        "fillKey": "B",
        "GDP": "166756805.48"
    },
    "KNA": {
        "country": "St. Kitts and Nevis",
        "fillKey": "B",
        "GDP": "852203083.88"
    },
    "KOR": {
        "country": "Korea, Rep.",
        "fillKey": "F",
        "GDP": "1410382988616.48"
    },
    "KSV": {
        "country": "Kosovo",
        "fillKey": "C",
        "GDP": "7386758657.29"
    },
    "KWT": {
        "country": "Kuwait",
        "fillKey": "E",
        "GDP": "163612438510.19"
    },
    "LAC": {
        "country": "Latin America & Caribbean (developing only)",
        "fillKey": "F",
        "GDP": "4845035083138.30"
    },
    "LAO": {
        "country": "Lao PDR",
        "fillKey": "D",
        "GDP": "11997062176.69"
    },
    "LBN": {
        "country": "Lebanon",
        "fillKey": "D",
        "GDP": "45730945273.63"
    },
    "LBR": {
        "country": "Liberia",
        "fillKey": "C",
        "GDP": "2013000000.00"
    },
    "LBY": {
        "country": "Libya",
        "fillKey": "D",
        "GDP": "41142722414.34"
    },
    "LCA": {
        "country": "St. Lucia",
        "fillKey": "C",
        "GDP": "1404430563.81"
    },
    "LIE": {
        "country": "Liechtenstein",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "LKA": {
        "country": "Sri Lanka",
        "fillKey": "D",
        "GDP": "78823610056.93"
    },
    "LSO": {
        "country": "Lesotho",
        "fillKey": "C",
        "GDP": "2181300505.86"
    },
    "LTU": {
        "country": "Lithuania",
        "fillKey": "D",
        "GDP": "48353937110.26"
    },
    "LUX": {
        "country": "Luxembourg",
        "fillKey": "D",
        "GDP": "64873963098.49"
    },
    "LVA": {
        "country": "Latvia",
        "fillKey": "D",
        "GDP": "31286809075.23"
    },
    "MAC": {
        "country": "Macao SAR, China",
        "fillKey": "D",
        "GDP": "55501734046.15"
    },
    "MAF": {
        "country": "St. Martin (French part)",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MAR": {
        "country": "Morocco",
        "fillKey": "E",
        "GDP": "110009040838.42"
    },
    "MCO": {
        "country": "Monaco",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MDA": {
        "country": "Moldova",
        "fillKey": "C",
        "GDP": "7962423551.54"
    },
    "MDG": {
        "country": "Madagascar",
        "fillKey": "D",
        "GDP": "10593147380.73"
    },
    "MDV": {
        "country": "Maldives",
        "fillKey": "C",
        "GDP": "3061829144.68"
    },
    "MEX": {
        "country": "Mexico",
        "fillKey": "F",
        "GDP": "1294689733233.03"
    },
    "MHL": {
        "country": "Marshall Islands",
        "fillKey": "B",
        "GDP": "186716625.75"
    },
    "MIC": {
        "country": "Middle income",
        "fillKey": "G",
        "GDP": "24748448400393.40"
    },
    "MKD": {
        "country": "Macedonia, FYR",
        "fillKey": "D",
        "GDP": "11323769141.48"
    },
    "MLI": {
        "country": "Mali",
        "fillKey": "D",
        "GDP": "12037229619.42"
    },
    "MLT": {
        "country": "Malta",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MMR": {
        "country": "Myanmar",
        "fillKey": "D",
        "GDP": "64330038664.73"
    },
    "MNE": {
        "country": "Montenegro",
        "fillKey": "C",
        "GDP": "4587928884.17"
    },
    "MNG": {
        "country": "Mongolia",
        "fillKey": "D",
        "GDP": "12015944336.55"
    },
    "MNP": {
        "country": "Northern Mariana Islands",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "MOZ": {
        "country": "Mozambique",
        "fillKey": "D",
        "GDP": "15938468562.50"
    },
    "MRT": {
        "country": "Mauritania",
        "fillKey": "C",
        "GDP": "5061180371.05"
    },
    "MUS": {
        "country": "Mauritius",
        "fillKey": "D",
        "GDP": "12630332836.95"
    },
    "MWI": {
        "country": "Malawi",
        "fillKey": "C",
        "GDP": "4258033615.30"
    },
    "MYS": {
        "country": "Malaysia",
        "fillKey": "E",
        "GDP": "338103822298.27"
    },
    "NAM": {
        "country": "Namibia",
        "fillKey": "D",
        "GDP": "12995241138.15"
    },
    "NCL": {
        "country": "New Caledonia",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "NER": {
        "country": "Niger",
        "fillKey": "C",
        "GDP": "8168695869.87"
    },
    "NGA": {
        "country": "Nigeria",
        "fillKey": "E",
        "GDP": "568508262377.80"
    },
    "NIC": {
        "country": "Nicaragua",
        "fillKey": "D",
        "GDP": "11805641286.80"
    },
    "NLD": {
        "country": "Netherlands",
        "fillKey": "E",
        "GDP": "879319321494.64"
    },
    "NOR": {
        "country": "Norway",
        "fillKey": "E",
        "GDP": "499817138323.20"
    },
    "NPL": {
        "country": "Nepal",
        "fillKey": "D",
        "GDP": "19769642122.58"
    },
    "NZL": {
        "country": "New Zealand",
        "fillKey": "E",
        "GDP": "199969858903.72"
    },
    "OMN": {
        "country": "Oman",
        "fillKey": "D",
        "GDP": "81796618985.70"
    },
    "PAK": {
        "country": "Pakistan",
        "fillKey": "E",
        "GDP": "243631917866.48"
    },
    "PAN": {
        "country": "Panama",
        "fillKey": "D",
        "GDP": "46212600000.00"
    },
    "PER": {
        "country": "Peru",
        "fillKey": "E",
        "GDP": "202596307719.12"
    },
    "PHL": {
        "country": "Philippines",
        "fillKey": "E",
        "GDP": "284777093019.07"
    },
    "PLW": {
        "country": "Palau",
        "fillKey": "B",
        "GDP": "250625562.79"
    },
    "PNG": {
        "country": "Papua New Guinea",
        "fillKey": "D",
        "GDP": "16928577232.47"
    },
    "POL": {
        "country": "Poland",
        "fillKey": "E",
        "GDP": "544966555714.06"
    },
    "PRI": {
        "country": "Puerto Rico",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "PRT": {
        "country": "Portugal",
        "fillKey": "E",
        "GDP": "230116912513.59"
    },
    "PRY": {
        "country": "Paraguay",
        "fillKey": "D",
        "GDP": "30880859579.51"
    },
    "PSS": {
        "country": "Pacific island small states",
        "fillKey": "C",
        "GDP": "8699784931.29"
    },
    "PYF": {
        "country": "French Polynesia",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "QAT": {
        "country": "Qatar",
        "fillKey": "E",
        "GDP": "210109065934.07"
    },
    "ROU": {
        "country": "Romania",
        "fillKey": "E",
        "GDP": "199043652215.45"
    },
    "RUS": {
        "country": "Russian Federation",
        "fillKey": "F",
        "GDP": "1860597922763.44"
    },
    "RWA": {
        "country": "Rwanda",
        "fillKey": "C",
        "GDP": "7890190336.75"
    },
    "SAS": {
        "country": "South Asia",
        "fillKey": "F",
        "GDP": "2588688024254.73"
    },
    "SAU": {
        "country": "Saudi Arabia",
        "fillKey": "E",
        "GDP": "753831733333.33"
    },
    "SDN": {
        "country": "Sudan",
        "fillKey": "D",
        "GDP": "73814947340.90"
    },
    "SEN": {
        "country": "Senegal",
        "fillKey": "D",
        "GDP": "15657551477.20"
    },
    "SGP": {
        "country": "Singapore",
        "fillKey": "E",
        "GDP": "307859758503.67"
    },
    "SLB": {
        "country": "Solomon Islands",
        "fillKey": "C",
        "GDP": "1158183053.76"
    },
    "SLE": {
        "country": "Sierra Leone",
        "fillKey": "C",
        "GDP": "4837512587.35"
    },
    "SLV": {
        "country": "El Salvador",
        "fillKey": "D",
        "GDP": "25163700000.00"
    },
    "SMR": {
        "country": "San Marino",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "SOM": {
        "country": "Somalia",
        "fillKey": "C",
        "GDP": "5707000000.00"
    },
    "SRB": {
        "country": "Serbia",
        "fillKey": "D",
        "GDP": "43866423166.94"
    },
    "SSD": {
        "country": "South Sudan",
        "fillKey": "D",
        "GDP": "13282084041.62"
    },
    "STP": {
        "country": "Sao Tome and Principe",
        "fillKey": "B",
        "GDP": "337413478.15"
    },
    "SUR": {
        "country": "Suriname",
        "fillKey": "C",
        "GDP": "5210303030.30"
    },
    "SVK": {
        "country": "Slovak Republic",
        "fillKey": "E",
        "GDP": "100248607784.10"
    },
    "SVN": {
        "country": "Slovenia",
        "fillKey": "D",
        "GDP": "49491440620.37"
    },
    "SWE": {
        "country": "Sweden",
        "fillKey": "E",
        "GDP": "571090480171.00"
    },
    "SWZ": {
        "country": "Swaziland",
        "fillKey": "C",
        "GDP": "4412891830.03"
    },
    "SXM": {
        "country": "Sint Maarten (Dutch part)",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "SYC": {
        "country": "Seychelles",
        "fillKey": "C",
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
        "fillKey": "D",
        "GDP": "13922224560.79"
    },
    "TGO": {
        "country": "Togo",
        "fillKey": "C",
        "GDP": "4518443476.63"
    },
    "THA": {
        "country": "Thailand",
        "fillKey": "E",
        "GDP": "404823952117.93"
    },
    "TJK": {
        "country": "Tajikistan",
        "fillKey": "C",
        "GDP": "9241627840.61"
    },
    "TKM": {
        "country": "Turkmenistan",
        "fillKey": "D",
        "GDP": "47931929824.56"
    },
    "TLS": {
        "country": "Timor-Leste",
        "fillKey": "C",
        "GDP": "1417000000.00"
    },
    "TON": {
        "country": "Tonga",
        "fillKey": "B",
        "GDP": "434380116.96"
    },
    "TTO": {
        "country": "Trinidad and Tobago",
        "fillKey": "D",
        "GDP": "28882663253.84"
    },
    "TUN": {
        "country": "Tunisia",
        "fillKey": "D",
        "GDP": "48612652412.09"
    },
    "TUR": {
        "country": "Turkey",
        "fillKey": "E",
        "GDP": "798429233036.33"
    },
    "TUV": {
        "country": "Tuvalu",
        "fillKey": "A",
        "GDP": "37859550.40"
    },
    "TZA": {
        "country": "Tanzania",
        "fillKey": "D",
        "GDP": "48056680982.15"
    },
    "UGA": {
        "country": "Uganda",
        "fillKey": "D",
        "GDP": "26998477288.85"
    },
    "UKR": {
        "country": "Ukraine",
        "fillKey": "E",
        "GDP": "131805126738.29"
    },
    "URY": {
        "country": "Uruguay",
        "fillKey": "D",
        "GDP": "57471030095.37"
    },
    "USA": {
        "country": "United States",
        "fillKey": "G",
        "GDP": "17419000000000.00"
    },
    "UZB": {
        "country": "Uzbekistan",
        "fillKey": "D",
        "GDP": "62643953021.76"
    },
    "VCT": {
        "country": "St. Vincent and the Grenadines",
        "fillKey": "B",
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
        "fillKey": "E",
        "GDP": "186204652922.26"
    },
    "VUT": {
        "country": "Vanuatu",
        "fillKey": "B",
        "GDP": "814954306.97"
    },
    "WSM": {
        "country": "Samoa",
        "fillKey": "B",
        "GDP": "800418989.62"
    },
    "YEM": {
        "country": "Yemen, Rep.",
        "fillKey": "No data",
        "GDP": "No data"
    },
    "ZAF": {
        "country": "South Africa",
        "fillKey": "E",
        "GDP": "350140810003.32"
    },
    "COD": {
        "country": "Congo, Dem. Rep.",
        "fillKey": "D",
        "GDP": "33121070959.39"
    },
    "ZMB": {
        "country": "Zambia",
        "fillKey": "D",
        "GDP": "27066230009.10"
    },
    "ZWE": {
        "country": "Zimbabwe",
        "fillKey": "D",
        "GDP": "14196912534.63"
    }
}
});