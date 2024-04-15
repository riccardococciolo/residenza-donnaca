<script>
import EventCard from '../components/EventCard.vue'

export default {
    data() {
        return {
            events: [
                { type: "SAGRA", img: "src/assets/img/cuppo.jpg", date: "3 AGOSTO", name: "SAGRA DEL PESCE AZZURRO", link: "...", city: "PARGHELIA" },
                { type: "SAGRA", img: "src/assets/img/pitta.jpg", date: "5 AGOSTO", name: "SAGRA DA PITTA CHINA", link: "...", city: "SAN COSTANTINO" },
                { type: "SAGRA", img: "src/assets/img/suriaca.jpg", date: "6 AGOSTO", name: "SAGRA DA SUJACA", link: "...", city: "CARIA" },
                { type: "SAGRA", img: "src/assets/img/nduja.jpg", date: "8 AGOSTO", name: "SAGRA DELLA NDUJA", link: "...", city: "SPILINGA" },
                { type: "SAGRA", img: "src/assets/img/vino.avif", date: "10 AGOSTO", name: "SAGRA DEL VINO", link: "...", city: "BRATTIRÓ" },
                { type: "SAGRA", img: "src/assets/img/d812e7.jpg", date: "13 AGOSTO", name: "SAGRA DELLA CIPOLLA ROSSA", link: "...", city: "RICADI" },
                { type: "SAGRA", img: "src/assets/img/pane.jpg", date: "18 AGOSTO", name: "SAGRA DEL PANE", link: "...", city: "STEFANACONI" },
                { type: "FESTA", img: "src/assets/img/cipolla.jpg", date: "20 AGOSTO", name: "TROPEA CIPOLLA PARTY", link: "...", city: "PARGHELIA" },
            ]
        }
    },
    components: { EventCard }
}
</script>

<template>
    <section class="position-relative d-flex hero">
        <h1 class="py-3 position-absolute start-50 translate-middle">RESIDENZA DONNA CÀ</h1>
        <div class="hero-1">
        </div>
        <div class="hero-2"></div>
    </section>
    <section>
        <div class="my-container d-flex flex-column">
            <img src="../assets/img/Group 15.png" alt="">
            <p class="py-4 m-0"><strong>Sogni un rifugio di pace e bellezza dove vivere una vacanza da sogno?</strong>
                Residenza Donnaca ti accoglie nel cuore della Costa degli Dei, a Capo Vaticano, in Calabria, con le sue
                due incantevoli villette: Villa Aurelia e Villa dei Pini.</p>
            <p class="py-4 m-0">Immergiti nella quiete di un'oasi privata, avvolto dal profumo dei pini e accarezzato
                dalla brezza marina. Lasciati conquistare dai panorami mozzafiato sul Mar Mediterraneo, che si aprono
                come un dipinto davanti ai tuoi occhi.</p>
            <img class="reverse" src="../assets/img/Group 15.png" alt="">
        </div>
    </section>
    <section>
        <div class="wrapper p-1">
            <div class="container p-5 d-flex justify-content-center flex-wrap">
                <div class="subcontainer">
                    <h2>CHE COSA FACCIAMO ?</h2>
                    <p class="pt-3">Residenza Donnaca offre ai suoi ospiti un'oasi di pace e relax, dove ogni dettaglio
                        è curato con
                        amore e dedizione. Dagli ampi spazi esterni di Villa Aurelia, dove ci si può rilassare in
                        giardino e godersi la vista sul mare, al patio di Villa dei Pini, perfetto per cene all'aperto
                        sotto il cielo stellato, ogni angolo della Residenza è pensato per il benessere degli ospiti.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="position-relative py-5">
        <img class="position-absolute start-0 decoration" src="../assets/img/Layer 4 1.png" alt="">
        <div class="container position-relative villas">
            <div class="d-flex flex-column ">
                <div>
                    <h2 class="py-5">LE NOSTRE VILLE</h2>
                </div>
                <div class="d-flex justify-content-between border-top border-bottom py-5">
                    <div class="w-50 d-flex">
                        <span>01</span>
                        <img class="ps-5" src="../assets/img/IMG_9912.JPG" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                        <div class="d-flex align-items-center gap-4">
                            <h3>VILLA DEI PINI</h3>
                            <span>JOPPOLO, ITALIA</span>
                        </div>
                        <p class=" py-4">
                            Villa Dei Pini sorge a Ioppolo e offre sistemazioni climatizzate con patio. Questa struttura
                            fronte mare vanta l'accesso a un balcone, un parcheggio privato gratuito e il WiFi
                            gratuito...
                        </p>
                        <span class="button">
                            DETTAGLI
                        </span>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-5">
                    <div class="w-50 d-flex">
                        <span>02</span>
                        <img class="ps-5" src="../assets/img/IMG_9843.JPG" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                        <div class="d-flex align-items-center gap-4">
                            <h3>VILLA AURELIA</h3>
                            <span>JOPPOLO, ITALIA</span>
                        </div>
                        <p class=" py-4">
                            Villa Aurelia ti accoglie a Ioppolo vicino al mare cristallino, offre relax con terrazza
                            vista mare, cucina attrezzata e giardino con barbecue. Ideale per famiglie, coppie e chi
                            cerca benessere...
                        </p>
                        <span class="button">
                            DETTAGLI
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-x-auto w-100 d-flex scroll pt-5">
        <div class="" v-for="event in events">
            <EventCard class="" :type="event.type" :img="event.img" :date="event.date" :name="event.name"
            :link="event.link" :city="event.city" />
        </div>
    </section>
    <section class="position-relative py-5">
        <img class="position-absolute start-0 decoration" src="../assets/img/Layer 4 1.png" alt="">
        <div class="container position-relative villas">
            <div class="d-flex flex-column ">
                <div>
                    <h2 class="py-5">SPIAGGIE CONSIGLIATE</h2>
                </div>
                <div class="d-flex justify-content-between border-top border-bottom py-5">
                    <div class="w-50 d-flex">
                        <span>01</span>
                        <img class="ps-5" src="../assets/img/coccorino.webp" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                        <div class="d-flex align-items-center gap-4">
                            <h3>SPIAGGIA DI COCCORINO</h3>
                            <span>COCCORINO, ITALIA</span>
                        </div>
                        <p class=" py-4">
                            La spiaggia è denominata Le Saline, nella Baia del Corsaro. Molto tempo addietro in questa zona c’erano delle saline, per la produzione di sale è una spiaggia in parte sabbiosa ed in parte con sassi di piccole e medie dimensioni....
                        </p>
                        <span class="button">
                            DETTAGLI
                        </span>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-5">
                    <div class="w-50 d-flex">
                        <span>02</span>
                        <img class="ps-5" src="../assets/img/grotticelle.webp" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                        <div class="d-flex align-items-center gap-4">
                            <h3>SPIAGGIA DI GROTTICELLE</h3>
                            <span>CAPO VATICANO, ITALIA</span>
                        </div>
                        <p class=" py-4">
                            La spiaggia di Grotticelle è costituita da tre piccole spiagge di sabbia chiara e sottile lambite da un mare azzurro e cristallino. Il fondale sabbioso davanti alla spiaggia diventa invece roccioso intorno agli scogli, e ospita una ricca e variegata flora e fauna subacquea...
                        </p>
                        <span class="button">
                            DETTAGLI
                        </span>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-5 border-top">
                    <div class="w-50 d-flex">
                        <span>03</span>
                        <img class="ps-5" src="../assets/img/tono.JPG" alt="">
                    </div>
                    <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                        <div class="d-flex align-items-center gap-4">
                            <h3>SPIAGGIA DEL TONO</h3>
                            <span>RICADI, ITALIA</span>
                        </div>
                        <p class=" py-4">
                            E’ una grandissima spiaggia con sabbia bianchissima e mare cristallino, dotata inoltre di tutti i servizi e comodità. Si affaccia su mare aperto con una visuale diretta su Stromboli e il resto delle Isole Eolie...
                        </p>
                        <span class="button">
                            DETTAGLI
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.hero::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, transparent, rgb(255, 255, 255, 0.6), rgb(255, 255, 255));
    z-index: 1000;
}

