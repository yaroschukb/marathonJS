const btn = document.getElementById('btn-kick')
const btnSuper = document.getElementById('btn-superkick')

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}


btn.addEventListener ('click', ()=>{
    console.log('kick')
    changeHP(random (20), character)
    changeHP(random (20), enemy)
})

btnSuper.addEventListener ('click', ()=>{
    changeHP(random (30), enemy)
    btnSuper.disabled=true;

})

function init() {
    renderHP(character)
    renderHP(enemy)
    
}

function renderHP (person){
    renderHPLife (person)
    renderProgressbarHP (person)
}

function renderHPLife (person) {
    person.elHP.innerText = person.damageHP + '/'+ person.defaultHP  
}

function renderProgressbarHP (person) {
    person.elProgressbar.style.width = person.damageHP + '%'  
}

function changeHP (count, person){
    if(person.damageHP<count){
        person.damageHP=0;
        alert(person.name + " проиграл!")
        btn.disabled = true;
    }
    else
       { person.damageHP -= count}

    renderHP(person)
}

function random (num) {
    return Math.ceil(Math.random()*num)
}
init()