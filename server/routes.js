// @ts-check

import _ from 'lodash';
import HttpErrors from 'http-errors';

const { Unauthorized, Conflict } = HttpErrors;

const getNextId = () => Number(_.uniqueId());

const buildState = (defaultState) => {
  const state = {
    users: [
      { id: 1, username: 'admin', password: 'admin' },
      { id: 2, username: 'admin1', password: 'admin1' },
    ],
  };

  if (defaultState.users) {
    state.users.push(...defaultState.users);
  }

  return state;
};

export default (app, defaultState = {}) => {
  const state = buildState(defaultState);

  app.post('/api/v1/login', async (req, reply) => {
    const username = _.get(req, 'body.username');
    const password = _.get(req, 'body.password');
    const user = state.users.find((u) => u.username === username);

    if (!user || user.password !== password) {
      reply.send(new Unauthorized());
      return;
    }

    const token = app.jwt.sign({ userId: user.id });
    reply.send({ token, username });
  });

  app.post('/api/v1/signup', async (req, reply) => {
    const username = _.get(req, 'body.username');
    const password = _.get(req, 'body.password');
    const user = state.users.find((u) => u.username === username);

    if (user) {
      reply.send(new Conflict());
      return;
    }

    const newUser = { id: getNextId(), username, password };
    const token = app.jwt.sign({ userId: newUser.id });
    state.users.push(newUser);
    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ token, username });
  });

  app.get('/api/v1/hello', (req, reply) => {
    reply.send(`Hello Ivan`);
  });

  app.get('/api/v1/data', { preValidation: [app.authenticate] }, (req, reply) => {
    const user = state.users.find(({ id }) => id === req.user.userId);

    if (!user) {
      reply.send(new Unauthorized());
      return;
    }

    reply
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(_.omit(state, 'users'));
  });

  app
    .get('*', (_req, reply) => {
      reply
        .code(200);
    });
};
