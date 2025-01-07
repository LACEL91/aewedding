var invitados = {
    // Andrea

    'lety': {
        miembros: [
            'Leticia García Gómez',
            'Carlos Hernández Padilla',
            'Mariana Hernández García',
            'Diego Cedano',
            'Carlos Alberto Hernández García'
        ],
        asistencia: 1
    },
    'alfredo': {
        miembros: [
            'Alfredo García Rodriguez',
            'Nataly Rivas'
        ],
        asistencia: 1
    },
    'sara': {
        miembros: [
            'Alfredo García Gómez',
            'Fátima Saraí García Gómez',
            'Leonardo Árias'
        ],
        asistencia: 1
    },
    'mago': {
        miembros: [
            'Margarita García Gómez',
            'Guadalupe López García',
            'Samanta Muñóz López',
            'Nicol Muñóz López',
            'Misael Muñóz López',
            'Alejandro López García',
            'Carlos López García',
            'Adriana Gutierrez'
        ],
        asistencia: 0
    },
    'miguel': {
        miembros: [
            'Miguel Ángel López García',
            'Nayeli Cinthya',
            'Alexia Lopez',
            'Danna López',
            'Julieta López'
        ],
        asistencia: 1
    },
    'carmen': {
        miembros: [
            'Cármen García Gómez',
            'Madre Martha Laura'
        ],
        asistencia: 1
    },
    'lucio': {
        miembros: [
            'Lucio García Gómez',
            'Cecilia Figueroa Romo'
        ],
        asistencia: 1
    },
    'arael': {
        miembros: [
            'Ángel García Gómez',
            'Lourdes Murillo Navarro',
            'Ángel Arael García Murillo',
            'Adriana Valeria García Murillo'
        ],
        asistencia: 1
    },
    'tere': {
        miembros: [
            'Jorge Valdez',
            'Teresa Fregoso',
            'Angelica Valdez',
            'Arisbeth',
            'Jose',
            'Jorge Valdez'
        ],
        asistencia: 0
    },
    'blanca': {
        miembros: [
            'Blanca Valdez',
            'Juan Garcia',
            'Jade García',
            'Ambar García Valdéz'
        ],
        asistencia: 0
    },
    'delia': {
        miembros: [
            'Delia Santillan',
            'Oscar Luna',
            'Juan Pablo Luna'
        ],
        asistencia: 1
    },
    'madres': {
        miembros: [
            'Madre Lourdes',
            'Madre Hilda',
            'Madre Arcelia'
        ],
        asistencia: 0
    },
    'mario': {
        miembros: [
            'Mario Alexis Serrano',
            'Marcela B. Viniegra',
            'Sophia Serrano'
        ],
        asistencia: 1
    },
    'cacho': {
        miembros: [
            'Arturo Cacho',
            '+ 1 invitado'
        ],
        asistencia: 0
    },
    'ramon': {
        miembros: [
            'Ramón Díaz',
            '+ 1 invitado'
        ],
        asistencia: 1
    },
    'juanpablo': {
        miembros: [
            'Juan Pablo Gonzalez',
            '+ 1 invitado'
        ],
        asistencia: 1
    },
    'gaby': {
        miembros: [
            'Gabriela Serrano Gómez',
            'Katia Ramírez',
            'Lizeth Ramírez',
            'Alisson'
        ],
        asistencia: 1
    },

    // Efrain

    'antoniocortes': {
        miembros: [
            'Antonio Cortés Hernández',
            'Valeria Torres Landino',
        ],
        asistencia: 1
    },
    'omarreynoso': {
        miembros: [
            'Omar Reynoso García',
            'Athziry Lizette Quirarte Ramírez',
        ],
        asistencia: 0
    },
    'memogarcia': {
        miembros: [
            'Germán Guillermo García de la Cruz',
            '+ 1 invitado',
        ],
        asistencia: 0
    },
};


let urlParams = new URLSearchParams(window.location.search);
let inv = urlParams.get('inv');
let formInvitados = document.getElementById('form-invitados');
formInvitados.style = "text-align: left"

if(invitados[inv] == undefined) {
    document.getElementById('rsvp').style.display = 'none';
} else {
    let miembros = invitados[inv]['miembros'];
    let asistencia = invitados[inv]['asistencia'];

    for (let j = 0; j < miembros.length; j++) {
        let invitado = miembros[j];
    
        const div = document.createElement("div");
        div.className = "mb-3";
    
        const label = document.createElement("label");
        label.className = "form-check-label font-weight-normal";
        label.style = "font-size: 15px"
        label.textContent = '• ' + invitado;
    
        div.appendChild(label);
        formInvitados.appendChild(div);
    }

    switch (asistencia) {
        case 0:
            document.getElementById('confirmar-asistencia').style.display = 'block';
            break;

        case 1:
            document.getElementById('cancelar-asistencia').style.display = 'block';
            break;

        case 2:
            document.getElementById('asistencia-cancelada').style.display = 'block';
            break;
    
        default:
            document.getElementById('confirmar-asistencia').style.display = 'block';
            break;
    }
}

