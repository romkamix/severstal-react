# severstal-react

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Стэк:
react, redux, saga, react-router, SASS (SCSS), ui на выбор: ant, material UI или без ui-фрейморвка

Описание:
Реализовать приложение, со следующими страницами:
/ — главная
/login — страница ввода логина и пароля
/news — страница с новостями (любая информация, новости получать в json формате, демо http://jsonplaceholder.typicode.com/)
/profile — страница с произвольным текстом, недоступная без авторизации
На сайте, в шапке или подвале реализовать ссылки:
На главную (/)
Новости (/news)
Профиль (/profile)
Если пользователь кликает на страницу “профиля” и он не “авторизован” — перекидывать на страницу /login
Форма входа (/login) принимает “фейковые” данные:
username: Admin
password: 12345
Если введены другие данные, то показывается сообщения: Имя пользователя или пароль введены не верно
Если введены корректные данные, то перебрасывать на страницу /profile
Информацию об авторизации пользователя можно хранить в localStorage. Базу данных реализовать не нужно.
Страница “новости” должна получать данные в формате json. Желательно данные получать через https запрос с сервиса демо данных: http://jsonplaceholder.typicode.com/, в противном случае – из моковых данных, хранящихся в отдельном файле.
Страница “профиль” должна содержать информацию о пользователе с изображением.
Все необходимое на ваш взгляд, прокинуть через Redux.

Дизайн:
Оформление (дизайн) на Ваш вкус.
Сайт должен быть комфортным для просмотра на всех устройствах (адаптивным). Желательно использование css препроцессоров.

Дополнительно:
Код оформить на GitHub/GitLab с небольшим описанием Readme.md
Если у вас не получается сделать часть задания, присылайте решение в любом состоянии, указывая что именно не вышло и почему.
