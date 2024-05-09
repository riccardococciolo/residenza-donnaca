<script>
import { DateTime } from 'luxon';
import EventCard from '../components/EventCard.vue'
import { gsap } from '../../node_modules/gsap'
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default {
    data() {
        return {
            events: [
                { type: "SAGRA", img: "../assets/img/cuppo.webp", date: "3 AGOSTO", time: { month: 8, day: 3 }, name: "SAGRA DEL PESCE AZZURRO", link: "...", city: "PARGHELIA" },
                { type: "SAGRA", img: "../assets/img/pitta.webp", date: "5 AGOSTO", time: { month: 8, day: 5 }, name: "SAGRA DA PITTA CHINA", link: "...", city: "SAN COSTANTINO" },
                { type: "SAGRA", img: "../assets/img/suriaca.webp", date: "6 AGOSTO", time: { month: 8, day: 6 }, name: "SAGRA DA SUJACA", link: "...", city: "CARIA" },
                { type: "SAGRA", img: "../assets/img/nduja.webp", date: "8 AGOSTO", time: { month: 8, day: 8 }, name: "SAGRA DELLA NDUJA", link: "...", city: "SPILINGA" },
                { type: "SAGRA", img: "../assets/img/vino.webp", date: "10 AGOSTO", time: { month: 8, day: 10 }, name: "SAGRA DEL VINO", link: "...", city: "BRATTIRÓ" },
                { type: "SAGRA", img: "../assets/img/d812e7.webp", date: "13 AGOSTO", time: { month: 8, day: 13 }, name: "SAGRA DELLA CIPOLLA ROSSA", link: "...", city: "RICADI" },
                { type: "SAGRA", img: "../assets/img/pane.webp", date: "18 AGOSTO", time: { month: 8, day: 18 }, name: "SAGRA DEL PANE", link: "...", city: "STEFANACONI" },
                { type: "FESTA", img: "../assets/img/cipolla.webp", date: "20 AGOSTO", time: { month: 8, day: 20 }, name: "TROPEA CIPOLLA PARTY", link: "...", city: "PARGHELIA" },
            ],
            decorationPath: '../assets/img/group-15.webp'
        }
    },
    methods: {
        getImgPath(img) {
            return new URL(img, import.meta.url).href
        },
        isPastDate(time) {
            const { month, day } = DateTime.now().toObject();
            return time.month < month && time.day <= day;
        },
        eventScroll(events) {
            let pastEvent = 0;

            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            events.forEach(event => {
                if (this.isPastDate(event.time)) {
                    pastEvent++
                }
            });

            if (pastEvent > 0 && isMobile) {
                document.getElementById("events").scrollLeft = 310 * pastEvent;
            } else {
                document.getElementById("events").scrollLeft = 310 * (pastEvent - 1);
            }
        },
        rightInAnimation(selector) {
            gsap.from(selector, {
                x: 500,
                duration: 2,
                ease: 'power3.out',
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: selector,
                }
            })
        },
        leftInAnimation(selector) {
            gsap.from(selector, {
                x: -500,
                duration: 2,
                ease: 'power3.out',
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: selector,
                }
            })
        },
        breckText() {
            let splittedText = document.querySelector('h1').textContent.split("");

            let clutter = ""

            splittedText.forEach(function(elem) {
                clutter += `<span class="d-inline-block" style="min-width: 2vw;">${elem}</span>`
            });

            document.querySelector('h1').innerHTML = clutter;

        },
        titleAnimation() {
            const random = gsap.utils.random(-100, 100, true);

            gsap.from('h1 span', {
                x: "random(-150, 150, 5)",
                y: "random(-150, 150, 5)",
                duration: 2,
                autoAlpha: 0,
                rotation: random,
                delay: 0,
                ease: 'power3.out',
                stagger: .1,

            })
        }
    },
    computed: {
    },
    mounted() {
        this.eventScroll(this.events);
        this.rightInAnimation('#villa-dei-pini');
        this.leftInAnimation('#villa-aurelia');
        this.rightInAnimation('#spiaggia-coccorino');
        this.leftInAnimation('#spiaggia-grotticelle');
        this.rightInAnimation('#spiaggia-tono');
        this.breckText();
        this.titleAnimation();
    },
    components: { EventCard }
}
</script>

