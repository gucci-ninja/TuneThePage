import requests
from emotions import getMax

def get_playlist():
    emotion = getMax()
    headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BQAawDQpEsHRfWmfQAS2rBICU7fomzo4kxe2Hc2W0JP8KP9I_r4zo_3vfy62j_AiRgh5_ax9skkrGln0YXO5ndRx3j327SMKQgUKEXLMJhHfhxTuU-4oklNGBDlRkZ71qdXNVryo4WJHTBa6iEZsIqjOJfRmu6eMQA-bflvbp_pYDE0Tr49RVCbHIYVJQy5Xu4EGvJtdZ-Q590B-T13T-ao',
    }

    url = ""

    if (emotion == "joy"):
        url = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" 
    elif (emotion == "anger"):
        url = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:5s7Sp5OZsw981I2OkQmyrz"
    elif (emotion == "fear"):
        url = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:5fnM0FdCpinIGWnGGPLkVG"
    elif (emotion == "sadness"):
        url = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWVV27DiNWxkR"
    elif (emotion == "surprise"):
        url = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:17KsY3IOMquuLpi1h6bk9j"

    return url



