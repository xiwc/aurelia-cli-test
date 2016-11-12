import { DialogService } from 'aurelia-dialog';
import { Prompt } from './prompt';

export class App {

    person = { firstName: 'Wade', middleName: 'Owen', lastName: 'Watts' };

    static inject = [DialogService];
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.message = 'Hello World!';
    }

    submitHandler() {
        // this.dialogService.open({ viewModel: Prompt, model: this.person }).then(response => {
        //     if (!response.wasCancelled) {
        //         console.log('good');
        //     } else {
        //         console.log('bad');
        //     }
        //     console.log(response.output);
        // });

        this.dialogService.openAndYieldController({ viewModel: Prompt, model: this.person }).then(controller => {
            // Note you get here when the dialog is opened, and you are able to close dialog   
            // Promise for the result is stored in controller.result property 
            controller.result.then((response) => {

                if (!response.wasCancelled) {
                    console.log('good');
                } else {
                    console.log('bad');
                }

                console.log(response);

            })

            setTimeout(() => {
                controller.cancel('canceled outside after 3 sec')
            }, 3000)

        });
    }

    myViewModelCloseFunction() {
        console.log('myViewModelCloseFunction');
    }
}
