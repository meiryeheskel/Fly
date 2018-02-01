var arr = new Array(10);
for (var i = 0; i < arr.length; i++)
    arr[i] = createFly();
for (var i = 0; i < arr.length; i++) {
    arr[i].fly(70);
    arr[i].land();
    document.write("<br/>");
}
function createFly() {
    switch (Math.round(Math.random() * 2)) {
        case 0: return new Bird("Robin", 3, "white&orange");
        case 1: return new Airplane("Steve", "United Airlines", "Hawaii");
        case 2: return new Kyte("red", 100);
    }
}
//# sourceMappingURL=app.js.map