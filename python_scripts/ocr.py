from __future__ import print_function
from pymongo import MongoClient

client = MongoClient()
db = client.students

try:
    import Image
except ImportError:
    from PIL import Image
import pytesseract
import pytesseract

data = pytesseract.image_to_string(Image.open('test1.png')).split()
ascii_data = [a.encode('ascii','ignore') for a in data]
print(ascii_data)
while(ascii_data):
	in_data = db.data.insert_one({"name":ascii_data.pop(0),"surname": ascii_data.pop(0), "school": ascii_data.pop(0), "marks": ascii_data.pop(0)})
	print(in_data.inserted_id)
