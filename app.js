let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value.trim();

    if (nombreAmigo === ''){
        alert('porfa ingrese un nombre :)')
        return;
    }

    let nombreLowercase = nombreAmigo.toLowerCase(); 
    if (amigos.some(amigo => amigo.toLowerCase() === nombreLowercase)){
        alert(`el nombre ${nombreAmigo} ya esta en la lista :(`)
        return;
    }

    amigos.push(nombreAmigo);
    console.log(`${nombreAmigo} agregado con exito`);
    document.querySelector('#amigo').value = '';
    actualizarLista();
}


function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let mensaje = document.querySelector('#resultado');
    numeroDeAmigos = amigos.length;
    if (numeroDeAmigos === 0) {
        mensaje.innerHTML = 'no es posible hacer el sorteo por falta de amigos :(';
    } else {
        let indice = Math.floor(Math.random() * numeroDeAmigos);
        console.log(indice);
        mensaje.innerHTML = `el amigo ganador es: ${amigos[indice]}`;
    }
}

function limpiarLista() {
    amigos = [];
    actualizarLista();
    document.querySelector('#resultado').innerHTML = '';
    console.log('Lista limpiada con éxito');
}