db.createCollection('posts',{
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be a valid object id and is required',
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array of comments and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType:'string',
                description:'must be a string and is required',
              },
              author: {
                bsonType: 'objectId',
                description:'must be a valid object id and is required', 
              }
            }
          }
        }
      } 
    } 
  } 
})

db.createCollection('posts',{
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be a valid object id and is required',
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array of comments and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType:'string',
                description:'must be a string and is required',
              },
              author: {
                bsonType: 'objectId',
                description:'must be a valid object id and is required', 
              }
            }
          }
        }
      } 
    } 
  },
  validationAction: 'warn'
})