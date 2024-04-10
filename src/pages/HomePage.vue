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
                    <h2>Che cosa facciamo ?</h2>
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
    background-image: url(../assets/img/beautiful-italian-town-of-tropea-wallpaper.jpg);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

.hero-2 {
    width: 50vw;
    height: 100vh;
    background-image: url(../assets/img/beautiful-italian-town-of-tropea-wallpaper.jpg);
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
    background-image: url(../assets/img/praia-i-focu-970x485.jpg);
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
</style>