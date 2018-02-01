
let arr: IFly[] = new Array<IFly>(10);

for (let i: number = 0; i < arr.length; i++)
    arr[i] = createFly();

for (let i: number = 0; i < arr.length; i++) {
    arr[i].fly(70);
    arr[i].land();
    document.write("<br/>");
}

function createFly() :IFly {

    switch (Math.round(Math.random() * 2)) {
        case 0: return new Bird("Robin",3,"white&orange");
        case 1: return new Airplane("Steve","United Airlines","Hawaii");
        case 2: return new Kyte("red",100);
    }


}