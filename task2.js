const user = prompt("Enter your name", "name");

const sayHello = (name) => {
    if (!name) {
        return;
    }

    if (name.toLowerCase() == "mark") {
        return `Hi, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }

}

const message = sayHello(user);

alert(message);