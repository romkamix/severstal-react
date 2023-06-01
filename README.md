# ROMKAMIX/SEVERSTAL-REACT

# Стек:

- JS+TS
- react, react-router
- redux, redux-toolkit, redux-thunk, redux-persist, redux-saga
- react-toastify
- material ui
- SCSS

# Ссылки

- https://github.com/romkamix/severstal-react - Git
- http://sible.ru - фронт
- http://api.sible.ru - бэк
- https://jsonplaceholder.typicode.com - сторонний API для моковых данных

# Бекэнд:

- laravel, laravel-sanctum

# Бекэнд роуты:

- GET: /sanctum/csrf-cookie - получить csrf_token в куки
- POST: /login - авторизация
- GET: /logout - выход из аккаунта
- GET: /user - данные об авторизованном пользователе

# Макеты (layouts):

- default - навигационная панель, контент на всю ширину, контент прижат к хедеру
- centered - навигационная панель, минимальная высота контейнера - высота viewport, контент выводится по центру (по вертикали и горизонтали), на мобильных устройствах контент по вертикали прижат к хедеру
- login - аналогичен centered, без навигационной панели

# Адаптивная верстка

- Адаптивная верстка. Корректно отображается на мобильных устройствах.
- На мобильных устройствах в навигационной панели вместо ссылок отображается кнопка с выпадающим меню (бургер)

# Страницы (в скобках указан layout):

- / - домашняя (centered)
- /news - новости (default)
- /news/:id - новость (centered)
- /profile - страница профиля (centered)
- /login - страница авторизации (login)
- /notexists - случайная несуществующая ссылка, выводится страница 404 (centered)

# Страница NEWS

- Данные подгружаются через асинхронный запрос.
- Реализована пагинация.
- Во время загрузки данных и переходов по страницам отображается лоадер.

# Страница PROFILE

- Защищенная страница, требуется авторизация.
- При переходе на страницу, если пользователь не авторизован, то его автоматически перенаправляет на страницу авторизации.

# Страница LOGIN и авторизация

- username: Admin
- password: 12345

- Во время проверки введенных данных форма авторизации блокируется.
- Если произошла ошибка, то выводится сообщение, что данные для входа указаные неправильно.
- При переходе на страницу, если пользователь авторизован, или непосрественно после отправки и успешной проверки формы пользователя автоматически перенаправляет на страницу PROFILE.

# Навигационная панель

- Если пользователь не авторизован, в навигационной панели отображается кнопка для перехода на страницу.
- Если пользователь авторизован, в навигационной панели отображается кнопка для выхода из аккаунта.

# REDUX, REDUX=TOOLKIT

- Если пользователь авторизован, данные о сессии сохраняются в куки HttpOnly.
- После успешной авторизации отправляется запрос на получение данных профиля пользователя, которые сохраняются в Redux.
- Наличие этих данных в хранилище говорит об успешной авторизации пользователя (аналогично сохранению JWT токена).
- Если на сервер уйдет неавторизованный запрос (например, куки просрочены, истек срок действия или изменен csrf токен), профиль пользователя в хранилище стирается и требуется снова пройти авторизацию.
- Для улучшения механизма авторизации можно дополнительно запоминать время действия токенов и куки и автоматическим продлевать до их истечения.

# REDUX-PERSIST

- Чтобы данные авторизации не сбрасывались при перезагрузке страницы, подключена библиотека Redux-persist, которая автоматически запоминает текущее состояние отдельных веток хранилища в localStorage и подхватывает их при загрузке страницы.

# REDUX-THUNK, REDUX-SAGA

- Для выполнения в REDUX асинхронных запросов на авторизацию использовались REDUX-THUNK (механизм уже встроен в REDUX-TOOLKIT) и REDUX-SAGA
- Авторизация через REDUX-SAGA, выход из аккаунта через REDUX-THUNK
- Реализация через разные механизмы для демонстрации работы.

# NOTY + TOASTIFY

- Реализована система уведомлений через Toastify.
- Уведомления сохраняются в Redux.
- Любой компонент может создавать уведомления (info, success, warning, error).
- Компонент Noty отслеживает соответствующую ветку в Redux и отображает поступающие уведомления через библиотеку всплывающих уведомлений Toastify.

# Кнопка LOGOUT в навигационной панели

- Запрос на выход на сервер.
- Удаление профиля из хранилища.
- Кнопка "Logout" в навигационной панели меняется на "Login"
- Если пользователь находился на защищенной странице, то его сразу перебрасывает на страницу авторизации "/login"

# AXIOS

- Для выполнения асинхронных запросов используюеся AXIOS.
- На все запросы в механизм AXIOS повешен слушатель, который при ошибках создает уведомления.
- Если код ошибки связан с авторизацией (для примера это 401 Unauthorized и 419 Authentication Timeout) дополнительно сбрасывается авторизация в хранилище.

Это можно проверить:

- авторизоваться, удалить сессионные куки и перезагрузить страницу.

Что произойдет:

- Появится уведомление об ошибке авторизации (401), потому что при перезагрузке страницы выполняется запрос профиля пользователя, требующий авторизации, а ее нет из-за отсутствующих куки.
- Удаление профиля из хранилища.
- Кнопка "Logout" в навигационной панели меняется на "Login"
- Если пользователь находился на защищенной странице, то его сразу перебрасывает на страницу авторизации "/login"

# ТЗ

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
