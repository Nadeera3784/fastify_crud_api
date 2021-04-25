const fastify     = require('fastify');
const formbody    = require('fastify-formbody');

const app_config  = require('./config/app');
const {app_route} = require('./routes');
const {databaseInitializer} = require('./libraries/database');


const app = fastify({ logger: true });

app.register(formbody);

databaseInitializer(app_config.app.database_uri);

const swagger = require('./config/swagger');

app.register(require('fastify-swagger'), swagger.options);

app.register(app_route, { prefix: '/v1' })

app.setErrorHandler(function (error, request, response) {
  if (error.validation) {
    response.status(422).send(error.validation);
  }
});

app.addHook('onRoute', (routeOptions) => {
  console.log(`Registered route: ${routeOptions.url}`);
})

app.listen(process.env.PORT || 3000, (err, address) => {
  if (err) {
      app.log.error(err)
      process.exit(1)
  }
  app.swagger();
  app.log.info(`server listening on ${address}`);
})
