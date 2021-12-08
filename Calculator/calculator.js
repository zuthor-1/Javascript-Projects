let screen = document.getElementById('screen');
let sv = '';
buttons = document.querySelectorAll('button');
for (item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if (buttonText == 'C') {
            sv = '';
            screen.value = '';
            console.log("1",sv,screen.value);

        }
        else if (buttonText == '=') {
            screen.value = eval(sv);
            sv = '';
            console.log("2",sv,screen.value);
        }
        else {
            sv += buttonText;
            screen.value = sv;
            console.log("3",sv,screen.value);

        }

    })
}
