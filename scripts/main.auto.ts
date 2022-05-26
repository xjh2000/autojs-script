///<reference path="../node_modules/autojs-dev/types/auto.d.ts"/>


class Main {
    constructor() {

    }

    static main() {
        auto.waitFor();
        auto.setMode("fast");
        console.show();
        console.log("Hello World");
    }
}


Main.main();
