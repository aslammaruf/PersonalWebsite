<template>
    <section id="contact" class="footer">
        <div class="container">
            <ul>
                <li v-for="(icon, id) in icons" :key="id">
                     <a class="social-links" :href="'{{ icon.link }}'"><font-awesome-icon :icon="[icon.type, icon.name]" size="1x"/></a>
                </li>
            </ul>

            <p><span>Aslam Maruf</span> &copy; 2019</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer",
    data () {
        return {
            icons: [
                { type: "fab", name: "github", link: "/", },
                { type: "fab", name: "linkedin-in", link: "/", },
                { type: "fas", name: "envelope", link: "/", }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

section{
    padding: 0;
    margin: 0;
}
.footer{
    padding: 50px 0;
    background-color: $Secondary-bg-Color;
    text-align: center;
}

p {
    color: $Main-Text-Color;
    font-size: 0.75em;
    margin-top: 50px;

    span{
        color: $Secondary-Text-Color;
    }
}

li{
    display: inline-block;
    background: $Main-bg-Color;
    padding: 10px;
    margin: 0 20px;

    .social-links{
        color: white;
    }

    a:hover{
        color: $Accent-Color;
    }
}

</style>