<script>

import SingleBeach from '../components/SingleBeach.vue'

export default {
    data() {
        return {
            beaches: [
                { img: "src/assets/img/cuppo.jpg", name: "SAGRA DEL PESCE AZZURRO", link: "https://maps.app.goo.gl/UoyzmJCFhkhKG5qD7", city: "PARGHELIA", description: "Ogni anno, Parghelia celebra il suo tesoro del mare con la Sagra del Pesce Azzurro. Un tripudio di sapori, profumi e tradizioni in un borgo suggestivo. Degustazioni di piatti tipici, musica dal vivo e artigianato locale per un'esperienza indimenticabile. Un evento per tutti, tra mare e cultura calabrese." },
                { img: "src/assets/img/pitta.jpg", name: "SAGRA DA PITTA CHINA", link: "https://maps.app.goo.gl/tyUB9u4Qd8gb6iJXA", city: "SAN COSTANTINO", description: "La Sagra della Pitta 'China' è un evento annuale che celebra la cultura e la gastronomia di San Costantino. Durante la festa, le persone si riuniscono per gustare la pitta 'china', un piatto tradizionale preparato con ingredienti locali. Questa focaccia o pane piatto è arricchita con olive, pomodori, formaggi e erbe aromatiche tipiche della cucina locale. Oltre alla degustazione delle pitte, la festa offre spettacoli folcloristici, musica tradizionale e mercatini con prodotti tipici." },
                { img: "src/assets/img/suriaca.jpg", name: "SAGRA DA SUJACA", link: "https://maps.app.goo.gl/3qPaTjk1JzthR5j86", city: "CARIA", description: 'Ogni 6 agosto a Caria, in Calabria, la Sagra da Sujaca celebra il fagiolo "sujaca", con degustazioni in pignate di terracotta e piatti tipici locali. Musica, balli e spettacoli allietano la serata in un\'atmosfera di festa e tradizione. Un\'esperienza da non perdere per gli amanti del buon cibo e della cultura calabrese.' },
                { img: "src/assets/img/nduja.jpg", name: "SAGRA DELLA NDUJA", link: "https://maps.app.goo.gl/oRUgqBG2dLL7r4ns7", city: "SPILINGA", description: "La Sagra della Nduja di Spilinga è un evento culinario che celebra uno dei prodotti gastronomici più famosi della Calabria: la nduja. Si tratta di una salsiccia unica nel suo genere, preparata con carne di maiale, peperoncino piccante e spezie aromatiche. Durante la festa, i visitatori possono assaggiare e acquistare questa prelibatezza locale, gustandola da sola o abbinandola a prodotti tipici come il pane casareccio o formaggi freschi." },
                { img: "src/assets/img/vino.avif", name: "SAGRA DEL VINO", link: "https://maps.app.goo.gl/qr3KNBbVEme3Qd5X7", city: "BRATTIRÓ", description: "Ogni 10 agosto, il borgo di Brattirò, in provincia di Vibo Valentia, si anima per la Sagra del Vino, un evento che celebra la secolare tradizione vitivinicola della zona. Protagonista indiscussa della sagra è il vino locale, prodotto con uve coltivate sulle colline che circondano il borgo. Amanti del vino e delle tradizioni, non perdetevi questo evento!" },
                { img: "src/assets/img/d812e7.jpg", name: "SAGRA DELLA CIPOLLA ROSSA", link: "https://maps.app.goo.gl/JSqdQFoPKbkpfUFaA", city: "RICADI", description: "Ogni anno Ricadi ospita la Sagra della Cipolla Rossa di Tropea, un evento enogastronomico dedicato a questo prodotto tipico d'eccellenza che vanta il marchio IGP. La sagra è un'occasione unica per degustare la cipolla rossa di Tropea in tutte le sue salse: fritta, cruda, caramellata e in mille altre ricette creative. I visitatori possono assaporare la cipolla in piatti tipici come la \"cipolla imbottita\", la \"salsiccia con la cipolla\" e la \"pizza alla cipolla\", accompagnati da un buon bicchiere di vino locale." },
                { img: "src/assets/img/pane.jpg", name: "SAGRA DEL PANE", link: "https://maps.app.goo.gl/VAeipETSrhNtzjxs6", city: "STEFANACONI", description: "Il piccolo borgo di Stefanaconi, in Calabria, si trasforma in un paradiso per gli amanti del pane con la Sagra del Pane, un evento gastronomico dedicato a questo prodotto semplice ma fondamentale della tradizione culinaria calabrese. Protagonista indiscussa della sagra è il pane di Stefanaconi, un pane cotto nel forno a legna con un impasto a base di farina di grano duro, lievito madre, sale e acqua. La sua crosta croccante e la sua mollica morbida lo rendono un vero e proprio capolavoro di gusto, perfetto da gustare da solo o accompagnato da salumi, formaggi e verdure." },
                { img: "src/assets/img/cipolla.jpg", name: "TROPEA CIPOLLA PARTY", link: "https://maps.app.goo.gl/zo5eMAt6rFG8DkR86", city: "PARGHELIA", description: "Il Tropea Cipolla Party è un festival enogastronomico che si svolge ogni anno a Parghelia, in Calabria, nel mese di agosto. La manifestazione, giunta alla sua quinta edizione, celebra la cipolla rossa di Tropea, un prodotto IGP conosciuto e apprezzato in tutto il mondo per il suo sapore dolce e delicato. Durante il festival i visitatori possono immergersi in un vortice di sapori e tradizione. Oltre alle degustazioni, il Tropea Cipolla Party offre un ricco programma di eventi: show cooking con maestri della cucina, laboratori del gusto per imparare a preparare piatti a base di cipolla, musica dal vivo, spettacoli di danza e folklore, mostre artigianali e aree dedicate ai prodotti tipici calabresi." },
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