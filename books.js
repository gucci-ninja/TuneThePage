book = [
    "Getting late for a meeting, need to run’, he said, as he slung his coat over the shoulder, and bounded out of the house. As he drove away, she came running down the stairs two at a time. ‘Wait, wait’, she said, but he had already left. Her mouth crumpled like used wrapping paper. ‘He forgot to give me a goodbye kiss’, she whispered in a voice that trembled under the weight of her hurt. She called him, ‘you left without giving me a kiss’, she said accusingly. ‘I am sorry sweetheart’, he said, his voice contrite. ‘It is okay’, she said, trying to be all grown up as she cut the call. She gulped down her breakfast morosely, wore her shoes, picked up her school bag and started to walk out of the door, her shoulders slumped. As she climbed down the steps, the car glided to a stop outside the house. He got out of the car. She ran to him, her whole face lit up like a Christmas tree. ‘I am sorry I forgot’, he said, as he picked her up and hugged her. She said nothing. Her jaw ached from smiling. Fifteen years later, no one would remember he was late for a meeting, but a little girl would never ever forget that her father drove all the way back home just to kiss her goodbye!"
];

var books = ["Book1", "Book2", "Book3"];
var test = document.getElementById('test');
var book_buttons = document.getElementById('book_buttons');
var books_html = "";

for (var b in books) {
    var button = document.createElement(books[b]);
    button.innerHTML = "<a id= "+books[b]+" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">"+books[b]+"</a>";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function() {
        test.innerHTML = book[0];
    
    })
}

book_buttons.innerHTML = books_html;

