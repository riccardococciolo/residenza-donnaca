<script>
export default {
    props: {
        type: String,
        img: String,
        date: String,
        name: String,
        link: String,
    },
    data() {
        return {
        }
    },
    computed: {
        imgPath() {
            return require('@/assets/img/' + this.img);
        }
    }
}
</script>

<template>
    <div class="box d-flex flex-column justify-content-between align-items-center"
        :style="{ backgroundImage: 'url(' + imgPath() + ')' }">
        <img class="position-absolute decoration" src="../assets/img/Layer 4 5 (1).png" alt="">
        <h2 class="text-center">{{ message }}</h2>
        <div class="d-flex flex-column text-white align-items-center">
            <span class="index pb-2">{{ date }}</span>
            <p>{{ name }}</p>
        </div>
        <div class="d-flex flex-column text-white">
            <a :href="link"><span class="button">DETTAGLI</span></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    position: relative;
    height: 500px;
    width: 300px;
    background-repeat: no-repeat;
    background-size: cover;
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

        &:hover {
            background-color: #587E52;
            color: white;
        }
    }
}
</style>