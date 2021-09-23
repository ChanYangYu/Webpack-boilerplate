import FirstPage from "../view/FirstPage";
import SecondPage from "../view/SecondPage";

export default {
    init() {
        this.container = document.querySelector('#app');
        window.addEventListener('popstate', () =>{
            this.render(window.location.pathname);
        });
    },
    pushState(data, path){
        history.pushState(data, path, location.origin + path);
        this.render(path);
    },
    render(path){
        switch (path){
            case '/' : new FirstPage(this.container); break;
            case '/second' : new SecondPage(this.container); break;
        }
    }

}