h1 {
    font-family: "Imbue", serif;
    font-optical-sizing: auto;
    color: white;
    font-size: 5rem;
    font-weight: 90;
    top: 80px;
    z-index: 999;
}

.hero-1 {
    width: 50vw;
    height: 100vh;
    background-image: url(../assets/img/IMG-20240410-WA0006.jpg);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

.hero-2 {
    width: 50vw;
    height: 100vh;
    background-image: url(../assets/img/IMG-20240325-WA0021.jpg);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotateY(180deg);
}

.my-container {
    max-width: 600px;
    width: 40%;
    margin: 120px auto;

    img {
        width: 250px;
        align-self: center;
    }

    .reverse {
        transform: rotateX(180deg);
    }

    p {
        max-width: 100%;
        word-wrap: break-word;
        text-align: center;
        font-size: 1.2rem;
        font-style: mixed;
        line-height: 25px;
    }
}

.wrapper {
    background-image: url(../assets/img/IMG-20240410-WA0006.jpg);
    background-attachment: fixed;
    background-size: cover;

    .container {
        width: 80%;
        margin: 100px auto;
        background-color: #587E52;
        color: white;

        .subcontainer {
            width: 60%;
            margin: 0 auto;
            word-wrap: break-word;
            text-align: center;

            p {
                font-size: 1.2rem;
                line-height: 25px;
            }

            h2 {
                font-family: "Imbue", serif;
                font-optical-sizing: auto;
                color: white;
                font-size: 3.5rem;
                font-weight: 100;
            }
        }
    }
}

.button {
    padding: 10px 40px;
    border: 1px solid rgb(213, 213, 213);

    &:hover {
        background-color: #587E52;
        color: white;
    }
}

.decoration {
    top: 90px;
}

.villas {

    img {
        width: 500px;
        height: 270px;
        object-fit: cover;
        object-position: center;
    }

    h2 {
        font-size: 3.3rem;
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        font-weight: 150;
    }

    h3 {
        margin: 0;
        font-size: 2.2rem;
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        font-weight: 150;
    }

    p {
        font-size: 1.2rem;
        line-height: 25px;
    }

    span {
        font-size: 1.4rem;
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        font-weight: 100;
    }


}
</style>