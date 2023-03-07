const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'BotTestrtoK.aternos.me',
  port: 15074,
  username: 'Bot'
})

function lookAtNearestPlayer() {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)

  if (!playerEntity) return

  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)