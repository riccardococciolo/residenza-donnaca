<script>

import SingleBeach from '../components/SingleBeach.vue'

export default {
    data() {
        return {
            beaches: [
                { img: "src/assets/img/coccorino.webp", center: "38.68524932861328,15.92061710357666", zoom: "14", name: "SPIAGGIA DI COCCORINO", link: "https://storage.googleapis.com/maps-solutions-6tbm68xsmz/locator-plus/kijz/locator-plus.html", city: "COCCORINO", description: "La spiaggia di Coccorino è quella sottostante la nostra struttura, precisamente a 200 metri. La spiaggia è denominata Le Saline, nella Baia del Corsaro. Molto tempo addietro in questa zona c\’erano delle saline, per la produzione di sale è una spiaggia in parte sabbiosa ed in parte con sassi di piccole e medie dimensioni." },
                { img: "src/assets/img/santa maria.jpg", center: "ggf", zoom: "gfg", name: "SPIAGGIA DI SANTA MARIA", link: "https://storage.googleapis.com/maps-solutions-6tbm68xsmz/locator-plus/8cwa/locator-plus.html", city: "SANTA MARIA", description: "La Spiaggia Santa Maria di Ricadi è situata a sud del promontorio di Capo Vaticano nella baia omonima, l\’antico Porto Ercole. Si tratta di una splendida spiaggia di sabbia bianca, incastonata in una baia che è tutto un susseguirsi di calette e pittoresche insenature. Ad una estremità è delimitata dal costone roccioso di Torre Santa Maria, ove il tempo pare essersi fermato, all\’altra estremità dall\’area di Porticello, con la Grotta dell\’Aspide e gli scogli della Galea. Di rara suggestione anche il mare, turchese, cristallino e trasparente, con fondali marini ricchi di gorgonie fiorite." },
                { img: "src/assets/img/spiaggia di grotticelle.webp", center: "gfg", zoom: "gf", name: "SPIAGGIA DI GROTTICELLE", link: "https://maps.app.goo.gl/3qPaTjk1JzthR5j86", city: "CAPO VATICANO", description: 'La spiaggia di grotticelle si trova a 3,5 km dalla nostra struttura. Si tratta di una delle spiagge più belle d’italia, infatti il noto portale sky sanner nel 2015 l’ha messa al primo posto nella sua speciale classifica, per bellezza e per mare pulito. La spiaggia di Grotticelle è costituita da tre piccole spiagge di sabbia chiara e sottile lambite da un mare azzurro e cristallino. Il fondale sabbioso davanti alla spiaggia diventa invece roccioso intorno agli scogli, e ospita una ricca e variegata flora e fauna subacquea, per questo motivo è particolarmente apprezzato dagli amanti dello snorkeling e da chi pratica immersioni.' },
                { img: "src/assets/img/praia i focu.jpg", center: "gf", zoom: "gf", name: "PRAIA I FOCU", link: "https://maps.app.goo.gl/oRUgqBG2dLL7r4ns7", city: "CAPO VATICANO", description: "Le vacanza in Calabria si fanno per le meravigliose spiagge, tra quelle più incontaminate troviamo “Praia i Focu” uno degli angoli più affascinanti in assoluto, dove il verde della natura contrasta l’azzurro turchese del limpidissimo mare. È raggiungibile solo via mare, con i tanti charter che partono giornalmente ed è assolutamente imperdibile." },
                { img: "src/assets/img/tono.jpg", center: "gf", zoom: "gf", name: "SPIAGGIA DEL TONO", link: "https://maps.app.goo.gl/qr3KNBbVEme3Qd5X7", city: "CAPO VATICANO", description: "La spiaggia del Tono si trova a 6 km dalla nostra struttura. E’ una grandissima spiaggia con sabbia bianchissima e mare cristallino, dotata inoltre di tutti i servizi e comodità. Si affaccia su mare aperto con una visuale diretta su Stromboli e il resto delle Isole Eolie. Poiché non è racchiusa in una conca, la spiaggia del Tono è caratterizzata da un mare molto limpido che non ha zone di ristagno o rallentamento della corrente, questa caratteristica presenta quindi scenari sempre completamente diversi a seconda delle correnti predominanti, rendendola così una delle spiagge più affascinanti della zona." },
                { img: "src/assets/img/torre marino.jpg", center: "gf", zoom: "gf", name: "SPIAGGIA DI TORRE MARINO", link: "https://maps.app.goo.gl/JSqdQFoPKbkpfUFaA", city: "SAN NICOLÓ", description: "Incastonata lungo la costa calabra, la spiaggia di Torre Marino è un tesoro nascosto che affascina i visitatori con la sua bellezza incontaminata e l'atmosfera tranquilla. Situata nel comune di Ricadi, questa spiaggia è rinomata per le sue acque cristalline, la sabbia soffice e dorata e le viste mozzafiato sul Mar Tirreno. Avvicinandosi alla spiaggia di Torre Marino, la distesa scintillante del mare azzurro si apre davanti a voi, invitandovi a immergervi nel suo abbraccio rinfrescante. Il litorale è adornato da una sabbia soffice e dorata che accarezza delicatamente i piedi, invitandovi a passeggiare lungo le rive tranquille." },
                { img: "src/assets/img/formicoli.jpg", center: "gf", zoom: "gf", name: "SPIAGGIA DI FORMICOLI", link: "https://maps.app.goo.gl/VAeipETSrhNtzjxs6", city: "SANTA DOMENICA", description: "La spiaggia di Formicoli, situata a Santa Domenica in Calabria, è una gemma nascosta nota per le sue acque cristalline e la sabbia dorata. Circondata da una vegetazione rigogliosa e scogliere spettacolari, offre un ambiente tranquillo e suggestivo per rilassarsi e godersi il mare. Le acque sono ideali per il nuoto e lo snorkeling grazie alla loro limpidezza e alla ricchezza di flora e fauna marina. La spiaggia è rinomata anche per i suoi tramonti mozzafiato, che regalano momenti indimenticabili ai visitatori. La sua posizione appartata la rende perfetta per coloro che cercano una destinazione autentica e lontana dalla folla delle spiagge più turistiche." },
                { img: "src/assets/img/riaci.jpg", center: "gf", zoom: "gf", name: "SPIAGGIA DI RIACI", link: "https://maps.app.goo.gl/zo5eMAt6rFG8DkR86", city: "SANTA DOMENICA", description: "Si trova a circa 10 chilometri dalla nostra struttura, e a poco meno di un paio di chilometri dalla stupenda Tropea. A Riaci in poco meno di 500 metri è possibile trovare sia la spiaggia di sabbia finissima e bianca sia sia il litorale frastagliato con piccole insenature dove stare in relax e lontani dalla confusione. Assolutamente da non perdere poi l’escursione sul piccolo isolotto che si collega con un istmo alla spiaggia." },
            ]
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
            <div class="border-top py-3 position-relative" v-for="beach in beaches">
                <SingleBeach :beach="beach" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
    width: 100%;
    height: 50vh;
    background-image: url("../assets/img/francesco-liotti-JZ-CyD5uiv0-unsplash\ 1.png");
    background-size: cover;
    background-position: center;
    flex-wrap: wrap;
    align-items: end;

    h2 {
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        color: white;
        font-size: 4rem;
        font-weight: 100;
    }
}
</style>