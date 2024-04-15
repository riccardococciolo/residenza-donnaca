<script>

import SingleEvent from '../components/SingleEvent.vue';

export default {
    data() {
        return {
            events: [
                { type: "SAGRA", img: "src/assets/img/cuppo.jpg", date: "3 AGOSTO", name: "SAGRA DEL PESCE AZZURRO", link: "...", city: "PARGHELIA", num: "01", description: "" },
                { type: "SAGRA", img: "src/assets/img/pitta.jpg", date: "5 AGOSTO", name: "SAGRA DA PITTA CHINA", link: "...", city: "SAN COSTANTINO", num: "02", description: "" },
                { type: "SAGRA", img: "src/assets/img/suriaca.jpg", date: "6 AGOSTO", name: "SAGRA DA SUJACA", link: "...", city: "CARIA", num: "03", description: "" },
                { type: "SAGRA", img: "src/assets/img/nduja.jpg", date: "8 AGOSTO", name: "SAGRA DELLA NDUJA", link: "...", city: "SPILINGA", num: "04", description: "" },
                { type: "SAGRA", img: "src/assets/img/vino.avif", date: "10 AGOSTO", name: "SAGRA DEL VINO", link: "...", city: "BRATTIRÓ", num: "05", description: "" },
                { type: "SAGRA", img: "src/assets/img/d812e7.jpg", date: "13 AGOSTO", name: "SAGRA DELLA CIPOLLA ROSSA", link: "...", city: "RICADI", num: "06", description: "" },
                { type: "SAGRA", img: "src/assets/img/pane.jpg", date: "18 AGOSTO", name: "SAGRA DEL PANE", link: "...", city: "STEFANACONI", num: "07", description: "" },
                { type: "FESTA", img: "src/assets/img/cipolla.jpg", date: "20 AGOSTO", name: "TROPEA CIPOLLA PARTY", link: "...", city: "PARGHELIA", num: "08", description: "" },
            ]
        }
    },
    components: { SingleEvent }
}
</script>

<template>
    <div>
        <div class="wrapper d-flex py-4 px-5">
            <h2>EVENTI</h2>
        </div>
        <div class="container py-5">
            <div class="border-top py-3 position-relative" v-for="event in events">
                <img src="../assets/img/Layer 4 1.png" alt="">
                <SingleEvent :type="event.type" :img="event.img" :date="event.date" :name="event.name"
                    :link="event.link" :city="event.city" :num="event.num" :description="event.description" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 50vh;
    background-image: url("../assets/img/Mask group (2).png");
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

img {
    position: absolute;
    top: 60px;
    left: -100px;
}
</style>