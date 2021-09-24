import Component from "../core/Component";
import Router from "../core/Router";
export default class SecondPage extends Component{
    template(){
        return `
        <section class="main-page">Second Page!</section>
        <button id="btn">first</button>
        `
    }
    setEvent() {
        this.element.querySelector('#btn').addEventListener('click', ()=>{
            Router.pushState({data : 'hi'}, '/');
        })
    }
}
