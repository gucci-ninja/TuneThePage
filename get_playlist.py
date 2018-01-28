import requests
from emotions import getMax

def get_playlist():
    emotion = getMax()
    headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BQAawDQpEsHRfWmfQAS2rBICU7fomzo4kxe2Hc2W0JP8KP9I_r4zo_3vfy62j_AiRgh5_ax9skkrGln0YXO5ndRx3j327SMKQgUKEXLMJhHfhxTuU-4oklNGBDlRkZ71qdXNVryo4WJHTBa6iEZsIqjOJfRmu6eMQA-bflvbp_pYDE0Tr49RVCbHIYVJQy5Xu4EGvJtdZ-Q590B-T13T-ao',
    }

    if (emotion == "joy"):
        response = requests.get("https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DXdPec7aLTmlC", headers = headers)
    elif (emotion == "anger"):
        response = requests.get("https://api.spotify.com/v1/users/spotify/playlists/5s7Sp5OZsw981I2OkQmyrz", headers = headers)
    elif (emotion == "fear"):
        response = requests.get("https://api.spotify.com/v1/users/spotify/playlists/5fnM0FdCpinIGWnGGPLkVG", headers = headers)
    elif (emotion == "sadness"):
        response = requests.get("https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWVV27DiNWxkR", headers = headers)
    elif (emotion == "surprise"):
        response = requests.get("https://api.spotify.com/v1/users/spotify/playlists/17KsY3IOMquuLpi1h6bk9j", headers = headers)
    return response
