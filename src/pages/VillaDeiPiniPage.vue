<script>
import SingleVilla from '../components/SingleVilla.vue';

export default {
    data() {
        return {
            villaDeiPini:
                {
                    name: "VILLA DEI PINI",
                    img: "src/assets/img/villa-dei-pini/IMG_9904.JPG",
                    link: "https://www.airbnb.it/rooms/39624599?check_in=2024-05-22&check_out=2024-05-27&guests=1&adults=1&s=67&unique_share_id=e86403a1-7eb2-4a2c-9307-640548b9ee5a",
                    description: "Immersa nella tranquillità dei pini, questa villa offre un rifugio di pace e serenità a pochi passi dal mare. Le stanze spaziose e luminose, arredate con gusto e comfort moderni, accolgono gli ospiti in un'atmosfera di calma e relax. Il giardino ben curato con piante aromatiche e fiori colorati invita a lunghe passeggiate rilassanti. Gli spazi esterni sono pensati per momenti conviviali: la vista panoramica sul mare è ideale per cene al tramonto o serate romantiche sotto le stelle. Un luogo dove la natura e il comfort si fondono armoniosamente per creare ricordi indimenticabili.",
                    info: "La villa è composta da: 2 camere da letto matrimoniali con possibilità di aggiungere un solo letto singolo, due cucine, una con ampi e comodi divani, due bagni con doccia, lavatrice e aria condizionata. Forno esterno, Barbecue, parcheggio auto con giardino non recintato. Nell’appartamento troverete sempre i cuscini, la caffettiera (fondamentale) e la biancheria su richiesta con piccolo costo aggiuntivo, (sia lenzuola che asciugamani per il bagno) qualora la biancheria la portaste con voi non dovrete sostenere alcun costo. I prezzi settimanali, sono compresi dei consumi di acqua, luce, gas. Biancheria disponibile su richiesta al costo aggiuntivo di €12 a persona. L’appartamento è fornito del pentolame di prima necessità, anche caffettiera; Climatizzatore €10 al giorno; Ammessi animali domestici di piccola taglia pagando un supplemento di € 10 al giorno",
                    location: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeSlLs4p1FRMRfR2hCSRftqo&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc",
                    types: [
                        { name: "Vista sul mare", icon: "fa-solid fa-water"},
                        { name: "Giardino", icon: "fa-solid fa-seedling"},
                        { name: "Cucina", icon: "fa-solid fa-kitchen-set"},
                        { name: "wifi", icon: "fa-solid fa-wifi"},
                        { name: "Lavatrice", icon: "fa-solid fa-soap"},
                        { name: "TV", icon: "fa-solid fa-tv"},
                        { name: "Aria condizionata (extra)", icon: "fa-regular fa-snowflake"},
                        { name: "Barbecue", icon: "fa-brands fa-gripfire"},
                        { name: "Parcheggio gratuito", icon: "fa-solid fa-car"},
                        { name: "Animali ammessi (extra)", icon: "fa-solid fa-paw"},
                    ],
                    gallery: [
                        { img: "../assets/img/villa-dei-pini/IMG_9879.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9880.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9888.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9891.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9892.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9893.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9894.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9895.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9896.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9899.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9901.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9902.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9903.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9904.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9909.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9911.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9912.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9914.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9915.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9920.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9921.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9927.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9928.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9929.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9934.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9937.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9938.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9939.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9942.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9945.JPG" },
                        { img: "../assets/img/villa-dei-pini/IMG_9947.JPG" },
                    ],
                },
        }
    },
    components: { SingleVilla }
}
</script>

<template>
    <div>
        <SingleVilla :villa="villaDeiPini" />
    </div>
</template>

<style lang="scss" scoped></style>