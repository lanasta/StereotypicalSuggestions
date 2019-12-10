from pprint import pprint
import nltk
# nltk.download('averaged_perceptron_tagger')
# nltk.download('maxent_ne_chunker')
# nltk.download('words')
from collections import OrderedDict
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
from nltk.chunk import conlltags2tree, tree2conlltags
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer


# ex = "Viking Guy, aka Viking weeb.Nine times out ten is a metalhead, obsessed with Amon Amarth, or other Scandinavian metal bands. If he isn't a metalhead, he's just a generally neckbeardy history buff. Either way, he wears a mjolnir (Thor's hammer) pendant 24/7, knows all about 'Viking culture,' the Norse pantheon and sagas, and won't shut up about it. Long hair and beard are damn near a requirement.Source: Am into Viking/folk metal. And may be dating a guy with a mild case of this. And may have veered into this territory myself."
path = 'comments.txt'
unHandle = open(path,'r')
ex = unHandle.read()


def preprocess(sent):
    tokens = nltk.word_tokenize(sent)
    stop_words = set(stopwords.words('english'))
    tokens = [w for w in tokens if not w in stop_words]
    tokens = nltk.pos_tag(tokens)
    return tokens

def getNoun(tokens):
	dic = OrderedDict()
	nounList = []
	new_path = 'nounls.txt'
	handle = open(new_path,'w+')
	handle.write('[')
	porter = PorterStemmer()
	for token in tokens:
		if token[1] == 'NN':
			key = porter.stem(token[0].lower())
			if key in dic.keys():
				dic[key] += 1
			else:
				dic[key] = 1

	print("Now it is the noun part")
	ncount = 0;
	for key in dic.keys():
		if dic[key] > 0:
			curstring = "'"+key+"',"
			handle.write(curstring)
			print(key)
			ncount+=1

	print("count is ")
	print(ncount)
	
	# File to be write                    
	

	
	handle.write(']')	
	handle.close()
	return nounList


def getAdj(tokens):
	adjList = []
	dic = OrderedDict()
	new_path = 'adjls.txt'
	handle = open(new_path,'w+')
	handle.write('[')
	porter = PorterStemmer()
	for token in tokens:
		if token[1] == 'JJ':
			key = porter.stem(token[0].lower())
			if key in dic.keys():
				dic[key] += 1
			else:
				dic[key] = 1
	
	print("------")
	print("Now it is the Adj part")
	adjcount = 0;
	for key in dic.keys():
		if dic[key] > 0:
			print(key)
			curstring = "'"+key+"',"
			handle.write(curstring)
			adjcount+=1
		
	print("count is ")
	print(adjcount)
	handle.write(']')
	handle.close()
	return adjList

def main():
	tokens = preprocess(ex)
	nl = getNoun(tokens)
	adjl = getAdj(tokens)
	# print(nl)
	# print(adjl)

main()
