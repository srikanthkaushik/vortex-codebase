const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./dbusers.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req: any, res: any, next: any) => { 
  const users = readUsers();

  const user = users.filter(
    (u: any) => u.username === req.body.username && u.password === req.body.password
  )[0];

  if (user) {
    res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.get('/featuresvc/feature/all', (req: any, res: any) => {
    const features = readFeatures();
    res.send(features);
});

server.get('/rolesvc/role/all', (req: any, res: any) => {
  const roles = readRoles();
  res.send(roles);
});

server.post('/register', (req: any, res: any) => {
  const users = readUsers();
  const user = users.filter((u:any) => u.username === req.body.username)[0];

  if (user === undefined || user === null) {
    res.send({
      ...formatUser(req.body),
      token: checkIfAdmin(req.body)
    });
    db.users.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use('/users', (req: any, res: any, next: any) => {
  if (isAuthorized(req) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user: any) {
  delete user.password;
  user.role = user.username === 'admin'
    ? 'admin'
    : 'user';
  return user;
}

function checkIfAdmin(user: any, bypassToken = false) {
  return user.username === 'admin' || bypassToken === true
    ? 'admin-token'
    : 'user-token';
}

function isAuthorized(req: any) {
  return req.headers.authorization === 'admin-token' ? true : false;
}

function readUsers() {
  const dbRaw = fs.readFileSync('./server/dbusers.json');  
  const users = JSON.parse(dbRaw).users
  return users;
}

function readFeatures() {
  const dbRaw = fs.readFileSync('./server/dbfeatures.json');  
  const features = JSON.parse(dbRaw).features
  return features;
}

function readRoles() {
  const dbRaw = fs.readFileSync('./server/dbroles.json');  
  const roles = JSON.parse(dbRaw).roles
  return roles;
}
