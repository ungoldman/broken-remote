/* global Phaser */

(function () {
  var game, bg, mordecai, rigby

  window.onload = function init () {
    game = new Phaser.Game(900, 500, Phaser.AUTO, 'game', {
      preload: preload,
      create: create,
      update: update
    }, true)

    function preload () {
      game.load.image('space', 'assets/backgrounds/space.jpg')
      game.load.image('mordecai', 'assets/sprites/mordecai.png')
      game.load.image('rigby', 'assets/sprites/rigby.png')
    }

    function create () {
      bg = game.add.sprite(0, -20, 'space')

      mordecai = game.add.sprite(game.world.centerX + 100, game.world.centerY + 220, 'mordecai')
      mordecai.anchor.setTo(0.5, 1)
      mordecai.inputEnabled = true
      mordecai.input.enableDrag(false, true)

      rigby = game.add.sprite(game.world.centerX - 100, game.world.centerY + 220, 'rigby')
      rigby.anchor.setTo(0.5, 1)
      rigby.inputEnabled = true
      rigby.input.enableDrag(false, true)
    }

    function update () {}
  }
})()
