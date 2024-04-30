<script>

import { DateTime } from 'luxon';

export default {
    props: {
        type: String,
        img: String,
        date: String,
        name: String,
        link: String,
        city: String,
        time: Object,
    },
    data() {
        return {
            imgPath: "",
            now: DateTime.now(),
        }
    },
    methods: {
        getDecorationPath(img) {
            return new URL(img, import.meta.url).href
        },
        isPastDate(time) {
            const { month, day } = DateTime.now().toObject();
            return time.month < month && time.day <= day;
        },
        isActualDate(time) {
            const { month, day } = DateTime.now().toObject();
            return time.month === month && time.day === day;
        }
    },
    computed: {
        getImgPath() {
            return new URL(this.img, import.meta.url).href
        },
        pastDate() {
            return this.isPastDate(this.time)
        },
        actualDate() {
            return this.isActualDate(this.time);
        }
    },
    mounted() {
        this.imgPath = this.getImgPath;
    },
}
</script>

<template>
    <div class="box d-flex flex-column justify-content-between align-items-center position-relative"
        :style="{ backgroundImage: 'url(' + imgPath + ')' }">
        <div :class="{ 'overlay d-block': pastDate, 'highlighted d-block': actualDate }" class="none"></div>
        <img class="position-absolute decoration" :src="getDecorationPath('../assets/img/Layer 4 5 (1).webp')" alt="">
        <h2 class="text-center">{{ type }}</h2>
        <div class="d-flex flex-column text-white align-items-center">
            <span class="index pb-2">{{ date }}</span>
            <p>{{ name }}</p>
        </div>
        <div class="d-flex flex-column align-items-center gap-3 text-white">
            <p>{{ city }}</p>
            <router-link to="/events" class="button"><span class="">DETTAGLI</span></router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.none {
    display: none;
}

.overlay {
    background-color: rgb(0, 0, 0, .5);
    width: 100%;
    height: 100% !important;
    top: 0px;
    height: 0px;
    position: absolute;
    z-index: 888;
}

.highlighted {
    background-color: rgb(255, 255, 255, .1);
    border: 5px solid #587E52;
    width: 100%;
    height: 100% !important;
    top: 0px;
    height: 0px;
    position: absolute;
    z-index: 888;
}

.box {
    position: relative;
    height: 500px;
    width: 310px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 30px;

    h2 {
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        color: white;
        font-size: 3rem;
        font-weight: 100;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }

    p {
        max-width: 200px;
        word-wrap: break-word;
        text-align: center;
        font-size: 1.5rem;
        font-style: mixed;
        line-height: 25px;
        font-weight: 100;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
    }

    span {
        font-size: 1.2rem;
        font-weight: 100;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }

    .index {
        font-family: "Imbue", serif;
        font-size: 3rem;
    }

    .decoration {
        top: 35px;
    }

    .button {
        padding: 8px 30px;
        border: 1px solid rgb(213, 213, 213);
        transition: background-color 0.5s ease-in-out;
        backdrop-filter: blur(6px);
        z-index: 9999;

        &:hover {
            background-color: #587E52;
            color: white;
        }
    }

    a {
        text-decoration: none;
        color: white;
    }
}
</style>