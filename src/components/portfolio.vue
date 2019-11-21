<template>
    <section id="portfolio">
        <div class="page-wrapper">
            <div class="section-title">
                <h2>{{ title }}</h2>
                <h3 class="subtitle">{{ subtitle }}</h3>
                <hr class="section-hr"/>
            </div>
            <div class="section-content" v-for="(port, id) in portfolio" :key="id" data-aos="fade-in" data-aos-delay="50" data-aos-offset="200" data-aos-duration="1000">
                <div class="portImg">
                    <img width="100%" :src="'/portPH.png'" />
                </div>
                <div class="portDesc">
                    <h4>{{ port.title }}</h4>
                    <ul>
                        <li v-for="(tag, id) in port.tags" :key="id">{{ tag }}</li>
                    </ul> 
                    <p v-html="port.about"></p>
                    <div class="links">
                        <a :href="'{{ port.demo }}'"><span><font-awesome-icon :icon="['fas','globe-europe']" size="1x"/></span>Demo</a>
                        <a :href="'{{ port.code }}'"><span><font-awesome-icon :icon="['fas','code']" size="1x"/></span>Code</a>          
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',
    data (){
        return {
            title: 'My Projects',
            subtitle: "A Look into the projects i've been working on, projects ranging from websites to bots",
            portfolio: 
            [
                { 
                    title: "Pypeline Website",
                    tags: [ "PHP", "SMARTY", "POSTGRES", "DOCKER", "JAVASCRIPT", "HTML & CSS"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
                    demo: "/",
                    code: "/",
                    btnDisableCode: true
                },

                { 
                    title: "Discord Bot",
                    tags: [ "DISCORD JS", "NODE JS", "JAVASCRIPT"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
                    demo: "/",
                    code: "/"
                },

                { 
                    title: "Personal Website",
                    tags: [ "VUE JS", "SCSS", "NPM"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
                    demo: "/",
                    code: "/"
                },
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

section {
    background-color: $bg-alt;

    .section-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .portImg, .portDesc{
        padding: 2em;
    }

    .portDesc{
        h4{
            font-size: 1.7em;
            font-weight: bold;
        }

        p{
            padding-bottom: 20px;
        }

        ul{
            padding: 20px 0;
        }

        li{
            display: inline-block;
            color: $main-text;
            font-size: 0.7em;
            font-weight: bold;
            letter-spacing: 0.1em;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 10px 10px 0px;
            text-transform: uppercase;
            border: 1px solid $bg;
        }

        .links{
            span{
                width: 25px;
                display: inline-block;
                padding: 0 5px;
            }

            a{
                display: inline-block;
                background: $bg;
                color: white;
                font-size: 0.7em;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                padding: 10px;
                border-radius: 5px;
                margin: 10px 10px 10px 0px;
            }


        }
    }


    @media screen and (max-width: 992px) {
        .section-content{
            grid-template-columns: 1fr;
        }

        .portImg, .portDesc{
            padding: 2em 0;
        }
    }
}




</style>