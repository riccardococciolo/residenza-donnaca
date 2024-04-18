<script>
export default {
    data() {
        return {
            links: [
                { title: "Home", num: "01", name: "home" },
                { title: "Eventi", num: "02", name: "events" },
                { title: "Spiaggie", num: "03", name: "beaches" },
                { title: "Villa Aurelia", num: "04", name: "" },
                { title: "Villa Dei Pini", num: "05", name: "" },
            ],
            isVisible: false,
            transitionOut: false,

        }
    },
    methods: {
        toggleMenu() {

            if (this.isVisible) {
                setTimeout(() => {
                    this.isVisible = false;
                    this.transitionOut = false;
                }, 500);
            } else {
                this.isVisible = !this.isVisible;
            }
        },

        toggleTransition() {
            this.transitionOut = !this.transitionOut;
        },

        toggleClose() {
            this.toggleTransition();
            this.toggleMenu();
        }
    }
}
</script>

<template class="position-relative">
    <div v-if="isVisible" :class="{ 'slide-enter-active': isVisible, 'slide-leave-active': transitionOut }"
        class=" pt-4 navbar d-flex justify-content-end">
        <div class="close">
            <span @click="toggleClose"><i class="fa-solid fa-xmark"></i></span>
        </div>
        <ul class=" m-0">
            <li class="border-bottom w-100 py-3" v-for="link in links" :key="link.title">
                <router-link @click="toggleClose" :to="{name: link.name}" class="num">{{ link.num }}</router-link>
                <router-link @click="toggleClose" :to="{name: link.name}" class="ps-5">{{ link.title }}</router-link>
            </li>
        </ul>
        <img class="w-100 pt-4" src="../assets/img/Residenza donnacà.svg" alt="">
    </div>
    <div v-else class="menu-button">
        <span><i @click="toggleMenu" class="fa-sharp fa-solid fa-bars"></i></span>
    </div>
</template>

<style lang="scss" scoped>
.close {
    position: absolute;
    top: 40px;
    left: 60px;
    font-size: 3rem;
    color: white;
}

.menu-button {
    position: absolute;
    top: 30px;
    right: 60px;
    z-index: 1000;

    i::before {
        transform: scale(2);
        display: inline-block;
        color: rgb(255, 255, 255, 0.8);
    }
}

.navbar {
    background-color: #587E52;
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 9999;
}

.slide-enter-active {
    animation: slideIn 0.5s ease-in-out both;
}

.slide-leave-active {
    animation: slideOut 0.5s ease-in-out both;
}

@keyframes slideIn {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes slideOut {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-100%);
    }
}

img {
    position: relative;
    bottom: -8px;
    display: block;
    filter: invert(1);
}

ul {
    list-style: none;
    width: 80%;
    display: block;


    li {
        font-size: 1.8rem;
        border: black;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .num {
        font-family: "Imbue", serif;
        font-optical-sizing: auto;
        font-weight: 100;
        font-size: 2.2rem;
        padding-right: 150px;
    }
}
</style>