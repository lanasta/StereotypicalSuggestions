import re

def parseTxt():
	path = 'male.txt'
	unHandle = open(path,'r')
	data = unHandle.read()
	pattern = "(?<='body': ').*?(?=')"
	res = re.findall(pattern,data,0)

	new_path = 'comments.txt'
	handle = open(new_path,'w+')
	for comment in res:
		handle.write(comment)
		handle.write('\n')
	unHandle.close()

parseTxt()