<script>
export default {
    data() {
        return {
            links: [
                {title: "Home", num: "01", name: "home"},
                {title: "Event", num: "02", name: "events"},
                {title: "Beach", num: "03", name: "beaches"},
                {title: "Villa Aurelia", num: "04", name: "villa aurelia"},
                {title: "Villa Dei Pini", num: "05", name: "villa dei pini"},
            ]
        }
    },
}
</script>

<template>
    <div class="footer position-relative">
        <ul class="d-flex gap-5 p-5 justify-content-center m-0">
            <li v-for="link in links"><router-link :to="{name: link.name}" class="ps-2 fs-5">{{ link.title }}</router-link></li>
        </ul>
        <img class="w-100" src="../assets/img/Residenza donnacà.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #587E52;
}

ul {
    list-style: none;

    a {
        text-decoration: none;
        color: black;

        &:hover {
            color: white;
            text-decoration: underline;
        }
    }
}

span {
    font-size: 18vw;
    width: 100%;
    font-family: "Imbue", serif;
    font-optical-sizing: auto;
    font-weight: 170;
    line-height: 1.2;
    height: 50%;
    overflow: hidden;
    display: block;
}
</style>