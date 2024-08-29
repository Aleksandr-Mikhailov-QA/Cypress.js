describe('Проверка авторизации', function () {

   it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                               // перешел на сайт
        cy.get('#mail').type('german@dolnikov.ru');                         // нашел поле для ввода логина, ввел верный логин
        cy.get('#pass').type('iLoveqastudio1');                             // нашел поле для ввода пароля, ввел верный пароль
        cy.get('#loginButton').click();                                     // найти кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно');    // проверка нужного текста
        cy.get('#messageHeader').should('be.visible');                      // понять что 'Авторизация прошла успешно' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');      // найти крестик и понять что он виден пользователю
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');                               // перешел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');                   // нашел поле для ввода e-mail, ввел любой e-mail
        cy.get('#forgotForm > .header').contains('Восстановите пароль');    // проверка нужного текста
        cy.get('#forgotForm > .header').should('be.visible');               // проверка что текст виден пользователю
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');      // найти крестик и понять что он виден пользователю
    })

    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');                               // перешел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('german@dolnikov.ru');                         // нашел поле для ввода логина, ввел верный логин
        cy.get('#pass').type('iLoveqastudio17');                            // нашел поле для ввода пароля, ввел НЕверный пароль
        cy.get('#loginButton').click();                                     // найти кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверка нужного текста
        cy.get('#messageHeader').should('be.visible');                      // понять что 'Такого логина или пароля нет' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');      // найти крестик и понять что он виден пользователю
    })

    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                               // перешел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('german@dolnikovgud.ru');                      // нашел поле для ввода логина, ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1');                             // нашел поле для ввода пароля, ввел верный пароль
        cy.get('#loginButton').click();                                     // найти кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверка нужного текста
        cy.get('#messageHeader').should('be.visible');                      // понять что 'Такого логина или пароля нет' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');      // найти крестик и понять что он виден пользователю
    })

    it('Проверка ввода логина без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                                   // перешел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('germandolnikov.ru');                              // нашел поле для ввода логина, ввел логин без @
        cy.get('#pass').type('iLoveqastudio1');                                 // нашел поле для ввода пароля, ввел верный пароль
        cy.get('#loginButton').click();                                         // найти кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверка нужного текста
        cy.get('#messageHeader').should('be.visible');                          // понять что 'Нужно исправить проблему валидации' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');          // найти крестик и понять что он виден пользователю
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');                                   // перешел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru');                              // нашел поле для ввода логина, ввел логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1');                                 // нашел поле для ввода пароля, ввел верный пароль
        cy.get('#loginButton').click();                                         // найти кнопку войти и нажать на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');      // проверка нужного текста
        cy.get('#messageHeader').should('be.visible');                          // понять что 'Нужно исправить проблему валидации' виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');          // найти крестик и понять что он виден пользователю

    })        
})