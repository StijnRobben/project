/**
* RichProperties.js
*
* Stijn Robben
* 10559558
*
*/

//When the user clicks on the random-button, 
//toggle between hiding and showing the dropdown content
function myDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// makes browser scroll down to charts (only works in Firefox)
function bottom() {
    document.getElementById( 'footer' ).scrollIntoView({block: "end", behavior: "smooth"});
};

// make worldmap
new Datamap({
  scope: 'world',
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      var country = geography.id
      var name = geography.properties.name
      window.name = name
      window.country = country
      barchart("Tele.txt", "Internet users per 100 people", "Users")
      scatter("Tele.txt", "Internet users", "Internet Users per 100 people", "Users")
      bottom();
  });
},
element: document.getElementById('container1'),
fills: {
 A: '#c6dbef',
 B: '#9ecae1',
 C: '#6baed6',
 D: '#4292c6',
 E: '#2171b5',
 F: '#08519c',
 G: '#08306b',
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
    "-99": {
        "country": "Somaliland",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ABW": {
        "country": "Aruba",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "AND": {
        "country": "Andorra",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "AFG": {
        "country": "Afghanistan",
        "fillKey": "A",
        "GDP": "633.57"
    },
    "AGO": {
        "country": "Angola",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ALB": {
        "country": "Albania",
        "fillKey": "C",
        "GDP": "4564.39"
    },
    "ARE": {
        "country": "United Arab Emirates",
        "fillKey": "F",
        "GDP": "43962.71"
    },
    "ARG": {
        "country": "Argentina",
        "fillKey": "D",
        "GDP": "12509.53"
    },
    "ARM": {
        "country": "Armenia",
        "fillKey": "B",
        "GDP": "3873.53"
    },
    "ASM": {
        "country": "American Samoa",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ATG": {
        "country": "Antigua and Barbuda",
        "fillKey": "D",
        "GDP": "13432.08"
    },
    "AUS": {
        "country": "Australia",
        "fillKey": "F",
        "GDP": "61979.90"
    },
    "AUT": {
        "country": "Austria",
        "fillKey": "F",
        "GDP": "51122.43"
    },
    "AZE": {
        "country": "Azerbaijan",
        "fillKey": "C",
        "GDP": "7886.46"
    },
    "BDI": {
        "country": "Burundi",
        "fillKey": "A",
        "GDP": "286.00"
    },
    "BEL": {
        "country": "Belgium",
        "fillKey": "F",
        "GDP": "47327.62"
    },
    "BEN": {
        "country": "Benin",
        "fillKey": "A",
        "GDP": "903.46"
    },
    "BFA": {
        "country": "Burkina Faso",
        "fillKey": "A",
        "GDP": "713.06"
    },
    "BGD": {
        "country": "Bangladesh",
        "fillKey": "A",
        "GDP": "1086.81"
    },
    "BGR": {
        "country": "Bulgaria",
        "fillKey": "C",
        "GDP": "7851.27"
    },
    "BHR": {
        "country": "Bahrain",
        "fillKey": "E",
        "GDP": "24855.22"
    },
    "BHS": {
        "country": "Bahamas, The",
        "fillKey": "E",
        "GDP": "22217.49"
    },
    "BIH": {
        "country": "Bosnia and Herzegovina",
        "fillKey": "C",
        "GDP": "4851.66"
    },
    "BLR": {
        "country": "Belarus",
        "fillKey": "D",
        "GDP": "8040.05"
    },
    "BLZ": {
        "country": "Belize",
        "fillKey": "C",
        "GDP": "4831.18"
    },
    "BMU": {
        "country": "Bermuda",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "BOL": {
        "country": "Bolivia",
        "fillKey": "B",
        "GDP": "3124.08"
    },
    "BRA": {
        "country": "Brazil",
        "fillKey": "D",
        "GDP": "11726.81"
    },
    "BRB": {
        "country": "Barbados",
        "fillKey": "D",
        "GDP": "15366.29"
    },
    "BRN": {
        "country": "Brunei Darussalam",
        "fillKey": "F",
        "GDP": "40979.64"
    },
    "BTN": {
        "country": "Bhutan",
        "fillKey": "B",
        "GDP": "2560.50"
    },
    "BWA": {
        "country": "Botswana",
        "fillKey": "C",
        "GDP": "7123.34"
    },
    "CAF": {
        "country": "Central African Republic",
        "fillKey": "A",
        "GDP": "358.54"
    },
    "CAN": {
        "country": "Canada",
        "fillKey": "F",
        "GDP": "50230.81"
    },
    "CHE": {
        "country": "Switzerland",
        "fillKey": "G",
        "GDP": "85616.56"
    },
    "CHI": {
        "country": "Channel Islands",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "CHL": {
        "country": "Chile",
        "fillKey": "D",
        "GDP": "14528.33"
    },
    "CHN": {
        "country": "China",
        "fillKey": "C",
        "GDP": "7590.02"
    },
    "CIV": {
        "country": "Cote d'Ivoire",
        "fillKey": "A",
        "GDP": "1545.94"
    },
    "CMR": {
        "country": "Cameroon",
        "fillKey": "A",
        "GDP": "1407.40"
    },
    "COG": {
        "country": "Congo, Rep.",
        "fillKey": "B",
        "GDP": "3147.07"
    },
    "COL": {
        "country": "Colombia",
        "fillKey": "C",
        "GDP": "7903.93"
    },
    "COM": {
        "country": "Comoros",
        "fillKey": "A",
        "GDP": "810.08"
    },
    "CPV": {
        "country": "Cabo Verde",
        "fillKey": "B",
        "GDP": "3641.11"
    },
    "CRI": {
        "country": "Costa Rica",
        "fillKey": "D",
        "GDP": "10415.44"
    },
    "CUB": {
        "country": "Cuba",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "CUW": {
        "country": "Curacao",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "CYM": {
        "country": "Cayman Islands",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "CYP": {
        "country": "Cyprus",
        "fillKey": "E",
        "GDP": "27194.39"
    },
    "CZE": {
        "country": "Czech Republic",
        "fillKey": "E",
        "GDP": "19502.42"
    },
    "DEU": {
        "country": "Germany",
        "fillKey": "F",
        "GDP": "47773.94"
    },
    "DJI": {
        "country": "Djibouti",
        "fillKey": "A",
        "GDP": "1813.60"
    },
    "DMA": {
        "country": "Dominica",
        "fillKey": "C",
        "GDP": "7244.50"
    },
    "DNK": {
        "country": "Denmark",
        "fillKey": "F",
        "GDP": "60718.39"
    },
    "DOM": {
        "country": "Dominican Republic",
        "fillKey": "C",
        "GDP": "6163.58"
    },
    "DZA": {
        "country": "Algeria",
        "fillKey": "C",
        "GDP": "5484.07"
    },
    "ECU": {
        "country": "Ecuador",
        "fillKey": "C",
        "GDP": "6345.84"
    },
    "EGY": {
        "country": "Egypt, Arab Rep.",
        "fillKey": "B",
        "GDP": "3365.71"
    },
    "ESH": {
        "country": "Western Sahara",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ERI": {
        "country": "Eritrea",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ESP": {
        "country": "Spain",
        "fillKey": "E",
        "GDP": "29721.60"
    },
    "EST": {
        "country": "Estonia",
        "fillKey": "E",
        "GDP": "20147.78"
    },
    "ETH": {
        "country": "Ethiopia",
        "fillKey": "A",
        "GDP": "573.57"
    },
    "FIN": {
        "country": "Finland",
        "fillKey": "F",
        "GDP": "49842.71"
    },
    "FJI": {
        "country": "Fiji",
        "fillKey": "C",
        "GDP": "5112.32"
    },
    "FRA": {
        "country": "France",
        "fillKey": "F",
        "GDP": "42725.74"
    },
    "FRO": {
        "country": "Faroe Islands",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "FSM": {
        "country": "Micronesia, Fed. Sts.",
        "fillKey": "B",
        "GDP": "3057.09"
    },
    "GAB": {
        "country": "Gabon",
        "fillKey": "D",
        "GDP": "10772.06"
    },
    "GBR": {
        "country": "United Kingdom",
        "fillKey": "F",
        "GDP": "46296.98"
    },
    "GEO": {
        "country": "Georgia",
        "fillKey": "C",
        "GDP": "4435.19"
    },
    "GHA": {
        "country": "Ghana",
        "fillKey": "A",
        "GDP": "1441.64"
    },
    "GIN": {
        "country": "Guinea",
        "fillKey": "A",
        "GDP": "539.62"
    },
    "GMB": {
        "country": "Gambia, The",
        "fillKey": "A",
        "GDP": "441.29"
    },
    "GNB": {
        "country": "Guinea-Bissau",
        "fillKey": "A",
        "GDP": "567.82"
    },
    "GNQ": {
        "country": "Equatorial Guinea",
        "fillKey": "E",
        "GDP": "18918.28"
    },
    "GRC": {
        "country": "Greece",
        "fillKey": "E",
        "GDP": "21672.67"
    },
    "GRD": {
        "country": "Grenada",
        "fillKey": "D",
        "GDP": "8573.69"
    },
    "GRL": {
        "country": "Greenland",
        "fillKey": "F",
        "GDP": "43364.88"
    },
    "GTM": {
        "country": "Guatemala",
        "fillKey": "B",
        "GDP": "3673.14"
    },
    "GUF": {
        "country": "French Guiana",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "GUM": {
        "country": "Guam",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "GUY": {
        "country": "Guyana",
        "fillKey": "C",
        "GDP": "4053.90"
    },
    "HKG": {
        "country": "Hong Kong SAR, China",
        "fillKey": "F",
        "GDP": "40169.54"
    },
    "HND": {
        "country": "Honduras",
        "fillKey": "B",
        "GDP": "2434.83"
    },
    "HRV": {
        "country": "Croatia",
        "fillKey": "D",
        "GDP": "13475.26"
    },
    "HTI": {
        "country": "Haiti",
        "fillKey": "A",
        "GDP": "824.16"
    },
    "HUN": {
        "country": "Hungary",
        "fillKey": "D",
        "GDP": "14026.57"
    },
    "IDN": {
        "country": "Indonesia",
        "fillKey": "B",
        "GDP": "3491.93"
    },
    "IMN": {
        "country": "Isle of Man",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "IND": {
        "country": "India",
        "fillKey": "A",
        "GDP": "1581.51"
    },
    "IRL": {
        "country": "Ireland",
        "fillKey": "F",
        "GDP": "54339.32"
    },
    "IRN": {
        "country": "Iran, Islamic Rep.",
        "fillKey": "C",
        "GDP": "5442.87"
    },
    "IRQ": {
        "country": "Iraq",
        "fillKey": "C",
        "GDP": "6420.14"
    },
    "ISL": {
        "country": "Iceland",
        "fillKey": "F",
        "GDP": "52036.73"
    },
    "ISR": {
        "country": "Israel",
        "fillKey": "F",
        "GDP": "37206.18"
    },
    "ITA": {
        "country": "Italy",
        "fillKey": "F",
        "GDP": "35222.76"
    },
    "JAM": {
        "country": "Jamaica",
        "fillKey": "C",
        "GDP": "5106.08"
    },
    "JOR": {
        "country": "Jordan",
        "fillKey": "C",
        "GDP": "5422.57"
    },
    "JPN": {
        "country": "Japan",
        "fillKey": "F",
        "GDP": "36194.42"
    },
    "KAZ": {
        "country": "Kazakhstan",
        "fillKey": "D",
        "GDP": "12601.62"
    },
    "KEN": {
        "country": "Kenya",
        "fillKey": "A",
        "GDP": "1358.26"
    },
    "KGZ": {
        "country": "Kyrgyz Republic",
        "fillKey": "A",
        "GDP": "1268.86"
    },
    "KHM": {
        "country": "Cambodia",
        "fillKey": "A",
        "GDP": "1094.58"
    },
    "KIR": {
        "country": "Kiribati",
        "fillKey": "A",
        "GDP": "1509.52"
    },
    "KNA": {
        "country": "St. Kitts and Nevis",
        "fillKey": "D",
        "GDP": "15510.39"
    },
    "KOR": {
        "country": "Korea, Rep.",
        "fillKey": "E",
        "GDP": "27970.50"
    },
    "KSV": {
        "country": "Kosovo",
        "fillKey": "C",
        "GDP": "4051.65"
    },
    "KWT": {
        "country": "Kuwait",
        "fillKey": "F",
        "GDP": "43593.70"
    },
    "LBN": {
        "country": "Lebanon",
        "fillKey": "D",
        "GDP": "10057.89"
    },
    "LBR": {
        "country": "Liberia",
        "fillKey": "A",
        "GDP": "457.86"
    },
    "LBY": {
        "country": "Libya",
        "fillKey": "C",
        "GDP": "6573.39"
    },
    "LCA": {
        "country": "St. Lucia",
        "fillKey": "C",
        "GDP": "7647.53"
    },
    "LIE": {
        "country": "Liechtenstein",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "LKA": {
        "country": "Sri Lanka",
        "fillKey": "B",
        "GDP": "3794.89"
    },
    "LSO": {
        "country": "Lesotho",
        "fillKey": "A",
        "GDP": "1034.19"
    },
    "LTU": {
        "country": "Lithuania",
        "fillKey": "E",
        "GDP": "16489.73"
    },
    "LUX": {
        "country": "Luxembourg",
        "fillKey": "G",
        "GDP": "116612.88"
    },
    "LAO": {
        "country": "Laos",
        "fillKey": "A",
        "GDP": "1793.47"
    },
    "LVA": {
        "country": "Latvia",
        "fillKey": "D",
        "GDP": "15692.19"
    },
    "MAC": {
        "country": "Macao SAR, China",
        "fillKey": "G",
        "GDP": "96038.05"
    },
    "MAF": {
        "country": "St. Martin (French part)",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "MAR": {
        "country": "Morocco",
        "fillKey": "B",
        "GDP": "3190.31"
    },
    "MCO": {
        "country": "Monaco",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "MDA": {
        "country": "Moldova",
        "fillKey": "B",
        "GDP": "2238.90"
    },
    "MDG": {
        "country": "Madagascar",
        "fillKey": "A",
        "GDP": "449.40"
    },
    "MDV": {
        "country": "Maldives",
        "fillKey": "C",
        "GDP": "7635.48"
    },
    "MEX": {
        "country": "Mexico",
        "fillKey": "D",
        "GDP": "10325.65"
    },
    "MHL": {
        "country": "Marshall Islands",
        "fillKey": "B",
        "GDP": "3529.75"
    },
    "MKD": {
        "country": "Macedonia, FYR",
        "fillKey": "C",
        "GDP": "5455.59"
    },
    "MLI": {
        "country": "Mali",
        "fillKey": "A",
        "GDP": "704.51"
    },
    "MLT": {
        "country": "Malta",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "MMR": {
        "country": "Myanmar",
        "fillKey": "A",
        "GDP": "1203.84"
    },
    "MNE": {
        "country": "Montenegro",
        "fillKey": "C",
        "GDP": "7378.35"
    },
    "MNG": {
        "country": "Mongolia",
        "fillKey": "C",
        "GDP": "4129.37"
    },
    "MNP": {
        "country": "Northern Mariana Islands",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "MOZ": {
        "country": "Mozambique",
        "fillKey": "A",
        "GDP": "585.62"
    },
    "MRT": {
        "country": "Mauritania",
        "fillKey": "A",
        "GDP": "1274.98"
    },
    "MUS": {
        "country": "Mauritius",
        "fillKey": "D",
        "GDP": "10016.65"
    },
    "MWI": {
        "country": "Malawi",
        "fillKey": "A",
        "GDP": "255.04"
    },
    "MYS": {
        "country": "Malaysia",
        "fillKey": "D",
        "GDP": "11307.06"
    },
    "NAC": {
        "country": "North America",
        "fillKey": "F",
        "GDP": "54194.61"
    },
    "NAM": {
        "country": "Namibia",
        "fillKey": "C",
        "GDP": "5408.24"
    },
    "NCL": {
        "country": "New Caledonia",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "NER": {
        "country": "Niger",
        "fillKey": "A",
        "GDP": "427.37"
    },
    "NGA": {
        "country": "Nigeria",
        "fillKey": "B",
        "GDP": "3203.30"
    },
    "NIC": {
        "country": "Nicaragua",
        "fillKey": "A",
        "GDP": "1963.05"
    },
    "NLD": {
        "country": "Netherlands",
        "fillKey": "F",
        "GDP": "52138.68"
    },
    "NOR": {
        "country": "Norway",
        "fillKey": "G",
        "GDP": "97299.64"
    },
    "NPL": {
        "country": "Nepal",
        "fillKey": "A",
        "GDP": "701.68"
    },
    "NZL": {
        "country": "New Zealand",
        "fillKey": "F",
        "GDP": "44342.16"
    },
    "OMN": {
        "country": "Oman",
        "fillKey": "E",
        "GDP": "19309.61"
    },
    "PAK": {
        "country": "Pakistan",
        "fillKey": "A",
        "GDP": "1316.61"
    },
    "PAN": {
        "country": "Panama",
        "fillKey": "D",
        "GDP": "11948.85"
    },
    "PER": {
        "country": "Peru",
        "fillKey": "C",
        "GDP": "6541.03"
    },
    "PHL": {
        "country": "Philippines",
        "fillKey": "B",
        "GDP": "2872.51"
    },
    "PLW": {
        "country": "Palau",
        "fillKey": "D",
        "GDP": "11879.68"
    },
    "PNG": {
        "country": "Papua New Guinea",
        "fillKey": "B",
        "GDP": "2268.16"
    },
    "POL": {
        "country": "Poland",
        "fillKey": "D",
        "GDP": "14336.80"
    },
    "PRI": {
        "country": "Puerto Rico",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "PRK": {
        "country": "Korea, Dem. People's Rep.",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "PRT": {
        "country": "Portugal",
        "fillKey": "E",
        "GDP": "22124.37"
    },
    "PRY": {
        "country": "Paraguay",
        "fillKey": "C",
        "GDP": "4712.82"
    },
    "PSS": {
        "country": "Pacific island small states",
        "fillKey": "B",
        "GDP": "3760.71"
    },
    "PYF": {
        "country": "French Polynesia",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "QAT": {
        "country": "Qatar",
        "fillKey": "G",
        "GDP": "96732.40"
    },
    "ROU": {
        "country": "Romania",
        "fillKey": "D",
        "GDP": "10000.00"
    },
    "RUS": {
        "country": "Russian Federation",
        "fillKey": "D",
        "GDP": "12735.92"
    },
    "RWA": {
        "country": "Rwanda",
        "fillKey": "A",
        "GDP": "695.69"
    },
    "SAS": {
        "country": "South Asia",
        "fillKey": "A",
        "GDP": "1504.04"
    },
    "SAU": {
        "country": "Saudi Arabia",
        "fillKey": "E",
        "GDP": "24406.48"
    },
    "SDN": {
        "country": "Sudan",
        "fillKey": "A",
        "GDP": "1875.84"
    },
    "SEN": {
        "country": "Senegal",
        "fillKey": "A",
        "GDP": "1067.13"
    },
    "SGP": {
        "country": "Singapore",
        "fillKey": "F",
        "GDP": "56284.33"
    },
    "SLB": {
        "country": "Solomon Islands",
        "fillKey": "B",
        "GDP": "2024.19"
    },
    "SLE": {
        "country": "Sierra Leone",
        "fillKey": "A",
        "GDP": "765.96"
    },
    "SLV": {
        "country": "El Salvador",
        "fillKey": "C",
        "GDP": "4119.99"
    },
    "SMR": {
        "country": "San Marino",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "SOM": {
        "country": "Somalia",
        "fillKey": "A",
        "GDP": "542.62"
    },
    "SRB": {
        "country": "Serbia",
        "fillKey": "C",
        "GDP": "6152.92"
    },
    "SSD": {
        "country": "South Sudan",
        "fillKey": "A",
        "GDP": "1115.09"
    },
    "STP": {
        "country": "Sao Tome and Principe",
        "fillKey": "A",
        "GDP": "1810.72"
    },
    "SUR": {
        "country": "Suriname",
        "fillKey": "D",
        "GDP": "9680.12"
    },
    "SVK": {
        "country": "Slovak Republic",
        "fillKey": "E",
        "GDP": "18500.66"
    },
    "SVN": {
        "country": "Slovenia",
        "fillKey": "E",
        "GDP": "24001.90"
    },
    "SWE": {
        "country": "Sweden",
        "fillKey": "F",
        "GDP": "58898.93"
    },
    "SWZ": {
        "country": "Swaziland",
        "fillKey": "B",
        "GDP": "3477.15"
    },
    "SXM": {
        "country": "Sint Maarten (Dutch part)",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "SYC": {
        "country": "Seychelles",
        "fillKey": "D",
        "GDP": "15564.64"
    },
    "SYR": {
        "country": "Syrian Arab Republic",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "TCD": {
        "country": "Chad",
        "fillKey": "A",
        "GDP": "1024.67"
    },
    "TGO": {
        "country": "Togo",
        "fillKey": "A",
        "GDP": "635.04"
    },
    "THA": {
        "country": "Thailand",
        "fillKey": "C",
        "GDP": "5977.38"
    },
    "TJK": {
        "country": "Tajikistan",
        "fillKey": "A",
        "GDP": "1114.01"
    },
    "TKM": {
        "country": "Turkmenistan",
        "fillKey": "D",
        "GDP": "9031.51"
    },
    "TLS": {
        "country": "Timor-Leste",
        "fillKey": "A",
        "GDP": "1169.04"
    },
    "TON": {
        "country": "Tonga",
        "fillKey": "C",
        "GDP": "4113.99"
    },
    "TTO": {
        "country": "Trinidad and Tobago",
        "fillKey": "E",
        "GDP": "21323.75"
    },
    "TUN": {
        "country": "Tunisia",
        "fillKey": "C",
        "GDP": "4420.70"
    },
    "TUR": {
        "country": "Turkey",
        "fillKey": "D",
        "GDP": "10515.01"
    },
    "TWN": {
        "country": "Taiwan",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "TUV": {
        "country": "Tuvalu",
        "fillKey": "B",
        "GDP": "3826.90"
    },
    "TZA": {
        "country": "Tanzania",
        "fillKey": "A",
        "GDP": "955.14"
    },
    "UGA": {
        "country": "Uganda",
        "fillKey": "A",
        "GDP": "714.57"
    },
    "UKR": {
        "country": "Ukraine",
        "fillKey": "B",
        "GDP": "3082.46"
    },
    "URY": {
        "country": "Uruguay",
        "fillKey": "E",
        "GDP": "16806.77"
    },
    "USA": {
        "country": "United States",
        "fillKey": "F",
        "GDP": "54629.50"
    },
    "UZB": {
        "country": "Uzbekistan",
        "fillKey": "B",
        "GDP": "2036.69"
    },
    "VCT": {
        "country": "St. Vincent and the Grenadines",
        "fillKey": "C",
        "GDP": "6668.89"
    },
    "VEN": {
        "country": "Venezuela, RB",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "VIR": {
        "country": "Virgin Islands (U.S.)",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "VNM": {
        "country": "Vietnam",
        "fillKey": "B",
        "GDP": "2052.32"
    },
    "VUT": {
        "country": "Vanuatu",
        "fillKey": "B",
        "GDP": "3147.96"
    },
    "WSM": {
        "country": "Samoa",
        "fillKey": "C",
        "GDP": "4172.22"
    },
    "YEM": {
        "country": "Yemen, Rep.",
        "fillKey": "No Data",
        "GDP": "No Data"
    },
    "ZAF": {
        "country": "South Africa",
        "fillKey": "C",
        "GDP": "6483.85"
    },
    "COD": {
        "country": "Congo, Dem. Rep.",
        "fillKey": "A",
        "GDP": "442.34"
    },
    "ZMB": {
        "country": "Zambia",
        "fillKey": "A",
        "GDP": "1721.62"
    },
    "ZWE": {
        "country": "Zimbabwe",
        "fillKey": "A",
        "GDP": "931.20"
    }
}
});