export default class SaySomething {
    massage : string;

    //初期化
    constructor(massage : string) {
        this.massage = massage;
    }

    public sayText(elem: HTMLElement | null) {
        if(elem){
        elem.innerText = this.massage;
        }
    }
}