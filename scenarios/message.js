async function message(client, logger) {
  const start = process.hrtime()
  // On the home page we get the org list and the event dashboard
  let response = await client.service('/message').find({})
  // Simulate parallel requests.
  // await Promise.all(response.data.map(msg => client.service(...))
  // logger.verbose('...')
  client.setDuration('message', start)
  // Simulate client wait
  await client.wait(Math.random() * 500)
}

module.exports = message