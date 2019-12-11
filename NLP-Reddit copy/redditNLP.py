import requests
import requests.auth



def getToken():
	client_auth = requests.auth.HTTPBasicAuth('MqxJ21GxbWSnEQ', 'zE_d0Yd7BuBis840VwLGpLbCHfg')
	post_data = {"grant_type": "password", "username": "kieran1-", "password": "reddit"}
	headers = {"User-Agent": "ChangeMeClient/0.1 by YourUsername"}
	response = requests.post("https://www.reddit.com/api/v1/access_token", auth=client_auth, data=post_data, headers=headers)
	return response.json()
	
def useToken(token):
	headers = {"Authorization": "bearer "+token, "User-Agent": "ChangeMeClient/0.1 by YourUsername"}
	response = requests.get("https://oauth.reddit.com/comments/4n0mvq/", headers=headers)
	return response.json()

def getComment(token,url):
	headers = {"Authorization": "bearer "+token, "User-Agent": "ChangeMeClient/0.1 by YourUsername"}
	response = requests.get("https://oauth.reddit.com/r/AskReddit/comments/4n0mvq/men_of_reddit_what_male_stereotype_do_you_dislike/"+url, headers=headers)
	return response.json()
	
	

def iterativeTest():
	token = getToken()['access_token']
	# result = useToken(token)[1]['data']['children']	
	comments = []
	path = 'reddit-comments.txt'
	unHandle = open(path,'r')
	data = unHandle.read()
	unHandle.close()

	new_path = 'comments.txt'
	handle = open(new_path,'w+')


	children = data.strip('][').split(',\n  ')
	count = 0
	for child in children:
		count+=1
		if count % 10 == 0:
			print(count)
		# if count > 20:
		# 	break
		try:
			child = child.strip('\'')
			# cur = getComment(token,child)[1]['data']['children'][0]['data']['body']
			for i in range(20):
				cur = getComment(token,child)[1]['data']['children'][i]['data']['body']
				print(cur)
				handle.write(cur)
			# comments.append(cur)
		except Exception as e:
			print(e)
	# print(comments)
	handle.close()
	return comments

def test():
	token = getToken()['access_token']
	result = useToken(token)[1]['data']
	print(result)

def test2():
	child = 'd41562o'
	token = getToken()['access_token']
	result = getComment(token,child)[1]['data']['children'][0]['data']['body']
	print(result)
	
test()
# test2()
# iterativeTest()
