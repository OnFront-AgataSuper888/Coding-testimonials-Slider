

const imgTanya = document.getElementById("tanya-picture");
const textTanya = document.querySelector("tanya-quote");
const nameTanya = document.querySelector("tanya-name");
const positionTanya = document.querySelector("tanya-position");

const figureTanya = [imgTanya, textTanya, nameTanya, positionTanya];


const imgJohn = document.getElementById("john-picture");
const textJohn = document.querySelector("john-quote")
const nameJohn = document.querySelector("name-john");
const positionJohn = document.querySelector("position-john");

const figureJohn = [imgJohn, textJohn, nameJohn, positionJohn];


const figures = [figureTanya, figureJohn];
let i = 0;
function change() {
    document.querySelector('.btn-container').addEventListener("click", function () {
        if (i === 0) {
            i = i + 1;
            document.getElementById("slider1").style.display = "none";
            document.getElementById("slider2").style.display = "flex";
            console.log("działa0")

        } else {
            i = i - 1;
            document.getElementById("slider1").style.display = "flex";
            document.getElementById("slider2").style.display = "none";

            console.log("działa1")
        }
    })
}