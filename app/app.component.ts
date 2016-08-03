import {Component} from '@angular/core';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app-template.html'
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    msg = 'dreamapple';
    input1 = '';
    input2 = '';
    input3 = '';

    showMsg() {
        alert(this.msg);
    }

    keyupHandler1(event:any) {
        this.input1 = event.target.value;
    }

    keyupHandler2(event: KeyboardEvent) {
        this.input2 = (<HTMLInputElement>event.target).value;
    }

    keyupHandler3(value: string) {
        this.input3 = value;
    }

    item = '';
    itemList = [];

    addItem(name) {
        this.itemList.push({name: name, status: 'not complete'});
    }
    removeItem(id) {
        this.itemList.splice(id, 1);
    }
    doneItem(id) {
        this.itemList[id].status = 'done!';
    }
}