import * as Comlink from 'comlink';


class CountDownClass {
    calculateDueDate() {
        console.log('sina')
    }
}

Comlink.expose(CountDownClass);

