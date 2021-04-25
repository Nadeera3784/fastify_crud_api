exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    staticCSP: true,
    swagger: {
      info: {
        title: 'Fastify CRUD API',
        description: 'Fastify CRUD API',
        version: '1.0.0',
        license : {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
      },
      externalDocs: {
        url: '127.0.0.1:3000',
        description: 'Find more info here'
      },
      host: '127.0.0.1:3000',
      basePath: "/v1",
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'users', description: 'User related end-points' }
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['name', 'phone', 'email'],
          properties: {
            _id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            phone: { type: 'string' },
            email: {type: 'string', format: 'email' },
            created_at: {type: 'date', format: 'date' }
          }
        }
      },
    }
  }