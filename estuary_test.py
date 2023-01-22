import requests
import ast

url = "https://api.estuary.tech/content/list"


payload={}
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer ESTf23e9f13-c25c-406b-a541-e6d3a8539de9ARY'
}


response = requests.request("GET", url, headers=headers, data=payload)


test = response.json()
print(test[0]["cid"])


# https://api.estuary.tech/gw/ipfs/YOUR_DESIRED_CID


