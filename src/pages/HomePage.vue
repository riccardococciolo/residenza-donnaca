<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <section class="position-relative d-flex">
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
    <section class="position-relative">
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
                            Villa Aurelia ti accoglie a Ioppolo vicino al mare cristallino, offre relax con terrazza vista mare, cucina attrezzata e giardino con barbecue. Ideale per famiglie, coppie e chi cerca benessere...
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
    top: 50px;
}

.villas {

    img {
        width: 500px;
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