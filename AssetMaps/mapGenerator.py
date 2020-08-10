from os import listdir
from os.path import isfile, join

mypath = "../assets/Fantasy_Icons/Weapons/500_weapons/"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

f = open("WeaponMap.tsx", "a")
f.write("const ArmorMap = [\n")
for image in onlyfiles:
    stringPath = mypath + image
    stringLine = "name: '{}', src:require('{}')"
    #stringLine.format(image,stringPath) 
    f.write('{')
    f.write(stringLine.format(image,stringPath))
    f.write("},\n")
f.write("]")
f.close()