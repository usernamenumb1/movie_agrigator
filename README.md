Реализованы требования к функциональности.

## React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты - [pages](./src/components/MainPage/MainPage.tsx) и [components](./src/components/MainPage/PopularMovies.tsx).
- Есть рендеринг списков - [SearchResults](./src/components/SearchResultPage/SearchResults.tsx)
- Реализована хотя бы одна форма - [LogIn](./src/components/LoginPage/Form.tsx).
- Есть применение Контекст API - [AuthProvider](./src/components/context/AuthProvider.tsx).
- Есть применение предохранителя - [App](./src/App.tsx), [ErrorFallBack](./src/components/ErrorFallBack.tsx).
- Есть хотя бы один кастомный хук - [hooks](./src/hooks/useDebounce.ts).
- Хотя бы несколько компонентов используют PropTypes - [FavoritMovieCard](./src/components/FavoritsPage/FavoritMovieCard.tsx)
- Поиск не триггерит много запросов к серверу.
- Есть применение lazy + Suspense - [MainPage](./src/components/MainPage/MainPage.tsx)

## Redux

- Используем Modern Redux with Redux Toolkit - [redux](./src/store).
- Используем слайсы - [MovieSlice](./src/store/slices/MovieSlice.ts).
- Используется RTK Query - [MoviesAPI](./src/store/API/MoviesAPI.ts), [UserDataAPI](./src/store/API/UserDataAPI.ts).
- Используется Transforming Responses - [MoviesAPI](./src/store/API/MoviesAPI.ts).
- Есть хотя бы одна кастомная мидлвара - [logger](./src/store/index.ts).

## Необязательные требования

- Использован TypeScript.
- Реализована авторизация и хранение данных пользователей на сервере - [server](./server).

# Установка

Склонируйте репозиторий

```sh
git clone https://github.com/usernamenumb1/movie_agrigator.git
```

Из корня проекта установите необходимые зависимости

```sh
npm install
```

Запустите проект

```sh
npm start
```
