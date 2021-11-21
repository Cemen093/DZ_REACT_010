document.addEventListener("DOMContentLoaded", function (params) {
    class Square{
        constructor(){
            this.div = document.createElement("div");
        }
        getDiv() {
            return this.div;
        };
        setStyleOne(){
            this.div.style.backgroundColor = "red";
            this.div.style.padding = "30px";
        }
        setStyleTwo(){
            this.div.style.backgroundColor = "blue";
            this.div.style.padding = "30px";
        }
        setStyleThre(){
            this.div.style.backgroundColor = "green";
            this.div.style.padding = "30px";
        }
    };

    let square_1 = new Square();
    square_1.setStyleOne();
    let square_2 = new Square();
    square_2.setStyleTwo();
    let square_3 = new Square();
    square_3.setStyleThre();
    document.body.append(square_1.getDiv());
    document.body.append(square_2.getDiv());
    document.body.append(square_3.getDiv());
})