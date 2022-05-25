function init(){
    let select = document.createElement('select');
    select.id = 'selector'
    let option0 = document.createElement('option');
    option0.setAttribute('value', 'none')
    let option0Text = document.createTextNode('Seleccione una comuna');
    option0.appendChild(option0Text);

    let option1 = document.createElement('option');
    option1.setAttribute('value', 'value1')
    let option1Text = document.createTextNode('Valdivia');
    option1.appendChild(option1Text);

    let option2 = document.createElement('option');
    option2.setAttribute('value', 'value2')
    let option2Text = document.createTextNode('Corral');
    option2.appendChild(option2Text);
    
    let option3 = document.createElement('option');
    option3.setAttribute('value', 'value3')
    let option3Text = document.createTextNode('Lanco');
    option3.appendChild(option3Text);

    let option4 = document.createElement('option');
    option4.setAttribute('value', 'value4')
    let option4Text = document.createTextNode('Los Lagos');
    option4.appendChild(option4Text);

    let option5 = document.createElement('option');
    option5.setAttribute('value', 'value5')
    let option5Text = document.createTextNode('Mafil');
    option5.appendChild(option5Text);

    let option6 = document.createElement('option');
    option6.setAttribute('value', 'value6')
    let option6Text = document.createTextNode('Mariquina');
    option6.appendChild(option6Text);

    let option7 = document.createElement('option');
    option7.setAttribute('value', 'value7')
    let option7Text = document.createTextNode('Paillaco');
    option7.appendChild(option7Text);

    let option8 = document.createElement('option');
    option8.setAttribute('value', 'value8')
    let option8Text = document.createTextNode('Panguipulli');
    option8.appendChild(option8Text);

    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);


    let selectContenedor = document.getElementById('select-contenedor');
    selectContenedor.appendChild(select);
    
}   

window.onload = init;