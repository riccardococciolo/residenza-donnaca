<script>
export default {
    props: {
        villa: Object,
    },
    data() {
        return {
            currentSlide: 0,
            zoom: false,
            autoPlayInterval: null,
            autoPlayActive: true,
        }
    },
    methods: {
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.villa.gallery.length) % this.villa.gallery.length;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.villa.gallery.length;
        },
        getImgPath(img) {
            return new URL(img, import.meta.url).href
        },
        toggleZoom() {
            return this.zoom = !this.zoom;
        },
        startAutoPlay() {
            this.autoPlayActive = true;
            if (this.autoPlayActive) {
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            }
        },
        stopAutoPlay() {
            this.autoPlayActive = false;
            clearInterval(this.autoPlayInterval);
        },
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeDestroy() {
        this.stopAutoPlay();
    }
}
</script>

<template>
    <div class="position-relative">
        <div class="wrapper d-flex py-lg-4 px-lg-5" :style="{ backgroundImage: 'url(' + villa.img + ')' }">
            <h2>{{ villa.name }}</h2>
            <span class="button mb-4"><a :href="villa.link">PRENOTA SUBITO!</a></span>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6 col-12 pb-5 text-center text-lg-start position-relative">
                    <img class="decoration d-md-none" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
                    <h3 class="py-5 pb-lg-4">DESCRIZIONE</h3>
                    <p class="">{{ villa.description }}</p>
                </div>
                <div class="col-3 pb-5 d-none d-lg-block">
                </div>
                <div class="col-12 col-lg-3 pb-5 text-center text-lg-start position-relative">
                    <img class="decoration d-md-none" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
                    <h3 class="py-5 pb-lg-4">TIPOLOGIA</h3>
                    <div class="row">
                        <div v-for="(type, index) in villa.types" class="col-12 d-flex align-items-center ps-5 ps-lg-1">
                            <span class="fs-5"><i :class="type.icon"></i></span>
                            <span class="ps-2 fs-5">{{ type.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 position-relative gallery-wrapper pb-4">
                    <img class="decoration d-md-none" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
                    <h3 class="py-5 text-center text-lg-start text-white">GALLERIA</h3>
                    <div class="carousel justify-content-center align-items-center pb-4" :class="{ 'zoom': zoom }">
                        <div class="position-relative" @mouseover="stopAutoPlay" @mouseout="startAutoPlay">
                            <div v-for="(item, index)  in villa.gallery" :key="index"
                                :class="{ 'active': index === currentSlide }"
                                class="my-carousel-item position-relative">
                                <div class="position-relative">
                                    <img :class="{ 'zoom-img': zoom }" :src="getImgPath(item.img)" alt="">
                                    <span class=" position-absolute top-50 left" :class="{ 'left-zoom': zoom }"
                                        @click="prevSlide"><i
                                            class="fa-solid fa-chevron-right fa-flip-horizontal fa-2xl"></i></span>
                                    <span class=" position-absolute top-50 right" :class="{ 'right-zoom': zoom }"
                                        @click="nextSlide"><i class="fa-solid fa-chevron-right fa-2xl"></i></span>
                                </div>
                            </div>
                            <span @click="toggleZoom()" v-if="!zoom" class=" position-absolute zoom-in"><i
                                    class="fa-solid fa-magnifying-glass-plus fa-lg"></i></span>
                            <span @click="toggleZoom()" v-else class=" position-absolute zoom-out"><i
                                    class="fa-solid fa-magnifying-glass-minus fa-xl"></i></span>
                            <span class=" position-absolute top-50 left" :class="{ 'left-zoom': zoom }"
                                @click="prevSlide"><i
                                    class="fa-solid fa-chevron-right fa-flip-horizontal fa-2xl"></i></span>
                            <span class=" position-absolute top-50 right" :class="{ 'right-zoom': zoom }"
                                @click="nextSlide"><i class="fa-solid fa-chevron-right fa-2xl"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 pb-5 text-center text-lg-start position-relative">
                    <img class="decoration d-md-none" :src="getImgPath('../assets/img/Layer 4 1.webp')" alt="">
                    <h3 class="py-5 pb-lg-4">INFORMAZIONI</h3>
                    <p>{{ villa.info }}</p>
                </div>
                <div class="col-2">

                </div>
                <div class="col-lg-4 col-12 py-5 map">
                    <iframe style="Border:0" load="lazy" allowfullscreen :src="villa.location"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-position-y: 55%;
    background-position-x: 70%;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    &:hover {
        transform: background-image scale(1.2);
    }

    h2 {
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        color: white;
        font-size: 4rem;
        font-weight: 100;
        margin: 0;
        padding-bottom: 1rem;
        width: 100%;
        text-align: center;
    }
}

.decoration {
    position: absolute;
    top: 35px;
    left: 0px;
}

.gallery-wrapper {
    background-color: #587E52;
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
    font-size: 1rem;
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

.row {
    i {
        width: 25px;
    }
}

.carousel {

    display: flex;
    position: initial;
    margin: 0 auto;

    .my-carousel-item {
        display: none;

    }

    .active {
        display: block;
    }

    .my-carousel-item img {
        height: 200px;
        width: 350px;
        object-fit: cover;

        &.zoom-img {
            transform: scale(1);
            transition: width .5s ease-in-out, height .5s ease-in-out;
        }
    }

    span {
        transform: translateY(-50%);
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);


        &.left {
            left: 20px;
        }

        &.right {
            right: 20px;
        }

        &.left-zoom {
            left: 5px;
        }

        &.right-zoom {
            right: 5px;
        }

    }
}

.zoom {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: rgb(0, 0, 0, .7);
    height: 100%;
    width: 100%;
}

.zoom-in {
    display: inline-flex;
    top: 25px;
    right: 10px;
    font-size: .6rem;
    color: rgb(255, 255, 255, .9);
    width: 30px;
    height: 30px;
    background-color: rgb(0, 0, 0, .5);
    justify-content: center;
    align-items: center;
}

p {
    font-size: 1.2rem;
    line-height: 25px;
}

.zoom-out {
    display: inline-flex;
    top: 25px;
    right: 10px;
    font-size: 1rem;
    color: rgb(255, 255, 255, .9);
    width: 40px;
    height: 40px;
    background-color: rgb(0, 0, 0, .5);
    justify-content: center;
    align-items: center;
}

.map {
    display: flex;
    justify-content: center;

    iframe {
        width: 100%;
        height: 100%;
    }
}

@media screen and (min-width: 768px) {

    .gallery-wrapper {
        background-color: white;

        h3 {
            color: black !important;
        }
    }

    .carousel {

        display: flex;
        position: initial;
        margin: 0 auto;

        .my-carousel-item {
            display: none;

        }

        .active {
            display: block;
        }

        .my-carousel-item img {
            height: 300px;
            width: 500px;
            object-fit: cover;

            &.zoom-img {
                width: 90vw;
                height: 45vh;
                max-width: 900px;
                max-height: 600px;
            }
        }

        span {
            transform: translateY(-50%);
            font-size: 1.3rem;
            color: rgb(255, 255, 255, .9);


            &.left {
                left: 20px;
            }

            &.right {
                right: 20px;
            }

            &.left-zoom {
                left: 10px;
            }

            &.right-zoom {
                right: 10px;
            }

        }
    }

    .zoom {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        background-color: rgb(0, 0, 0, .7);
        height: 100%;
        width: 100%;
    }

    .zoom-in {
        display: inline-flex;
        top: 30px;
        right: 30px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }

    .zoom-out {
        display: inline-flex;
        top: 30px;
        right: 15px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }

}

@media screen and (min-width: 992px) {
    .wrapper {
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-position: center;
        background-position-y: 55%;
        flex-wrap: wrap;
        align-items: end;
        justify-content: space-between;
        align-content: end;

        &:hover {
            transform: background-image scale(1.2);
        }

        h2 {
            font-family: "Imbue", serif;
            font-optical-sizing: auto;
            color: white;
            font-size: 4rem;
            font-weight: 100;
            margin: 0;
            width: auto;
            text-align: start;
        }
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
        position: initial;
        margin: 0 auto;

        .my-carousel-item {
            display: none;

        }

        .active {
            display: block;
        }

        .my-carousel-item img {
            height: 400px;
            width: 700px;
            object-fit: cover;

            &.zoom-img {
                width: 90vw;
                height: 90vh;
                max-width: 1920px;
                max-height: 1080px;
            }
        }

        span {
            transform: translateY(-50%);
            font-size: 1.3rem;
            color: rgb(255, 255, 255, .9);


            &.left {
                left: 20px;
            }

            &.right {
                right: 20px;
            }

            &.left-zoom {
                left: 10px;
            }

            &.right-zoom {
                right: 10px;
            }

        }
    }

    .zoom {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        background-color: rgb(0, 0, 0, .7);
        height: 100%;
        width: 100%;
    }

    .zoom-in {
        display: inline-flex;
        top: 30px;
        right: 30px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }

    .zoom-out {
        display: inline-flex;
        top: 30px;
        right: 15px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }
}

@media screen and (min-width: 768px) and (max-height: 450px) {
    .carousel {

        display: flex;
        position: initial;
        margin: 0 auto;

        .my-carousel-item {
            display: none;

        }

        .active {
            display: block;
        }

        .my-carousel-item img {
            height: 300px;
            width: 500px;
            object-fit: cover;

            &.zoom-img {
                width: 90vw;
                height: 90vh;
                max-width: 900px;
                max-height: 600px;
            }
        }

        span {
            transform: translateY(-50%);
            font-size: 1.3rem;
            color: rgb(255, 255, 255, .9);


            &.left {
                left: 20px;
            }

            &.right {
                right: 20px;
            }

            &.left-zoom {
                left: 10px;
            }

            &.right-zoom {
                right: 10px;
            }

        }
    }

    .zoom {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        background-color: rgb(0, 0, 0, .7);
        height: 100%;
        width: 100%;
    }

    .zoom-in {
        display: inline-flex;
        top: 30px;
        right: 30px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }

    .zoom-out {
        display: inline-flex;
        top: 30px;
        right: 15px;
        font-size: 1rem;
        color: rgb(255, 255, 255, .9);
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0, .5);
        justify-content: center;
        align-items: center;
    }
}
</style>