import Component from "../core/Component";
import Router from "../core/Router";
export default class FirstPage extends Component{
    template(){
        return `
        <section class="main-page">First Page!</section>
        <button id="btn">second</button>
        `
    }
    setEvent() {
        this.element.querySelector('#btn').addEventListener('click', ()=>{
            Router.pushState({data : 'hi'}, '/second');
        })
    }
}
