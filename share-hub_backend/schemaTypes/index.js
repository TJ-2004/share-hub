
// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type';
import pin from './pin.js'
import comment from './comment.js'
import save from './save.js'
import user from './user.js'
import postedBy from './postedBy.js'

export const schemaTypes = [user, pin, save, postedBy, comment]
