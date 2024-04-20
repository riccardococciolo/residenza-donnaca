<script>
export default {
    data() {
        return {
            items: [
                { img: '../assets/img/cipolla.jpg' },
                { img: '../assets/img/formicoli.jpg' },
                { img: '../assets/img/IMG_9912.JPG' },
                { img: '../assets/img/pane.jpg' },
            ],
            currentSlide: 0,
        }
    },
    methods: {
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.items.length;
        },
        getImgPath(img) {
            return new URL(`${img}`, import.meta.url).href
        },
    }
}
</script>

<template>
    <div>
        <div class="wrapper d-flex justify-content-between py-4 px-5">
            <h2>VILLA AURELIA</h2>
            <span class="button"><a href="">PRENOTA SUBITO!</a></span>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-6 pb-5">
                    <h3>DESCRIZIONE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fugit. Totam provident cum nobis
                        voluptatem, quibusdam quia doloremque ab aut itaque quas, dolor nesciunt voluptate eum ipsa
                        autem, laboriosam culpa.</p>
                </div>
                <div class="col-3 pb-5">
                </div>
                <div class="col-3 pb-5">
                    <h3>TIPOLOGIA</h3>
                    <span>1789 m</span>
                </div>
                <div class="col-6 pb-5">
                    <h3>INFORMAZIONI</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fugit. Totam provident cum nobis
                        voluptatem, quibusdam quia doloremque ab aut itaque quas, dolor nesciunt voluptate eum ipsa
                        autem, laboriosam culpa.</p>
                </div>
                <div class="col-12">
                    <div class="carousel w-100 h-100">
                        <div v-for="(item, index) in items" :key="index" :class="{'active': index === currentSlide}" class="my-carousel-item w-100 h-100">
                            <img class="" :src="getImgPath(item.img)"
                                alt="">
                        </div>
                    </div>
                    <button @click="prevSlide">Previous</button>
                    <button @click="nextSlide">Next</button>
                </div>
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
        margin: 0;
    }
}

h3 {
    font-family: "Imbue", serif;
    font-optical-sizing: auto;
    font-size: 2.4rem;
    font-weight: 100;
    margin: 0;
    padding-bottom: .7rem;
}

.button {
    padding: 8px 30px;
    border: 1px solid rgb(213, 213, 213);
    color: white;
    transition: background-color 0.5s ease-in-out;
    font-size: 1.3rem;
    backdrop-filter: blur(6px);

    &:hover {
        background-color: #587E52;
        color: white;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
}

.carousel {

    display: flex;
    overflow-x: hidden;

    .my-carousel-item {
        flex: 0 0 100%;
        display: none;

    }

    .active {
            display: block;
        }

    .my-carousel-item img {
        height: 400px;
    }
}
</style>