import _ from "lodash";
import HttpErrors from "http-errors";

const { Unauthorized, Conflict } = HttpErrors;

const getNextId = () => Number(_.uniqueId());

const buildState = (defaultState) => {
  const state = {
    usersData: [
      { id: 1, favorits: [], history: [] },
      { id: 2, favorits: [], history: [] },
    ],
    users: [
      { id: 1, username: "admin", password: "admin" },
      { id: 2, username: "admin1", password: "admin1" },
    ],
  };

  if (defaultState.users) {
    state.users.push(...defaultState.users);
  }

  return state;
};

export default (app, defaultState = {}) => {
  const state = buildState(defaultState);

  app.post("/api/v1/login", async (req, reply) => {
    const username = _.get(req, "body.username");
    const password = _.get(req, "body.password");
    const user = state.users.find((u) => u.username === username);

    if (!user || user.password !== password) {
      reply.send(new Unauthorized());
      return;
    }

    const token = app.jwt.sign({ userId: user.id });
    reply.send({ token, username });
  });

  app.post("/api/v1/signup", async (req, reply) => {
    const username = _.get(req, "body.username");
    const password = _.get(req, "body.password");
    const user = state.users.find((u) => u.username === username);

    if (user) {
      reply.send(new Conflict());
      return;
    }

    const newUser = { id: getNextId(), username, password };
    const token = app.jwt.sign({ userId: newUser.id });
    state.users.push(newUser);
    state.usersData.push({ id: newUser.id, favorits: [], history: [] });
    reply
      .code(201)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ token, username });
  });

  app.post("/api/v1/data/favorits", async (req, reply) => {
    const { movieId, username } = req.body;
    const { id: userId } = state.users.find((user) => user.username === username);
    const { favorits: usersFavorites} = state.usersData.find((userData) => userData.id === userId);
    const alreadyInFavorits = usersFavorites.includes(movieId);
    if (alreadyInFavorits) {
      reply
        .header("Content-Type", "application/json; charset=utf-8")
        .send(new Conflict());
    } else {
      const updatedData = state.usersData.map((data) => data.id === userId ? { id: userId, favorits: [...data.favorits, movieId], history: [...data.history]} : data);
      state.usersData = updatedData;
      reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(state.usersData);
    }
  });

  app.delete("/api/v1/data/favorits", async (req, reply) => {
    const { movieId, username } = req.body;
    const { id: userId } = state.users.find((user) => user.username === username);
    const { favorits: usersFavorites} = state.usersData.find((userData) => userData.id === userId);
    const deletedFavorites = usersFavorites.filter((favoritMovieId) => favoritMovieId !== movieId)
    const alreadyDeleted = !usersFavorites.includes(movieId);
    if (alreadyDeleted) {
      reply
        .code(500)
        .header("Content-Type", "application/json; charset=utf-8")
        .send("already deleted!");
    } else {
      const updatedData = state.usersData.map((data) => data.id === userId ? { id: userId, favorits: [...deletedFavorites], history: [...data.history]} : data);
      state.usersData = updatedData;
      reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(state.usersData);
    }
  });

  app.get("/api/v1/data/favorits", async (req, reply) => {
    const { username } = req.query;
    const { id: userId } = state.users.find((user) => user.username === username);
    const { favorits: usersFavorites} = state.usersData.find((userData) => userData.id === userId);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(usersFavorites);
  });

  app.post("/api/v1/data/history", async (req, reply) => {
    const { link, query, username } = req.body;
    const { id: userId } = state.users.find((user) => user.username === username);
    const newItemId = getNextId();
    const updatedData = state.usersData
      .map((data) => data.id === userId ? { id: userId, favorits: [...data.favorits], history: [...data.history, {id: newItemId, link, query }]} : data);
    state.usersData = updatedData;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(state.usersData);
  });

  app.delete("/api/v1/data/history", async (req, reply) => {
    const { username } = req.body;
    const { id: userId } = state.users.find((user) => user.username === username);
    const updatedData = state.usersData.map((data) => data.id === userId ? { id: userId, favorits: [...data.favorits], history: []} : data);
    state.usersData = updatedData;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(state.usersData);
  });

  app.get("/api/v1/data/history", async (req, reply) => {
    const { username } = req.query;
    const { id: userId } = state.users.find((user) => user.username === username);
    const { history: usersHistory} = state.usersData.find((userData) => userData.id === userId);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(usersHistory);
  });

  app.get("*", (_req, reply) => {
    reply.code(200);
  });
};
