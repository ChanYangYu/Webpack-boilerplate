export default class Component{
    constructor(element, props ={}){
        this.element = element;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup() {}
    setEvent() {}
    setState() {
        this.render();
        this.setEvent();
    }
    template() { return ''; }
    mount(){}
    render() {
        this.element.innerHTML = this.template();
        this.mount();
    }
}