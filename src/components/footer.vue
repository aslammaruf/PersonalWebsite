<template>
    <section id="footer">
        <div class="footer-contact">
            <div class="page-wrapper">
                <div class="section-content">
                    <div class="contact-text">
                        <h4>Want to get in touch</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>  
                    </div>
                    <div class="contact-links">
                        <ul>
                            <li v-for="(icon, id) in icons" :key="id">
                                <a class="social-links" :href="icon.link">
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
        <hr class="footer-hr" />
        <div class="footer-bot">
            <div class="page-wrapper">
                <p class="center">Website created by Aslam Maruf using VUE JS</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer",
    data () {
        return {
            icons: [
                { type: "fab", name: "github", link: "https://github.com/aslammaruf/", text: "View projects on Github" },
                { type: "fab", name: "linkedin-in", link: "https://www.linkedin.com/in/aslam-maruf-a2b44ab8/", text: "on Linkedin" },
                { type: "fas", name: "envelope", link: "mailto:aslamhmaruf@gmail.com", text: "or via Email"}
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

    .section-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-contact{
        background: $footer-main;
        padding: 50px 0;
    }

    .footer-hr{
        padding: 0;
        margin: 0;
        border: 1px solid $accent;
    }

    .footer-bot{
        background: $footer-secondary;
        text-align: center;
        color: $main-text;
    }

    @media screen and (max-width: 992px) {
        .section-content{
            grid-template-columns: 1fr;
        }
    }
}

.contact-text{
    color: white;

    h4{
        font-size: 2em;
        padding-bottom: 20px;
    }
    
    p{
        padding-bottom: 20px;
    }
}

.contact-links{
    justify-self: center;

    li{
        width: 100%;
        padding: 20px 0;
    }
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
        color: $main-text;
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