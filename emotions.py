
import operator
import indicoio

indicoio.config.api_key = '3fafdb2ab3bec0e02c9c5e4632ac15ab'

# store in var
senti = indicoio.emotion("Getting late for a meeting, need to run’, he said, as he slung his coat over the shoulder, and bounded out of the house. As he drove away, she came running down the stairs two at a time. ‘Wait, wait’, she said, but he had already left. Her mouth crumpled like used wrapping paper. ‘He forgot to give me a goodbye kiss’, she whispered in a voice that trembled under the weight of her hurt. She called him, ‘you left without giving me a kiss’, she said accusingly. ‘I am sorry sweetheart’, he said, his voice contrite. ‘It is okay’, she said, trying to be all grown up as she cut the call. She gulped down her breakfast morosely, wore her shoes, picked up her school bag and started to walk out of the door, her shoulders slumped. As she climbed down the steps, the car glided to a stop outside the house. He got out of the car. She ran to him, her whole face lit up like a Christmas tree. ‘I am sorry I forgot’, he said, as he picked her up and hugged her. She said nothing. Her jaw ached from smiling. Fifteen years later, no one would remember he was late for a meeting, but a little girl would never ever forget that her father drove all the way back home just to kiss her goodbye!")

# single example
print(senti)

maxSent = max(senti.items(), key=operator.itemgetter(1))[0]

print(maxSent)