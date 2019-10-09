/**
 * Сборник методов для бэкендеров
 *
 * Методы срабатывают в нужных местах и получает нужные на бэке данные.
 * В методы может передаваться колбэк — реакция фронта на успех / неудачу.
 *
 * Например, в метод приходит айди товара,
 * внутри этого файла отправляется аякс-запрос и вызывается колбэк, если всё успешно,
 * на фронте происходит какая-то реакция.
 *
 * В отдельном файле, чтобы бэкендеры не трогали фронт, а разработка велась независимо.
 */

/* eslint-disable */

window.API = {
  catalog: {},
  item: {},
  checkout: {},
  auth: {},
  account: {},
  subscribe: {
    /**
     Отправка формы подписки
     @params
     @callback
     * */
    onSendPopupSubscribe(params, callback) {
      console.groupCollapsed('API: onSendPopupSubscribe');
      console.log(params);
      console.groupEnd();
      setTimeout(() => {
        callback ? callback() : 0;
      }, 3000);
    },

    /**
     Закрытие формы подписки
     @params
     @callback
     * */
    onHideSubscribePopup: function(params, callback) {
      console.groupCollapsed('API: onHideSubscribePopup');
      console.log(params);
      console.groupEnd();
      callback ? callback() : 0;
    },

    /**
     Показ формы подписки
     @params
     @callback
     * */
    onShowSubscribePopup: function(params, callback) {
      console.groupCollapsed('API: onShowSubscribePopup');
      console.log(params);
      console.groupEnd();
      callback ? callback() : 0;
    }
  },
  other: {}
};
