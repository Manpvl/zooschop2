const siteNames = {
    "index":`<i>Зоомагазин - Питомец</i>`,
    "about":`<i>Зоомагазин - О компании</i>`,
    "articl":`<i>Зоомагазин - Статьи</i>`,
    "to_order":`<i>Зоомагазин - Заказ<br/>+7-905-550-45-45 </i>`,
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
const menu =   `<a href="index.html">Главная</a> |
                <a href="about.html">О компании</a> |
                <a href="articl.html">Статьи</a> |
                <a href="breed.html">Порода</a> |
                <a href="rare.html">Редкие</a> |
                <a href="care.html">Уход</a> |
                <a href="competition.html">Конкурс</a> |
                <a href="to_order.html">Заказ товара</a> |
                <a href="contacts.html">Контакты</a> |
                <a href="blog.html">Blog</a> |`

function getMenu() {
    return menu
}