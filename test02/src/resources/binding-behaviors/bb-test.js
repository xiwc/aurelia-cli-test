export class BbTestBindingBehavior {

    bind(binding, source) {
        console.log('bb-test[bind]');
    }

    unbind(binding, source) {
        console.log('bb-test[unbind]');
    }
}
