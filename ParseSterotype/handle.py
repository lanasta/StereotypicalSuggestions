def parseFile():
	path = 'file.txt'
	unHandle = open(path,'r')
	data = unHandle.read()

	# Lower case
	data = data.lower();
	newdata = ""
	print(newdata)
	for c in data:

		if c.isalpha() or c.isspace() or c == "-":
			# print(c,  end = "")
			if(c!="\n"):
				newdata = newdata + c
		else:
			continue

	mylist = newdata.split(" ")
	newlist = []
	for m in mylist:
		if len(m) != 0:
			if(m != "traits" and m != "checked" and m != "bank" and m != "order"):
				newlist.append(m)

	print(newlist)

	# Remove all things other than " " " \n" letter

	# print()

	new_path = 'handle.txt'
	handle = open(new_path,'w')

	handle.write(newdata)


	unHandle.close()
	handle.close()

def parseJson():
	path = 'json.txt'
	unHandle = open(path,'r')
	data = unHandle.read()
	newdata = ""
	for c in data:
		if c == "'":
			newdata = newdata + "\""
		else:
			newdata = newdata + c

	new_path = 'handle.txt'
	handle = open(new_path,'w')

	handle.write(newdata)


	unHandle.close()
	handle.close()


parseJson()