import csv
import json


# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvfilepath, jsonfilepath):

    # create a dictionary
    data = {}

    # Open a csv reader called DictReader
    with open(csvfilepath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:

            # Assuming a column named 'No' to
            # be the primary key
            key = rows['code']
            data[key] = rows

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonfilepath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

# Driver Code


# Decide the two file paths according to your
# computer system
csvfilepath = r'data/other/statespics.csv'
jsonfilepath = r'frontend/layonui/src/data/stateseals.js'

# Call the make_json function
make_json(csvfilepath, jsonfilepath)
