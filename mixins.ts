console.log("Hello from mixins.ts");

class Phone {
    name: string;
    sayImAPhone() {
        console.log("I am a phone");
    }
}
class DisplayDevice {
    resolution: number;
    sayImADisplayDevice() {
        console.log("I am an DisplayDevice ");
    }
}
class SmartPhone {
    ProdId: string;
}
interface SmartPhone extends Phone, DisplayDevice { }
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}
applyMixins(SmartPhone, [Phone, DisplayDevice]);
let smPhone1: SmartPhone = new SmartPhone;
smPhone1.sayImAPhone();
smPhone1.sayImADisplayDevice();
