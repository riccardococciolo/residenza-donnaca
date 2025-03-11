<script>
import SingleVilla from '../components/SingleVilla.vue';

export default {
    metaInfo() {
    return {
      title: "Villa Aurelia - Lusso e Relax in Calabria",
      meta: [
        {
          name: "description",
          content: "Villa Aurelia, un'oasi di lusso e comfort a pochi passi dal mare della Calabria. Prenota ora la tua vacanza perfetta."
        },
        {
          property: "og:title",
          content: "Villa Aurelia - La tua casa vacanze in Calabria"
        },
        {
          property: "og:description",
          content: "Un soggiorno esclusivo in una villa di lusso immersa nella natura e a pochi minuti dal mare."
        },
        {
          property: "og:image",
          content: "https://www.residenzadonnaca.it/assets/img/villa-aurelia.jpg"
        },
        {
          property: "og:url",
          content: "https://www.residenzadonnaca.it/villa-aurelia"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: "Villa Aurelia - Lusso e Relax in Calabria"
        },
        {
          name: "twitter:description",
          content: "Scopri Villa Aurelia, una residenza esclusiva per il tuo soggiorno in Calabria."
        }
      ]
    };
  },
    data() {
        return {
            villaAurelia:
                {
                    name: "VILLA AURELIA",
                    img: "../assets/img/villa-aurelia/IMG_9848 -minimizer.webp",
                    link: "https://www.airbnb.it/rooms/39623028?check_in=2024-05-13&check_out=2024-05-18&guests=1&adults=1&s=67&unique_share_id=07a6e54b-33b0-4465-8619-bbc478e21ae3",
                    description: "Meravigliosa villa a soli 500 metri dal mare, un autentico rifugio di tranquillità e bellezza. Qui potrete vivere un'esperienza unica e rigenerante, immersi in una vista mozzafiato che sembra toccare il cielo. Pensata per offrirvi una pausa rigenerante dopo giornate di frenesia e stress, ogni spazio è progettato con cura per farvi dimenticare il caos della città e immergervi in un'atmosfera di pace e serenità. Immaginatevi sdraiati mentre il sole si tuffa dolcemente nel mare, regalandovi spettacolari giochi di colori. Potete anche organizzare un barbecue nel nostro ampio giardino, o semplicemente passeggiare tra gli alberi e respirare l'aria fresca che porta con sé il profumo del mare.",
                    info: "La Villa è composta da una camera da letto matrimoniale, una seconda camera con 2 letti singoli, cucina soggiorno arredata di recente in modo impeccabile. Il bagno è completo con bidet e doccia, la doccia è stata ristrutturata di recente. Per una vostra maggiore comodità avrete a vostra disposizione la lavatrice, che potrete utilizzare secondo le vostre esigenze. Qualora ne aveste bisogno anche l' aria condizionata sarà a vostra disposizone con un piccolo costo aggiuntivo di €8 per ogni giorno di utilizzo, da pagare su richiesta in loco. Punto forte della struttura è sicuramente il panorama dal quale si gode dal curatissimo giardino! La villa ha poi la veranda con vista mare e monti. Parcheggio con giardino non recintato. Un Animale domestico di piccola taglia ammesso con il costo aggiuntivo di €10 al giorno.",
                    location: "https://www.google.com/maps/embed/v1/place?q=villa%20aurelia%20coccorino&key=AIzaSyBfFEmGE6DqqJk_ID0ErdkcWhQFu5eCKHc",
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
                        { img: "../assets/img/villa-aurelia/IMG_9824 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/20240325_112903 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9830 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9832 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9833 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9834 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9836 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9838 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9842 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9843 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9847 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9848 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9849 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9850 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9852 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9855 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9864 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9866 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9869 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9872 -minimizer.webp" },
                        { img: "../assets/img/villa-aurelia/IMG_9873 -minimizer.webp" },
                    ],
                },
        }
    },
    components: { SingleVilla }
}
</script>

<template>
    <div>
        <SingleVilla :villa="villaAurelia" />
    </div>
</template>

<style lang="scss" scoped></style>