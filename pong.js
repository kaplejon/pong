function Background() {

}

Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)

<<<<<<< HEAD
  // Print scores
  context.fillStyle = '#fff'
  context.font = "40px monospace"
  context.fillText(game.player.score, game.width * 3 / 8, 50)
  context.fillText(game.bot.score,    game.width * 5 / 8, 50)
=======
  context.fillStyle = '#fff'
  context.font = '40px monospace'
  context.fillText(game.player.score, game.width * 3/8, 50)
  context.fillText(game.bot.score, game.width * 5/8, 50)
>>>>>>> start
}

var canvas = $('canvas')[0],
    game = new Game(canvas)

game.entities = [
  new Background(),
  game.ball = new Ball(),
  game.player = new Player(),
  game.bot = new Bot()
]

game.start()
canvas.focus()


/* Everything below was already in the file.
Remove this later

// A black background
function Background() {}
Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

function Ball() {
  Entity.call(this)

  this.width = 20
  this.height = 20

  // TODO init the ball position and velocity
}
Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments)

  // TODO check if the ball hit a wall and rebound (inverse velocity)
}

// Initialize and start the game
var game = new Game($('canvas')[0])

// Load the game entities
game.entities = [
  new Background(),
  new Ball()
]

game.start()
$('canvas')[0].focus()

*/
