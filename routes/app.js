const AppController    = require('../controllers/AppController.js');

module.exports = function (app, options, next) {

    app.get('/users', { 
        schema: {
            description: 'Get all users ',
            summary: 'Get user list',
            tags: ['users'],
            response: {
                200: {
                  description: 'Success',
                  type: 'object',
                  properties: {
                    type: { 
                        type: 'string',
                        default : "success"
                    },
                    message: { 
                        type: 'array',
                        items: {},
                    },
                  }
                }
            },
        }
    } , AppController.get_users);

    app.get('/user/:id',  {
        schema: { 
            description: 'Find user by id',
            summary: 'Find user by id',
            tags: ['users'],
            params: { 
                type: 'object',
                additionalProperties: false,
                required: [ 'id' ],
                properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
            },
            response: {
                200: {
                  description: 'Success',
                  type: 'object',
                  properties: {
                    type: { 
                        type: 'string',
                        default : "success"
                    },
                    message: { 

                    },
                  }
                }
            },
        }
    } , AppController.get_user);

    app.post('/add_user', { 
        schema: {
            description: 'Add a new user',
            summary: 'Add a new user',
            tags: ['users'],
            body: {
                type: 'object',
                required: ['name', 'email', 'phone'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                        exclusiveMinimum : 0
                    },
                    phone: {
                        type: 'number'
                    }
                },
                additionalProperties : false,
            },
            response: {
                200: {
                  description: 'Success',
                  type: 'object',
                  properties: {
                    type: { 
                        type: 'string',
                        default : "success"
                    },
                    message: { 
                        type: 'string',
                        default : "User has been added successfully"
                    },
                  }
                }
            },
        }
    } , AppController.add_user);

    app.put('/update_user/:id', { 
        schema: {
            description: 'Update user',
            summary: 'Update user',
            tags: ['users'],
            params: { 
                type: 'object',
                additionalProperties: false,
                required: [ 'id' ],
                properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
            },
            body: {
                type: 'object',
                required: ['name', 'email' ,'phone'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                        exclusiveMinimum : 0
                    },
                    phone: {
                        type: 'number'
                    }
                },
                additionalProperties : false
            },
            response: {
                200: {
                  description: 'Success',
                  type: 'object',
                  properties: {
                    type: { 
                        type: 'string',
                        default : "success"
                    },
                    message: { 

                    },
                  }
                }
            },
        }
    } , AppController.update_user);

    app.delete('/delete_user/:id', {
        schema: { 
            description: 'Delete user',
            summary: 'Delete user',
            tags: ['users'],
            params: { 
                type: 'object',
                additionalProperties: false,
                required: [ 'id' ],
                properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
            },
            response: {
                200: {
                  description: 'Success',
                  type: 'object',
                  properties: {
                    type: { 
                        type: 'string',
                        default : "success"
                    },
                    message: { 

                    },
                  }
                }
            },
        }
    } , AppController.delete_user);

    next();
}
