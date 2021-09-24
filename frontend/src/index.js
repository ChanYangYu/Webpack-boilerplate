import Router from "./core/Router";

document.addEventListener('DOMContentLoaded', () =>{
    Router.init();
    Router.render(location.pathname);
})