function Paddle() {
	Entity.call(this)

	this.width = 20
	this.height = 100

<<<<<<< HEAD
  this.y = game.height / 2 - this.height / 2

  this.score = 0
=======
	this.y = game.height / 2 - this.height / 2
	this.x = 20

	this.score = 0
>>>>>>> start
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
<<<<<<< HEAD
  Entity.prototype.update.apply(this, arguments)
=======
	Entity.prototype.update.apply(this, arguments)
>>>>>>> start

	this.y = Math.min(Math.max(this.y, 0), game.height - this.height)
}

function Player() {
<<<<<<< HEAD
  Paddle.call(this)
  
  this.x = 20

  this.speed = 15
=======
	Paddle.call(this)

	this.x = 20

>>>>>>> start
}

Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player

Player.prototype.update = function() {
<<<<<<< HEAD
  if (game.keyPressed.up) {
    this.yVelocity = -this.speed
  } else if (game.keyPressed.down) {
    this.yVelocity = this.speed
  } else {
    this.yVelocity = 0
  }

  Paddle.prototype.update.apply(this, arguments)
=======
	Paddle.prototype.update.apply(this, arguments)

	var speed = 15

	if (game.keyPressed.up) {
		this.yVelocity = -speed
	} else if (game.keyPressed.down) {
		this.yVelocity = speed
	} else {
		this.yVelocity = 0
	}
>>>>>>> start
}


function Bot() {
<<<<<<< HEAD
  Paddle.call(this)

  this.x = game.width - this.width - 20

  this.speed = 5
=======
	Paddle.call(this)

	this.x = game.width - this.width - 20

>>>>>>> start
}

Bot.prototype = Object.create(Paddle.prototype)
Bot.prototype.constructor = Bot

Bot.prototype.update = function() {
<<<<<<< HEAD
  // Follow the ball
  if (this.y < game.ball.y) {
    this.yVelocity = this.speed
  } else {
    this.yVelocity = -this.speed
  }

  Paddle.prototype.update.apply(this, arguments)
}
=======
	Paddle.prototype.update.apply(this, arguments)

	var speed = 5
>>>>>>> start

	if (this.y < game.ball.y) {
		this.yVelocity = speed
	} else if (this.y > game.ball.y) {
		this.yVelocity = -speed
	}
}
