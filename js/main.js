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
const menu =   `
            <a href="index.html" id="home-link" name="link">Главная</a> |
            <a href="about.html">О компании</a> |
            <a href="articl.html">Статьи</a> |
            <a href="breed.html">Порода</a> |
            <a href="rare.html">Редкие</a> |
            <a href="care.html">Уход</a> |
            <a href="competition.html">Конкурс</a> |
            <a href="to_order.html">Заказ товара</a> |
            <a href="contacts.html">Контакты</a> |
            <a href="blog.html">Blog</a> |
            
`;

function getMenu() {
    return menu
}

const menuBlog = `
            <div class="menu-display">
            <div><a href="blog.html">Мой Блог</a></div>
            <div><a href="index.html">Магазин</a></div>
            <div><a href="#" class="login-button" name="link">Вход</a></div>
            </div>
`;
function getMenuBlog() {
    return menuBlog
}

/*function init() {
    let element = document.getElementById("home-link");
    element.addEventListener("click", ()=>{
        alert("Переход на главную страницу");
    });
}*/
const modalWindow = {
    BLUR_CLASS: "blur",
    modal: '',
    contentBlock: '',

    init:(openButton)=>{
        modalWindow.modal = $(".modal");
        modalWindow.contentBlock = $("div.content");
        modalWindow.initOpenListener(openButton);
        modalWindow.initCloseListener();
    },

    initOpenListener:(openButton)=>{
        openButton.click(()=>{
            modalWindow.modal.fadeIn(500);
            modalWindow.contentBlock.addClass(modalWindow.BLUR_CLASS);
        });
    },

    initCloseListener:()=>{
        $(".modal>span").click(()=>{
            modalWindow.modal.fadeOut(800);
            modalWindow.contentBlock.removeClass(modalWindow.BLUR_CLASS);
        });
    }
};
const sliderWidget = {
    components:'',
    init: (element)=>{
        sliderWidget.components = element;
        sliderWidget.components.click((e)=>{
            let target = $(e.currentTarget);
            target.find("div").slideToggle("fast");
        });
    }
};

$(document).ready(()=>{
    modalWindow.init($(".login-button"));
    sliderWidget.init($(".slider-questions>div"));
    sliderWidget.init($(".slider-info>div"));
    sliderWidget.init($(".slider-qualities>div"));
});
