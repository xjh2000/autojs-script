///<reference path="../node_modules/autojs-dev/types/auto.d.ts"/>


export class Yilu {
    constructor() {
        console.log("Yilu launched");
        app.launchPackage("com.citic21.user");
    }

    static main() {

    }

    public start() {
        selector()
            .text("成人疫苗")
            .findOne()
            .parent()
            .child(9).click();

        selector().className("android.widget.Image").depth(17).waitFor();

        let uiObject = selector()
            .id("__react-content")
            .findOne()
            .child(0)
            .child(0)
            .child(2
            ).child(0);
        console.log(uiObject);
        uiObject.click();
    }
}

