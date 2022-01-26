console.log('vue ok', Vue);

/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        message: 'Hello Vue.Js!',
        media: 'https://www.facciabuco.com/grafica/vignette/preview_big/toy-story-ovunque.jpg',
    }
});
