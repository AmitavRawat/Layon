import csv

with open('data/other/statespics.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row['code'], row['state_flag_url'])
