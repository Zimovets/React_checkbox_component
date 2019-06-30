var Datastore = require('nedb');

export const history = new Datastore({filename : 'historyDB', autoload:true});
export const likes = new Datastore({filename : 'likesDB', autoload:true});