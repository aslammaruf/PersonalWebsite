<template>
    <section id="contact" class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col text">
                        <h4>Want to get in touch</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                    </div>
                    <div class="col">
                        <ul class="social-links">
                            <li v-for="(icon, id) in icons" :key="id">
                                <a class="social-links" :href="'{{ icon.link }}'">
                                    <div class="icon">
                                        <font-awesome-icon :icon="[icon.type, icon.name]" size="2x"/>
                                    </div>
                                    <p>{{ icon.text }}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>     
        </div>

        <hr />

        <div class="footer-bottom center">
                <p>Website created by Aslam Maruf using VUE JS</p>
        </div>

    </section>
</template>

<script>
export default {
    name: "Footer",
    data () {
        return {
            icons: [
                { type: "fab", name: "github", link: "/", text: "View projects on Github" },
                { type: "fab", name: "linkedin-in", link: "/", text: "on Linkedin" },
                { type: "fas", name: "envelope", link: "/", text: "email@email.com"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

section{
    padding: 0;
    margin: 0;
    

    .footer-top{
        background-color: $footer-main;
        padding: 50px 0;
    }
    .footer-bottom{
        background-color: $footer-secondary;
        padding: 50px 0;
        color: white;
        font-weight: bold;
    }

    hr{
        padding: auto;
        margin: auto;
        width: 100%;
        border: 1px solid rgb(31, 32, 39);
    }
}

.text{
    color: white;
}

ul{
    position: relative;
    //left: 50%;
    margin: 0 auto;
}

li{
    width: 100%;
    padding: 20px 0;

    .social-links{
        display: flex;
        align-items: center;
    }

    .icon{
        text-align: center;
        display: block;
        width: 50px;
    }

    svg{
        color: $accent;
    }

    p{
        color: white;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-left: 20px;
    }
}

a:hover{
    p{
        color: white;
        transition: color 0.3s ease;
    }
}
</style>