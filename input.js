export default class InputHandler {
    constructor(){
        this.lastKey = '';
        // 이렇게 하면 안된다고 함
        // es6 arrow function do not bind their own 'this', but they inherit the one
        // from their parent scope, this is called 'lexical scoping'.
        // arrow functions allow to retain the scope of the caller inside the function,
        // so we don't need to use 'bind'.
        // window.addEventListener('keydown', function(e){
        //     //console.log(e.key);
        //     switch(e.key){
        //         case "ArrowLeft":
        //             this.lastKey = "PRESS left";
        //             break;
        //         case "ArrowRight":
        //             this.lastKey = "PRESS right";
        //             break;
        //     }
        // });
        // window.addEventListener('keyup', function(e){
        //     switch(e.key){
        //         case "ArrowLeft":
        //             this.lastKey = "RELEASE left";
        //             break;
        //         case "ArrowRight":
        //             this.lastKey = "RELEASE right";
        //             break;
        //     }
        // });

        window.addEventListener('keydown', (e) => {
            //console.log(e.key);
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                    break;
                case "ArrowRight":
                    this.lastKey = "PRESS right";
                    break;
                case "ArrowDown":
                    this.lastKey = "PRESS down";
                    break;
                case "ArrowUp":
                    this.lastKey = "PRESS up";
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                    break;
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
                    break;
                case "ArrowDown":
                    this.lastKey = "RELEASE down";
                    break;
                case "ArrowUp":
                    this.lastKey = "RELEASE up";
                    break;
            }
        });
    }
}