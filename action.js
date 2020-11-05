$(document).ready(function(){
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

const colors = ['red', 'green', 'blue'];

const icon_types = []; //Array che avrà length pari al numero di tipologie diverse, contenente le tipologie.

icons.forEach((icon) => {

    // Per ogni icona recupero il suo tipo, destrutturando.
    const {type} = icon;

    // verifico se il tipo dell'icona corrente è già presente nell'array dei tipi, cosi da includere un tipo una sola volta.
    if(!icon_types.includes(type)) {

        icon_types.push(type);

    }

});


icon_types.forEach((type) => {
    // Ciclando in icon_types, per ogni tipo di icona aggiungo una option alla select, in questo caso saranno 3 + l'All type.
    $('#icons-filter').append(`
        <option value="${type}">${type}</option>
    `);

});


print_all_icons(icons);

//Creo una funzione tale da poter stampare tutte le icone, ciclandole e passandole una per volta alla funzione print_icon.
function print_all_icons(icons_array) {
    icons_array.forEach((icon) => { //icon rappresenta l'oggetto corrente interno ad icons_array, nonchè un array fornito dal main.
        print_icon(icon);
    });
}

function print_icon(icon_object) {

    // Destrutturo e recupero le chiavi (proprietà): name, prefix, family e type, cosi da poterle utilizzare direttamente.
    const {name, prefix, family, type} = icon_object;

    // Recupero la posizione relativa alla tipologia di icona, essendo le tipologie 3, tornerà un valore compreso tra 0 e 2.
    const type_index = icon_types.indexOf(type);

    // Recupero il colore in posizione type_index, tale da legare le 3 tipologie di icone con i 3 colori disponibili.
    const icon_color = colors[type_index];

    //Internamente al div relativo all'id: icons-container, compongo un div classe "icon" contenente il tag <i> all'interno dell'#icons-container.
    //Passo alla classe relativa al tag <i>, attraverso $, le proprietà relative all'icona corrente.
    $('#icons-container').append(`
        <div class="icon">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color}"></i>
            <p>${name}</p>
        </div>
    `);
}

})
