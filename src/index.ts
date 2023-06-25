import SaySomething
from "./saySomething";

const root = document.getElementById("root");

//インスタンス化

const saySomething = new SaySomething("Hello typescript");
saySomething.sayText(root);