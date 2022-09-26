# Тестовое задание Frontend


## Описание

Требуется реализовать систему комментариев.<br>
Каждый комментарий состоит из следующих элементов:<br>
Аватар автора комментария<br>
Имя автора комментария<br>
Текст комментария<br>
Дата написания комментария<br>
Кнопки рейтинга "+" и "-"<br>
Текущий рейтинг комментария.<br>
Нажатие на "+" или "-" изменяют рейтинг комментария на 1. Если рейтинг комментария становится менее "-10", комментарий должен свернуться в одной строчку "Открыть комментарий".<br>
Дата комментария должна быть записана в виде временного интервала, прошедшего с момента написания комментария. Шаг интервала: от 0 до 1 часа - минуты, от 1 часа до 1
суток - часы, от 1 суток - дни.<br>
Комментарии должны добавляться без перезагрузки страницы.<br>
Форма отправки комментария должна иметь минимальную валидацию на отсутствие значений и на правильность формата почты.<br>

## Требования

Для реализации логики следует использовать фреймворк React.js<br>
Для верстки рекомендуем использовать библиотеку Material-UI<br>
Выполненное задание должно располагаться на github.com.<br>
В репозитории должна быть история коммитов (то есть запрещается выкладывать уже готовый проект).<br>
По желанию соискателя готовое задание может быть выложено на github pages.<br>
Плюсом будет наличие комментариев в формате JSDoc.<br>
Будет плюсом использование styled-components для стилизации<br>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