<template class="overflow-x-hidden">
    <section class="position-relative d-flex hero">
        <h1 class="py-3 position-absolute translate-middle w-100 text-center">RESIDENZA DONNA CÀ</h1>
        <div class="hero-1">
        </div>
        <div class="hero-2"></div>
    </section>
    <section>
        <div class="my-container d-flex flex-column">
            <img :src="getImgPath(decorationPath)" alt="">
            <p class="py-4 m-0"><strong>Sogni un rifugio di pace e bellezza dove vivere una vacanza da
                    sogno?</strong><br>
                Residenza Donnaca ti accoglie nel cuore della Costa degli Dei, a Capo Vaticano, in Calabria, con le sue
                due incantevoli villette: Villa Aurelia e Villa dei Pini.</p>
            <p class="py-4 m-0">Immergiti nella quiete di un'oasi privata, avvolto dal profumo dei pini e accarezzato
                dalla brezza marina. Lasciati conquistare dai panorami mozzafiato sul Mar Mediterraneo, che si aprono
                come un dipinto davanti ai tuoi occhi.</p>
            <img class="reverse" :src="getImgPath(decorationPath)" alt="">
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
        <img class="position-absolute start-0 decoration" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
        <div class="container position-relative villas">
            <div class="d-flex flex-column">
                <div class="">
                    <h2 class="py-5 text-center text-lg-start ps-5">LE NOSTRE VILLE</h2>
                </div>
                <div id="villa-dei-pini" class="border-top border-bottom py-5 row">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
                        <h3>VILLA DEI PINI</h3>
                        <span>JOPPOLO, ITALIA</span>
                    </div>
                    <div class="col-12 d-flex justify-content-center d-lg-none">
                        <img class="py-3" :src="getImgPath('../assets/img/IMG_9912.webp')" alt="">
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-flex">
                        <span class="align-self-start">01</span>
                        <img class="ps-5" :src="getImgPath('../assets/img/IMG_9912.webp')" alt="">
                    </div>
                    <div
                        class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
                        <div class="align-items-center gap-4 d-none d-lg-flex">
                            <h3>VILLA DEI PINI</h3>
                            <span>JOPPOLO, ITALIA</span>
                        </div>
                        <p class=" py-4 col-12 text-center text-lg-start">
                            Villa Dei Pini sorge a Ioppolo e offre sistemazioni climatizzate con patio. Questa struttura
                            fronte mare vanta l'accesso a un balcone, un parcheggio privato gratuito e il WiFi
                            gratuito...
                        </p>
                        <span class="button">
                            <router-link :to="{ name: 'villa dei pini' }" class="">DETTAGLI</router-link>
                        </span>
                    </div>
                </div>
                <div id="villa-aurelia" class="border-top py-5 row">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
                        <h3>VILLA AURELIA</h3>
                        <span>JOPPOLO, ITALIA</span>
                    </div>
                    <div class="col-12 d-flex justify-content-center d-lg-none">
                        <img class="py-3" :src="getImgPath('../assets/img/IMG_9843.webp')" alt="">
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-flex">
                        <span class="align-self-start">02</span>
                        <img class="ps-5" :src="getImgPath('../assets/img/IMG_9843.webp')" alt="">
                    </div>
                    <div
                        class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
                        <div class="align-items-center gap-4 d-none d-lg-flex">
                            <h3>VILLA AURELIA</h3>
                            <span>JOPPOLO, ITALIA</span>
                        </div>
                        <p class=" py-4 col-12 text-center text-lg-start">
                            Villa Aurelia ti accoglie a Ioppolo vicino al mare cristallino, offre relax con terrazza
                            vista mare, cucina attrezzata e giardino con barbecue. Ideale per famiglie, coppie e chi
                            cerca benessere...
                        </p>
                        <span class="button">
                            <router-link :to="{ name: 'villa aurelia' }" class="">DETTAGLI</router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="events" class="overflow-x-auto w-100 d-flex scroll pt-5">
        <div class="" v-for="event in events">
            <EventCard class="" :type="event.type" :img="event.img" :date="event.date" :name="event.name"
                :link="event.link" :city="event.city" :time="event.time" />
        </div>
    </section>
    <section class="position-relative py-5">
        <img class="position-absolute start-0 decoration" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
        <div class="container position-relative villas">
            <div class="d-flex flex-column ">
                <div>
                    <h2 class="py-5  text-center text-lg-start ps-lg-5">SPIAGGIE <br class="d-md-none"> CONSIGLIATE</h2>
                </div>
                <div id="spiaggia-coccorino" class="border-top border-bottom py-5 row">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
                        <h3>SPIAGGIA DI COCCORINO</h3>
                        <span>JOPPOLO, ITALIA</span>
                    </div>
                    <div class="col-12 d-flex justify-content-center d-lg-none">
                        <img class="py-3"
                            :src="getImgPath('../assets/img/WhatsApp Image 2024-04-22 at 12.18.08 (1).webp')" alt="">
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-flex">
                        <span class="align-self-start">01</span>
                        <img class="ps-5"
                            :src="getImgPath('../assets/img/WhatsApp Image 2024-04-22 at 12.18.08 (1).webp')" alt="">
                    </div>
                    <div
                        class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
                        <div class="align-items-center gap-4 d-none d-lg-flex">
                            <h3>SPIAGGIA DI COCCORINO</h3>
                            <span>JOPPOLO, ITALIA</span>
                        </div>
                        <p class=" py-4 col-12 text-center text-lg-start">
                            La spiaggia è denominata Le Saline, nella Baia del Corsaro. Molto tempo addietro in questa
                            zona c’erano delle saline, per la produzione di sale è una spiaggia in parte sabbiosa ed in
                            parte con sassi di piccole e medie dimensioni....
                        </p>
                        <span class="button">
                            <router-link to="/beaches" class="">DETTAGLI</router-link>
                        </span>
                    </div>
                </div>
                <div id="spiaggia-grotticelle" class="border-top border-bottom py-5 row">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
                        <h3>SPIAGGIA DI GROTTICELLE</h3>
                        <span>CAPO VATICANO, ITALIA</span>
                    </div>
                    <div class="col-12 d-flex justify-content-center d-lg-none">
                        <img class="py-3" :src="getImgPath('../assets/img/spiaggia di grotticelle.webp')" alt="">
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-flex">
                        <span class="align-self-start">02</span>
                        <img class="ps-5" :src="getImgPath('../assets/img/spiaggia di grotticelle.webp')" alt="">
                    </div>
                    <div
                        class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
                        <div class="align-items-center gap-4 d-none d-lg-flex">
                            <h3>SPIAGGIA DI GROTTICELLE</h3>
                            <span>CAPO VATICANO, ITALIA</span>
                        </div>
                        <p class=" py-4 col-12 text-center text-lg-start">
                            La spiaggia di Grotticelle è costituita da tre piccole spiagge di sabbia chiara e sottile
                            lambite da un mare azzurro e cristallino. Il fondale sabbioso davanti alla spiaggia diventa
                            invece roccioso intorno agli scogli, e ospita una ricca e variegata flora e fauna
                            subacquea...
                        </p>
                        <span class="button">
                            <router-link to="/beaches" class="">DETTAGLI</router-link>
                        </span>
                    </div>
                </div>
                <div id="spiaggia-tono" class="border-top py-5 row">
                    <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
                        <h3>SPIAGGIA DEL TONO</h3>
                        <span>RICADI, ITALIA</span>
                    </div>
                    <div class="col-12 d-flex justify-content-center d-lg-none">
                        <img class="py-3" :src="getImgPath('../assets/img/tono.webp')" alt="">
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-flex">
                        <span class="align-self-start">03</span>
                        <img class="ps-5" :src="getImgPath('../assets/img/tono.webp')" alt="">
                    </div>
                    <div
                        class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
                        <div class="align-items-center gap-4 d-none d-lg-flex">
                            <h3>SPIAGGIA DEL TONO</h3>
                            <span>RICADI, ITALIA</span>
                        </div>
                        <p class=" py-4 col-12 text-center text-lg-start">
                            E’ una grandissima spiaggia con sabbia bianchissima e mare cristallino, dotata inoltre di
                            tutti i servizi e comodità. Si affaccia su mare aperto con una visuale diretta su Stromboli
                            e il resto delle Isole Eolie...
                        </p>
                        <span class="button">
                            <router-link to="/beaches" class="">DETTAGLI</router-link>
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
    font-size: 15vw;
    font-weight: 90;
    top: 100px;
    left: 50%;
    z-index: 999;
}

