let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = '';


for (item of button)
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('you selected : ', buttonText);

        if(buttonText == 'X')
        {
            screenValue += '*';
            screen.value = screenValue;
        }
        else if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
