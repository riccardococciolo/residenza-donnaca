<script>


export default {
    props: {
        num: String,
        img: String,
        description: String,
        name: String,
        link: String,
        city: String,
        date: String,
        id: String,
    },
    data() {
        return {

        }
    },
    methods: {
        getImgPath(img) {
            return new URL(this.img, import.meta.url).href
        },
        setSrc(img) {
            document.getElementById('image').src = this.getImgPath(img);
        }
    },
}
</script>

<template>
    <div class="py-5 row">
        <div class="d-flex flex-column align-items-center justify-content-center gap-1 d-lg-none">
            <h3>{{ name }}</h3>
            <span>{{ date }}</span>
        </div>
        <div class="col-12 d-flex justify-content-center d-lg-none">
            <img class="py-3" :src="getImgPath(img)" alt="">
        </div>
        <div class="col-12 col-lg-6 d-none d-lg-flex">
            <span class="align-self-start">{{ num }}</span>
            <img class="ps-5" :src="getImgPath(img)" alt="">
        </div>
        <div
            class="d-flex flex-column justify-content-evenly align-items-center align-items-lg-start col-12 col-lg-6 ps-lg-5 ps-xxl-0">
            <div class="align-items-center gap-4 d-none d-lg-flex">
                <h3>{{ name }}</h3>
                <span>{{ date }}</span>
            </div>
            <p class=" py-4 col-12 text-center text-lg-start">
                {{ description }}
            </p>
            <span>
                <a :href="link"><span class="button">GOOGLE MAPS</span></a>
                <span class="ps-5">{{ city }}</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 500px;
    height: 270px;
    object-fit: cover;
    object-position: center;
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
    font-size: 1.5rem;
    font-family: "Imbue", serif;
    font-optical-sizing: auto;
    font-weight: 100;
}

a {
    text-decoration: none;
    color: inherit;
}

.button {
    padding: 10px 40px;
    border: 1px solid rgb(213, 213, 213);
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

    &:hover {
        background-color: #587E52;
        color: white;
    }
}
</style>