.hero-1 {
    width: 50vw;
    height: 60vh;
    background-image: url(../assets/img/beautiful-italian-town-of-tropea-wallpaper.webp);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // transform: rotateY(180deg);
}

.hero-2 {
    width: 50vw;
    height: 60vh;
    background-image: url('../assets/img/praia\ i\ focu.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotateY(180deg);
}

.my-container {
    max-width: 600px;
    width: 80%;
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
        font-size: 1rem;
        font-style: mixed;
        line-height: 25px;
    }
}

.wrapper {
    background-image: url(../assets/img/tropea.webp);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        width: 80%;
        margin: 100px auto;
        background-color: #587E52;
        color: white;

        .subcontainer {
            width: 90%;
            margin: 0 auto;
            word-wrap: break-word;
            text-align: center;

            p {
                font-size: 1rem;
                line-height: 25px;
            }

            h2 {
                font-family: "Imbue", serif;
                font-optical-sizing: auto;
                color: white;
                font-size: 3rem;
                font-weight: 100;
            }
        }
    }
}

.button {
    padding: 10px 40px;
    border: 1px solid rgb(213, 213, 213);
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

    a {
        text-decoration: none;
        color: inherit;
    }

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

@media screen and (min-width: 768px) {
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

@media screen and (min-width: 992px) {
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
        font-size: 11vw;
        font-weight: 90;
        top: 150px;
        left: 50%;
        z-index: 999;
    }

    .hero-1 {
        width: 50vw;
        height: 100vh;
        background-image: url(../assets/img/beautiful-italian-town-of-tropea-wallpaper.webp);
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        // transform: rotateY(180deg);
    }

    .hero-2 {
        width: 50vw;
        height: 100vh;
        background-image: url('../assets/img/praia\ i\ focu.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotateY(180deg);
    }
}
</style>