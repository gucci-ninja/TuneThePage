import json

## Read text file
with open("books/excerpt.txt") as f:
    content = f.readlines()
## Save as json file

max_lines = 20

chunk = ""

json_array = []

index = 0


for i in content:
    if (index <= max_lines):
        chunk += i
        index+=1
    elif (index > max_lines):
        json_array.append(chunk)
        index = 0
        chunk = i

print(len(json_array))
    
with open("books/excerpt.json", "w") as o:
    json.dump(json_array, o)
