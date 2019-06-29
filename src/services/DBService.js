var Datastore = require('nedb');

export const history = new Datastore({filename : 'history', autoload:true});
export const likes = new Datastore({filename : 'history', autoload:true});