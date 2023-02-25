import csv

with open('layoff_city_final.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

date_dict = {}

state_abbreviations = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
    "Washington, D.C.": "DC"
}


for i in data:
	if i[-1].isnumeric():
		date_key = i[0][0:3] + i[1]

		if(date_key not in date_dict):
			date_dict[date_key] = {}

		abbr = state_abbreviations[i[2]]

		if(abbr not in date_dict[date_key]):
			date_dict[date_key][abbr] = {"layoffs": int(i[-1]), "cities": [{"name": i[3], "layoffs": int(i[-1])}]}
		else:
			date_dict[date_key][abbr]["layoffs"] += int(i[-1])

			city_to_find = i[3]
			count = 0
			found = False

			for j in date_dict[date_key][abbr]["cities"]:
				if(j["name"] == city_to_find):
					found = True
					break

				count += 1

			if(found):
				date_dict[date_key][abbr]["cities"][count]["layoffs"] += int(i[-1])
			else:
				date_dict[date_key][abbr]["cities"].append({"name": i[3], "layoffs": int(i[-1])})

print(date_dict)
				


