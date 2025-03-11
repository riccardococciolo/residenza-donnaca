<script>
import SingleVilla from '../components/SingleVilla.vue';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

export default {
    metaInfo() {
    return {
      title: "Villa Dei Pini - Natura e Comfort in Calabria",
      meta: [
        {
          name: "description",
          content: "Villa Dei Pini, immersa nella natura della Calabria, perfetta per una vacanza rilassante a pochi passi dal mare."
        },
        {
          property: "og:title",
          content: "Villa Dei Pini - Relax nella natura della Calabria"
        },
        {
          property: "og:description",
          content: "Vivi l'esperienza di una villa immersa nella natura, con tutti i comfort e il mare a pochi minuti."
        },
        {
          property: "og:image",
          content: "https://www.residenzadonnaca.it/assets/img/villa-dei-pini.jpg"
        },
        {
          property: "og:url",
          content: "https://www.residenzadonnaca.it/villa-dei-pini"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: "Villa Dei Pini - Natura e Comfort in Calabria"
        },
        {
          name: "twitter:description",
          content: "Scopri il relax nella natura con Villa Dei Pini, perfetta per una vacanza rigenerante."
        }
      ]
    };
  },
    data() {
        return {
            villaDeiPini:
                {
                    name: "VILLA DEI PINI",
                    img: "../assets/img/villa-dei-pini/IMG_9904 -minimizer.webp",
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
                        { img: "../assets/img/villa-dei-pini/IMG_9879 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9880 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9888 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9891 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9892 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9893 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9894 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9895 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9896 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9899 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9901 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9902 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9903 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9904 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9909 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9911 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9912 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9914 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9915 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9920 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9921 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9927 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9928 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9929 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9934 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9937 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9938 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9939 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9942 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9945 -minimizer.webp" },
                        { img: "../assets/img/villa-dei-pini/IMG_9947 -minimizer.webp" },
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