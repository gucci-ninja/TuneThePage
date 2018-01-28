json = 
[

        ['Getting late for a meeting, need to run’, he said, as he slung his coat over the shoulder, and bounded out of the house. As he drove away, she came running down the stairs two at a time. ‘Wait, wait’, she said, but he had already left. Her mouth crumpled like used wrapping paper. ‘He forgot to give me a goodbye kiss’, she whispered in a voice that trembled under the weight of her hurt. She called him, ‘you left without giving me a kiss’, she said accusingly. ‘I am sorry sweetheart’, he said, his voice contrite. ‘It is okay’, she said, trying to be all grown up as she cut the call. She gulped down her breakfast morosely, wore her shoes, picked up her school bag and started to walk out of the door, her shoulders slumped. As she climbed down the steps, the car glided to a stop outside the house. He got out of the car. She ran to him, her whole face lit up like a Christmas tree. ‘I am sorry I forgot’, he said, as he picked her up and hugged her. She said nothing. Her jaw ached from smiling. Fifteen years later, no one would remember he was late for a meeting, but a little girl would never ever forget that her father drove all the way back home just to kiss her goodbye!', '37i9dQZF1DWVV27DiNWxkR'], 
        ['She giggled a lot in the theater but we had a good time. We quit our jobs and moved into a banana peel yellow Winnebago. We drove and lived for a long time in big places. A Midwest town enveloped us. We started a business, Wreckords and More. Our daughter was beautiful. She looked like Audrey Hepburn at ten years old.  I remember our daughter trying on her mom’s jeans and liking them because they were retro. She went to an expensive college with lots of brick buildings. We moved to the coast in a white cottage with a blue door. I painted the door before we unloaded the truck. It smeared on my shirt when we moved the couch in. We started a new business. All You Can Read, a used bookstore. We had beautiful chairs. Beautiful dark wicker chairs. Her legs bare beneath a polka dot skirt. Veined the way black streaks run through white marble statues of goddesses. She hands me a glass of water with half a lemon slice floating on top and smiles.', '37i9dQZF1DXdPec7aLTmlC'], 
        ['McCready and his partner, Luce Bey, had been investigating a string of murders of young women that had been dubbed the Vampire Killings, due to fang marks left in the victims necks after they had been stabbed from behind through the kidneys with some sort of long, thin blade.Of course, no blood had been taken from the victims other than that caused by the stabbings and it was assumed that the killer had some sort of vampire fantasy, probably the manifestation of a control/power obsession.Two victims had been found in the park, three others in the Northwest industrial area at different locations.Those had been dumped, the first two had been killed in the park on the path and dragged into the bushes.', '37i9dQZF1DWVV27DiNWxkR']

    // [
    //     ['p', 'p']
    // ],
    // [
    //     ["q", "q"]
    // ]
];

var books = ["Book1", "Book2", "Book3"];
var test = document.getElementById('test');
var frame = document.getElementById('frame');
var book_buttons = document.getElementById('book_buttons');

var books_html = "";

for (var b=0; b< books.length; b++) {
    var button = document.createElement(books[b]);
    button.innerHTML = "<a id= "+books[b]+" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">"+books[b]+"</a>";
    var c = document.getElementsByClassName("container")[0];
    c.appendChild(button);

    var nextbutton = document.createElement("next");
    nextbutton.innerHTML = "<a id= \"next\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Next</a>";
    var c = document.getElementsByClassName("container")[0];
    
    var index = 0;
    button.addEventListener("click", function() {
        c.appendChild(nextbutton);
        test.innerHTML = json[index][0];
        url_emotion = json[index][1];
    
        // frame.setAttribute("src", "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:"+url_emotion+"&theme=white&view=coverart"); 
        frame.innerHTML = "<iframe src=\"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:"+url_emotion+"&theme=white&view=coverart\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"></iframe>";
    })
    nextbutton.addEventListener("click", function() {
        if (index < json.length-1) {
            index++;
            test.innerHTML = json[index][0];
            url_emotion = json[index][1];
            // frame.setAttribute("src", "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:"+url_emotion+"&theme=white&view=coverart"); 
            frame.innerHTML = "<iframe src=\"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:"+url_emotion+"&theme=white&view=coverart\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"></iframe>";
        }
    })
    
   
}

book_buttons.innerHTML = books_html;