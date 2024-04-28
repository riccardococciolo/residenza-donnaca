<script>
export default {
    props: {
        beach: Array,
    },
    data() {
        return {

        }
    },
    methods: {
        getImgPath(img) {
            return new URL(img, import.meta.url).href
        },
    }
}
</script>

<template>
    <div>
        <div class="py-5 w-100">
            <div class="w-100">
                <img class="" :src="getImgPath(beach.img)" alt="">
            </div>
            <div class="pt-4 d-flex justify-content-center">
                <div class="w-50 d-flex flex-column justify-content-evenly align-items-start">
                    <div class="d-flex align-items-center gap-4">
                        <h3>{{ beach.name }}</h3>
                        <span>{{ beach.city }}</span>
                    </div>
                    <p class=" py-4">
                        {{ beach.description }}
                    </p>
                </div>
                <div class="w-50 ps-5">
                    <iframe
                        frameborder="0" allowfullscreen="allowfullscreen" :src="beach.link" width="100%"
                        height="100%" style="border:0;" loading="auto">
                    </iframe>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 40vh;
    width: 100%;
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