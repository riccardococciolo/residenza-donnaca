<script>

import SingleBeach from '../components/SingleBeach.vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    
    data() {
        return {
            beaches: [
                { img: "../assets/img/coccorino.webp", center: "38.68524932861328,15.92061710357666", zoom: "14", name: "SPIAGGIA DI COCCORINO", link: "https://www.google.com/maps/embed/v1/place?q=coccorino%20beach&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "COCCORINO", description: "La spiaggia di Coccorino è quella sottostante la nostra struttura, precisamente a 200 metri. La spiaggia è denominata Le Saline, nella Baia del Corsaro. Molto tempo addietro in questa zona c\’erano delle saline, per la produzione di sale è una spiaggia in parte sabbiosa ed in parte con sassi di piccole e medie dimensioni." },
                { img: "../assets/img/santa maria.webp", center: "ggf", zoom: "gfg", name: "SPIAGGIA DI SANTA MARIA", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSUmUZ-F1FRMRHToPagl6aek&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "SANTA MARIA", description: "La Spiaggia Santa Maria di Ricadi è situata a sud del promontorio di Capo Vaticano nella baia omonima, l\’antico Porto Ercole. Si tratta di una splendida spiaggia di sabbia bianca, incastonata in una baia che è tutto un susseguirsi di calette e pittoresche insenature. Ad una estremità è delimitata dal costone roccioso di Torre Santa Maria, ove il tempo pare essersi fermato, all\’altra estremità dall\’area di Porticello, con la Grotta dell\’Aspide e gli scogli della Galea. Di rara suggestione anche il mare, turchese, cristallino e trasparente, con fondali marini ricchi di gorgonie fiorite." },
                { img: "../assets/img/spiaggia di grotticelle.webp", center: "gfg", zoom: "gf", name: "SPIAGGIA DI GROTTICELLE", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk8MDlFF0FRMRrA-Vn-kzibc&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "CAPO VATICANO", description: 'La spiaggia di grotticelle si trova a 3,5 km dalla nostra struttura. Si tratta di una delle spiagge più belle d’italia, infatti il noto portale sky sanner nel 2015 l’ha messa al primo posto nella sua speciale classifica, per bellezza e per mare pulito. La spiaggia di Grotticelle è costituita da tre piccole spiagge di sabbia chiara e sottile lambite da un mare azzurro e cristallino. Il fondale sabbioso davanti alla spiaggia diventa invece roccioso intorno agli scogli, e ospita una ricca e variegata flora e fauna subacquea, per questo motivo è particolarmente apprezzato dagli amanti dello snorkeling e da chi pratica immersioni.' },
                { img: "../assets/img/praia i focu.webp", center: "gf", zoom: "gf", name: "PRAIA I FOCU", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrdzd6rJ1FRMRS-awkA4Sxcc&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "CAPO VATICANO", description: "Le vacanza in Calabria si fanno per le meravigliose spiagge, tra quelle più incontaminate troviamo “Praia i Focu” uno degli angoli più affascinanti in assoluto, dove il verde della natura contrasta l’azzurro turchese del limpidissimo mare. È raggiungibile solo via mare, con i tanti charter che partono giornalmente ed è assolutamente imperdibile." },
                { img: "../assets/img/tono.webp", center: "gf", zoom: "gf", name: "SPIAGGIA DEL TONO", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxfb4DzV0FRMRRIAZNmwviM0&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "CAPO VATICANO", description: "La spiaggia del Tono si trova a 6 km dalla nostra struttura. E’ una grandissima spiaggia con sabbia bianchissima e mare cristallino, dotata inoltre di tutti i servizi e comodità. Si affaccia su mare aperto con una visuale diretta su Stromboli e il resto delle Isole Eolie. Poiché non è racchiusa in una conca, la spiaggia del Tono è caratterizzata da un mare molto limpido che non ha zone di ristagno o rallentamento della corrente, questa caratteristica presenta quindi scenari sempre completamente diversi a seconda delle correnti predominanti, rendendola così una delle spiagge più affascinanti della zona." },
                { img: "../assets/img/torre marino.webp", center: "gf", zoom: "gf", name: "SPIAGGIA DI TORRE MARINO", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwbmjlZx2FRMREP6GqlrdEYs&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "SAN NICOLÓ", description: "Incastonata lungo la costa calabra, la spiaggia di Torre Marino è un tesoro nascosto che affascina i visitatori con la sua bellezza incontaminata e l'atmosfera tranquilla. Situata nel comune di Ricadi, questa spiaggia è rinomata per le sue acque cristalline, la sabbia soffice e dorata e le viste mozzafiato sul Mar Tirreno. Avvicinandosi alla spiaggia di Torre Marino, la distesa scintillante del mare azzurro si apre davanti a voi, invitandovi a immergervi nel suo abbraccio rinfrescante. Il litorale è adornato da una sabbia soffice e dorata che accarezza delicatamente i piedi, invitandovi a passeggiare lungo le rive tranquille." },
                { img: "../assets/img/formicoli.webp", center: "gf", zoom: "gf", name: "SPIAGGIA DI FORMICOLI", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_etMbJd2FRMRC_UcrVbRbSA&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "SANTA DOMENICA", description: "La spiaggia di Formicoli, situata a Santa Domenica in Calabria, è una gemma nascosta nota per le sue acque cristalline e la sabbia dorata. Circondata da una vegetazione rigogliosa e scogliere spettacolari, offre un ambiente tranquillo e suggestivo per rilassarsi e godersi il mare. Le acque sono ideali per il nuoto e lo snorkeling grazie alla loro limpidezza e alla ricchezza di flora e fauna marina. La spiaggia è rinomata anche per i suoi tramonti mozzafiato, che regalano momenti indimenticabili ai visitatori. La sua posizione appartata la rende perfetta per coloro che cercano una destinazione autentica e lontana dalla folla delle spiagge più turistiche." },
                { img: "../assets/img/riaci.webp", center: "gf", zoom: "gf", name: "SPIAGGIA DI RIACI", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5ar_JuN3FRMR5gylF_TLj_o&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "SANTA DOMENICA", description: "Si trova a circa 10 chilometri dalla nostra struttura, e a poco meno di un paio di chilometri dalla stupenda Tropea. A Riaci in poco meno di 500 metri è possibile trovare sia la spiaggia di sabbia finissima e bianca sia sia il litorale frastagliato con piccole insenature dove stare in relax e lontani dalla confusione. Assolutamente da non perdere poi l’escursione sul piccolo isolotto che si collega con un istmo alla spiaggia." },
                { img: "../assets/img/tropea.webp", center: "gf", zoom: "gf", name: "MARINA DELL'ISOLA", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0ygDhglxFRMReCy9yws7TqQ&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "TROPEA", description: "Si trova a 12 km circa dalla nostra struttura ed è considerata una delle più belle spiagge della Calabria, grazie alla sua sabbia bianchissima e al mare azzurro trasparente. In particolare, è una delle spiagge più suggestive di Tropea: si trova tra lo scoglio dell’Isola Bella e la Spiaggia della Rotonda e permette di ammirare la splendida vista della Chiesa di Santa Maria." },
                { img: "../assets/img/parghelia.webp", center: "gf", zoom: "gf", name: "SPIAGGIA DEL MICHELINO", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMSEj-vhwFRMRftL2hiNaImo&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "PARGHELIA", description: "La spiaggia del Michelino è un gioiello della costa tirrenica della Calabria, situata tra Tropea e Zambrone. Caratterizzata da sabbia bianca e fine, acque cristalline e fondali bassi, è una meta ideale per le famiglie e gli amanti del mare. Le scogliere circostanti offrono una cornice suggestiva, mentre gli ampi spazi consentono di trovare tranquillità anche nei periodi affollati. I servizi turistici, come bar, ristoranti e strutture ricettive, rendono comoda la permanenza. I tramonti spettacolari completano l'esperienza, regalando momenti di relax e bellezza naturale." },
                { img: "../assets/img/zambrone.webp", center: "gf", zoom: "gf", name: "PARADISO DEL SUB", link: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn8-qUFRlFRMROxxI1uQpFKo&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc", city: "ZAMBRONE", description: "Il Paradiso del Sub è una spiaggia incantevole situata sulla costa della Calabria, famosa per le sue acque cristalline e la ricchezza della vita marina, ideale per gli amanti dello snorkeling e del diving. Le sue caratteristiche fondali offrono un'esperienza unica per esplorare la bellezza sottomarina. Le acque limpide e i colori intensi della vegetazione circostante creano uno scenario mozzafiato, rendendo questa spiaggia una destinazione privilegiata per gli appassionati di attività subacquee e di natura incontaminata. La presenza di strutture e servizi turistici limitati contribuisce a mantenere intatta la sua bellezza selvaggia e autentica." },
            ]
        }
    },
    methods: {
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
    },
    mounted() {
        for (let i = 0; i < this.beaches.length; i++) {
            if (i % 2 === 0) {
                this.rightInAnimation(`#beach-${i}`)
            } else {
                this.leftInAnimation(`#beach-${i}`)
            }
            
        }
    },
    components: { SingleBeach }
}
</script>

<template>
    <div>
        <div class="wrapper d-flex py-4 px-5">
            <h2>SPIAGGIE</h2>
        </div>
        <div class="container py-5">
            <div :id="`beach-${index}`" class="border-top py-3 position-relative" v-for="(beach, index) in beaches">
                <SingleBeach :beach="beach" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 70vh;
    background-image: url("../assets/img/francesco-liotti-jz-cyd5uiv0-unsplash-1.webp");
    background-size: cover;
    background-position-x: -700px;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h2 {
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        color: white;
        font-size: 6rem;
        font-weight: 100;
    }
}

@media screen and (min-width: 992px) {
    .wrapper {
        width: 100%;
        height: 50vh;
        background-image: url("../assets/img/francesco-liotti-jz-cyd5uiv0-unsplash-1.webp");
        background-size: cover;
        background-position: center;
        flex-wrap: wrap;
        align-items: end;
        justify-content: start;

        h2 {
            font-family: "Imbue", serif;
            font-optical-sizing: auto;
            color: white;
            font-size: 4rem;
            font-weight: 100;
        }
    }
}
</style>