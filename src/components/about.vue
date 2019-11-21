<template>
    <section id="skills">
        <div class="page-wrapper">
            <div class="section-title">
                <h2>{{ title }}</h2>
                <hr class="section-hr" />
            </div>
            <div class="section-content">
                <div class="tile" data-aos="fade-right" data-aos-delay="50" data-aos-offset="200" data-aos-duration="3000">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                    <hr />
                    <h4>Front End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Javascript</li>
                        <li>Vue JS</li>
                    </ul>
                </div>
                <div class="tile" data-aos="fade-left" data-aos-delay="50" data-aos-offset="200" data-aos-duration="3000">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                    <hr />
                    <h4>Back End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <ul>
                        <li>Node JS</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Postgres</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills",
     data (){
        return {
            title: 'Skills',
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/style.scss';

section#skills{

    .section-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10%;
    }

    .tile{
        text-align: center;
        padding: 2em;
        box-shadow: 0 0 60px 0 rgba(0,0,0,.04);
        border: 1px solid #eee;
        border-radius: 10px;
        
        svg{
            padding: 30px 0 20px 0;
            color: $accent;
        }

        hr{
            border: 1px solid $accent;
            width: 30px;
        }

        h4{
            font-size: 1.5em;
            padding: 10px;
        }

        p{
            padding: 10px 0;
        }

        li{
            display: inline-block;
            background: $bg;
            color: white;
            font-size: 0.7em;
            letter-spacing: 0.1em;
            padding: 10px;
            border-radius: 5px;
            margin: 10px;
        }
    }

    @media screen and (max-width: 992px) {
        .section-content{
            grid-template-columns: 1fr;
        }
    }
}

</style>