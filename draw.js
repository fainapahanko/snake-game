const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake

(function setUp() {
    snake = new Snake() 
    var fruit = new Fruit()
    fruit.location()

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.upDate()
        fruit.draw()
        snake.draw()

        if(snake.eatFruit(fruit)) fruit.location()
    },300)
}());

window.addEventListener('keydown', ((ev)=> {
    const direction = ev.key.replace("Arrow", "")
    snake.changeDirection(direction)
}))