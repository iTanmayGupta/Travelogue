import flask
from flask import request, jsonify
import cohere
import requests
import urllib.request
import openai
from flask_cors import CORS


app = flask.Flask(__name__)
CORS(app, supports_credentials=True)

openai.api_key = "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"
co = cohere.Client('j6LxAsA6YIKALgllTH9x5k0QXs1fOsamHlP185V3')


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Travel Recommendation Backend Server</h1>
<p>A prototype API for creating Personalized Travel Itinerary.</p>'''


@app.route('/api/v1/generateImage', methods=['GET'])
def generateImage():
    args = request.args
    img_prompt = args.get("prompt")
    response = openai.Image.create(
        prompt=img_prompt,
        n=1,
        size="512x512"
    )
    return response["data"]


@app.route('/api/v1/getAllAccoms', methods=['GET'])
def getAllAccoms():
    accoms = {}
    url = "https://api.estuary.tech/content/list"

    payload = {}
    headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer EST3bc02e52-e966-4ac8-accf-06addc72a3a1ARY'
    }

    response = requests.request("GET", url, headers=headers, data=payload).json()
    for file_dict in response:
        if "itinerary_" in file_dict["name"]:
            uf = urllib.request.urlopen("https://api.estuary.tech/gw/ipfs/" + file_dict["cid"])
            html = uf.read()
            accoms[file_dict["name"]] = html
    return accoms


@app.route('/api/v1/getAllItinerary', methods=['GET'])
def getAllItinerary():
    itineraries = {}
    url = "https://api.estuary.tech/content/list"

    payload = {}
    headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ESTeb39710a-9bd0-4065-a7e1-d8ceb044896bARY'
    }

    response = requests.request("GET", url, headers=headers, data=payload).json()
    for file_dict in response:
        if "itinerary_" in file_dict["name"]:
            uf = urllib.request.urlopen("https://api.estuary.tech/gw/ipfs/" + file_dict["cid"])
            html = uf.read()
            itineraries[file_dict["name"]] = html
    return itineraries


@app.route('/api/v1/generateItinerary', methods=['POST'])
def generateItinerary():
    request_body = request.get_json()
    name = request_body['name']
    location = request_body['location']
    days = request_body['days']
    activities = request_body['activities']

    itinerary_prompt = f"""
This program will generate a travel itinerary given a location, days, and activities.
--
Location: Australia
Days: 10
Activities: Visit cultural landmarks and historic sites, Try a new adventure sport or activity, like paragliding or bungee jumping, Go shopping at traditional markets and shops, Try local cuisine and street food, Take a guided tour of the city or region.
Itinerary:

Day 1:
* Arrive in Sydney and check into your hotel.
* Visit the iconic Sydney Opera House and take a guided tour of the building.
* Walk around The Rocks, a historic neighborhood with cobbled streets and 19th-century buildings.
Day 2:
* Take a guided tour of the Sydney Harbour Bridge and try bungee jumping or bridge climbing.
* Visit the Australian Museum to learn about the country's Indigenous culture and history.
* Try some local street food in Darling Harbour.
Day 3:
* Take a day trip to the Blue Mountains and go paragliding or hang gliding.
* Visit the Three Sisters rock formation and take a guided tour of the area.
* Try some local cuisine at a restaurant in Katoomba.
Day 4:
* Take a train to Melbourne and check into your hotel.
* Visit the Melbourne Museum to learn about the city's history and culture.
* Go shopping at the Queen Victoria Market, a large traditional market with a wide range of products.
Day 5:
* Take a guided tour of the city and visit some of Melbourne's famous street art.
* Try some local street food in the laneways.
* Go paragliding or hang gliding in the Yarra Valley.
Day 6:
* Take a train to Brisbane and check into your hotel.
* Visit the Queensland Museum and learn about the state's history and culture.
* Go shopping at the South Bank Lifestyle Market, a traditional market with a wide range of products.
Day 7:
* Take a day trip to Moreton Island and try sandboarding or snorkeling.
* Visit the Tangalooma Wrecks and take a guided tour of the area.
* Try some local seafood at a restaurant in Tangalooma.
Day 8:
* Take a flight to Perth and check into your hotel.
* Visit the Western Australian Museum and learn about the state's history and culture.
* Go shopping at the Fremantle Markets, a traditional market with a wide range of products.
Day 9:
* Take a day trip to Rottnest Island and try snorkeling or scuba diving.
* Visit the Wadjemup Lighthouse and take a guided tour of the island.
* Try some local seafood at a restaurant in Rottnest Island.
Day 10:
* Take a flight back home.

Note: This itinerary is a rough guide and can be adjusted to suit your interests and budget. It is always recommended to check the opening hours of the places you want to visit, and book tickets in advance if possible to save time.
--
Location: South Korea
Days: 7
Activities: Budget activities
Itinerary: 

Day 1:
* Arrive in Seoul
* Check into a hotel in the city center
* Visit Gyeongbokgung Palace and the nearby National Museum of Korea
* Explore the bustling shopping and food district of Myeong-dong
* Try traditional Korean BBQ for dinner
Day 2:
* Take the subway to the historic neighborhood of Bukchon Hanok Village
* Visit the Changdeokgung Palace complex and its Secret Garden
* Take a stroll through Insadong, known for its traditional teahouses and art galleries
* Enjoy a performance of traditional Korean music and dance at the National Theater of Korea
Day 3:
* Take a day trip to the city of Suwon to visit the UNESCO World Heritage Site of Hwaseong Fortress
* Explore the Suwon Hwaseong Museum and the Suwon Traditional Market
* Return to Seoul and experience the nightlife in Hongdae, known for its bars and clubs
Day 4:
* Take a train to the city of Busan
* Visit the famous Haedong Yonggung Temple, located on the coast
* Explore the bustling streets of the Jagalchi Fish Market
* Visit the Busan Museum and the Busan Tower for a panoramic view of the city
Day 5:
* Take a trip to the scenic Gamcheon Culture Village
* Visit the Songdo Beach and the Songdo Skywalk for ocean views
* Explore the Taejongdae Resort Park and take a cable car ride for more coastal views
* Return to Busan for dinner and enjoy some of the city's famous seafood
Day 6:
* Return to Seoul
* Visit the famous Gyeongbokgung Palace and the nearby National Museum of Korea
* Visit the Namsan Tower, also known as the Seoul Tower, for a panoramic view of the city
* Enjoy a farewell dinner of traditional Korean cuisine
Day 7:
* Depart from Seoul

Note: This itinerary is a rough guide and can be adjusted to suit your interests and budget. It is always recommended to check the opening hours of the places you want to visit, and book tickets in advance if possible to save time.
--
Location: {location}
Days: {days}
Activities: """

    for item in activities:
        itinerary_prompt += item + ", "

    itinerary_prompt = itinerary_prompt[0:-2] + "\nItinerary\n"

    response2 = co.generate(
        model='command-xlarge-nightly',
        prompt=itinerary_prompt,
        max_tokens=800,
        temperature=0.6,
        stop_sequences=["--"])

    itinerary_text = response2.generations[0].text
    filepath = f'itinerary_{name}.txt'
    with open(filepath, 'w') as f:
        f.write(itinerary_text)

    uploadFile(filepath, f'itinerary_{name}')
    return response2.generations[0].text


def uploadFile(filepath, filename):
    url = "https://api.estuary.tech/content/add"

    payload = {}
    files = [
        ('data', (filename, open(filepath, 'r'), 'application/octet-stream'))
    ]
    headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ESTeb39710a-9bd0-4065-a7e1-d8ceb044896bARY'
    }

    response = requests.request("POST", url, headers=headers, data=payload, files=files)

    print(response.text)


@app.route('/api/v1/generateAccommodations', methods=['POST'])
def generateAccommodation():
    request_body = request.get_json()
    name = request_body['name']
    location = request_body['location']

    acc_prompt = f"""
This program will generate some accomodation options given a location.
--
Location: Australia
Accomodation: 

Budget-friendly:

Bounce Hostel Sydney - Sydney, New South Wales
Base Backpackers Brisbane - Brisbane, Queensland
The Capsule Hotel Melbourne - Melbourne, Victoria
Gilligan's Backpackers Hotel & Resort - Cairns, Queensland
The Pickled Parrot Backpackers - Hobart, Tasmania

Regular/Luxury:

The Langham, Sydney - Sydney, New South Wales
The Ritz-Carlton, Perth - Perth, Western Australia
The InterContinental Adelaide - Adelaide, South Australia
The Park Hyatt Melbourne - Melbourne, Victoria
The Hilton Surfers Paradise Hotel - Gold Coast, Queensland

Please note that these options may change based on the travel date and availability.

--
Location: South Korea
Accomodation: 

Budget-friendly:

Capsule Inn Myeongdong - Seoul
Hostel The Little Box - Busan
Seoul Capsule Guesthouse - Seoul
Arario Hostel - Jeju
Guesthouse Seoul - Seoul

Regular/Luxury:

InterContinental Seoul COEX - Seoul
The Shilla Seoul - Seoul
JW Marriott Hotel Seoul - Seoul
Lotte City Hotel Myeongdong - Seoul
Paradise City - Incheon

Please note that these options may change based on the travel date and availability.

--
Location: {location}
Accomodation: """

    response2 = co.generate(
        model='command-xlarge-nightly',
        prompt=acc_prompt,
        max_tokens=1000,
        temperature=0.6,
        stop_sequences=["--"])

    accomodation = response2.generations[0].text

    filepath = f'acc_{name}.txt'
    with open(filepath, 'w') as f:
        f.write(accomodation)
    uploadFile(filepath, f'acc_{name}')
    return response2.generations[0].text


if __name__ == "__main__":
    app.run()
