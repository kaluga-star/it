//const _0x4d4db2=_0x3872;function _0x3ff7(){const _0x58bab2=['email','success','value','html','12760240VVMVwT','/sendMessage','1670250zAfbcx','name','<b>\x20Почта\x20</b>\x20','log','684663wuwlUR','addEventListener','2483084mffXtl','!!!','then','16FyqmOS','5aHNquK','2GQNCYh','Конец','225078yqiMBp','getElementById','warn','сообщение\x20отправлено','block','-1002563495372','7958248570:AAFCSnaXsjudRXuT7PJJNlhn5aAc-WSpMjY','43140JPgtOg','<b>Сообщение\x20</b>\x20','2145636zDDUmU','https://api.telegram.org/bot'];_0x3ff7=function(){return _0x58bab2;};return _0x3ff7();}function _0x3872(_0x33e33d,_0x126fcf){const _0x3ff7cb=_0x3ff7();return _0x3872=function(_0x387240,_0x4cfc29){_0x387240=_0x387240-0x14a;let _0x12658d=_0x3ff7cb[_0x387240];return _0x12658d;},_0x3872(_0x33e33d,_0x126fcf);}(function(_0x56acc7,_0x3ae352){const _0x422b53=_0x3872,_0x48b99a=_0x56acc7();while(!![]){try{const _0xee08ee=-parseInt(_0x422b53(0x14b))/0x1+-parseInt(_0x422b53(0x152))/0x2*(-parseInt(_0x422b53(0x165))/0x3)+parseInt(_0x422b53(0x14d))/0x4*(-parseInt(_0x422b53(0x151))/0x5)+parseInt(_0x422b53(0x15b))/0x6+parseInt(_0x422b53(0x154))/0x7*(parseInt(_0x422b53(0x150))/0x8)+-parseInt(_0x422b53(0x15d))/0x9+parseInt(_0x422b53(0x163))/0xa;if(_0xee08ee===_0x3ae352)break;else _0x48b99a['push'](_0x48b99a['shift']());}catch(_0x19d49d){_0x48b99a['push'](_0x48b99a['shift']());}}}(_0x3ff7,0x57ff2));const token=_0x4d4db2(0x15a),CHAT_ID=_0x4d4db2(0x159),URI_API=_0x4d4db2(0x15e)+token+_0x4d4db2(0x164),success=document['getElementById'](_0x4d4db2(0x160));document[_0x4d4db2(0x155)]('tg')[_0x4d4db2(0x14c)]('submit',function(_0xb005d5){const _0x5e6138=_0x4d4db2;_0xb005d5['preventDefault'](),console['log'](_0x5e6138(0x14e));let _0x2fc303=_0x5e6138(0x15c)+this[_0x5e6138(0x166)][_0x5e6138(0x161)]+'\x0a';_0x2fc303+=_0x5e6138(0x167)+this['email']['value']+'\x0a',console[_0x5e6138(0x14a)](_0x2fc303),axios['post'](URI_API,{'chat_id':CHAT_ID,'parse_mode':_0x5e6138(0x162),'text':_0x2fc303})[_0x5e6138(0x14f)](_0x287cda=>{const _0x4cec04=_0x5e6138;this[_0x4cec04(0x166)][_0x4cec04(0x161)]='',this[_0x4cec04(0x15f)][_0x4cec04(0x161)]='',success['innerHTML']=_0x4cec04(0x157),success['style']['display']=_0x4cec04(0x158);})['catch'](_0x1cf977=>{const _0x3d5a05=_0x5e6138;console[_0x3d5a05(0x156)](_0x1cf977);})['finally'](()=>{const _0x4a09f9=_0x5e6138;console['log'](_0x4a09f9(0x153));});});
// Токен бота, который используется для аутентификации при отправке сообщений через Telegram API.
const token = '7958248570:AAFCSnaXsjudRXuT7PJJNlhn5aAc-WSpMjY';

// Идентификатор чата, куда будет отправлено сообщение. В данном случае это групповой чат.
const CHAT_ID = '-1002563495372';

// URL для отправки сообщения через API Telegram, где `token` - это токен Вашего бота.
const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;

// Элемент, который будет использоваться для отображения сообщения об успешной отправке.
const success = document.getElementById('success');

// Устанавливаем обработчик события для формы с id 'tg'.
document.getElementById('tg').addEventListener('submit', function(e) {
  
   // Предотвращаем стандартное поведение формы (перезагрузка страницы).
   e.preventDefault();
   console.log('!!!');

   // Формируем текст сообщения, используя значения полей формы.
   let message = `<b>Имя: </b> ${ this.name.value}\n`; // Получаем значение поля "name"
   message += `<b> Почта: </b> ${ this.email.value}\n`; // Получаем значение поля "email"
   message += `<b> Телефон: </b> ${ this.phone.value}`; //  строка для добавления телефона (если нужно)
   //message += `<b> Файл </b> ${ this.file.value}`; // Закомментированная строка для добавления файла (если нужно)

   // Логируем сообщение в консоль для отладки.
   console.log(message);

   // Отправляем POST-запрос к Telegram API с помощью библиотеки axios.
   axios.post(URI_API, {
    chat_id: CHAT_ID, // Указываем идентификатор чата
    parse_mode: 'html', // Указываем режим парсинга, чтобы использовать HTML-теги
    text: message // Текст сообщения
   })
   .then((re) => {
    // Если запрос успешен, очищаем поля формы.
    this.name.value = '';
    this.email.value = '';
    this.phone.value = '';
    // Отображаем сообщение об успешной отправке.
    success.innerHTML = "сообщение отправлено";
    success.style.display = "block"; // Делаем элемент видимым

   })
   .catch((err) => {
    // Если произошла ошибка, выводим ее в консоль.
    success.innerHTML = "Ошибка отправки";
    success.style.display = "block";
    console.warn(err);
   })
   .finally(() => {
    // Этот блок выполняется в любом случае после завершения запроса.
    console.log('Конец');
   });
});