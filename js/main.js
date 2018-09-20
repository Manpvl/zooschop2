const siteNames = {
    "index":`<i>Зоомагазин - Питомец</i>`,
    "about":`<i>Зоомагазин - О компании</i>`,
    "articl":`<i>Зоомагазин - Статьи</i>`,
    "to_order":`<i>Зоомагазин - Заказ</i>`,
    "blog":`<i>Мой Блог</i>`,
    "default":`<i>Зоомагазин - Питомец</i>`,
};

function getSiteName() {
    const url = document.location.pathname;
    let siteName = siteNames.default;
    for (let key in siteNames){
        if (url.includes(key)){
            siteName = siteNames[key];
            console.log("Соответствие найдено. Устанавливаем имя страницы:" + siteName);
            break;
        }
    }
    return siteName
    //let siteName = `<i class="name-one">Зоомагазин</i>`;
    //console.log("Выводим название сайта" + siteName);
    //return siteName;
}
