///<reference path="../node_modules/autojs-dev/types/auto.d.ts"/>


class Main {
    constructor() {

    }

    static main() {
        auto.waitFor();
        auto.setMode("fast");
        console.show();
        console.log("Hello World");
        let havePackage = app.launchPackage('com.citic21.user');
        if (!havePackage) {
            print('没有找到应用');
        } else {
            print('找到应用');
        }
    }
}


Main.main();
