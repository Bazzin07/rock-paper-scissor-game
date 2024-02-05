from bs4 import BeautifulSoup

with open("rps.html") as file:
    content = file.read()

rps = BeautifulSoup(content,"html.parser")

para = rps.find_all(name="p")

print(para)

for tag in para: 
    print(tag.getText())