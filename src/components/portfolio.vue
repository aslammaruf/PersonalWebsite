<template>
    <section id="portfolio">
        <div class="page-wrapper">
            <div class="section-title">
                <h2>{{ title }}</h2>
                <h3>{{ subtitle }}</h3>
                <hr class="section-hr"/>
            </div>
            <div class="section-content">
                <div class="port" v-for="(port, id) in portfolio" :key="id">
                    <div class="row">
                        <div class="col">
                            <img width="100%" :src="'/portPH.png'" />
                        </div>

                        <div class="col-8">
                            <h4>{{ port.title }}</h4>
                            <ul>
                                <li v-for="(tag, id) in port.tags" :key="id">
                                    {{ tag }}
                                </li>
                            </ul> 
                            <p v-html="port.about"></p>
                            <br/>
                            <a class="btn" :href="'{{ port.demo }}'"><span><font-awesome-icon :icon="['fas','globe-europe']" size="1x"/> DEMO</span></a>
                            <a class="btn" :href="'{{ port.code }}'" :disabled="port.btnDisableCode"><span><font-awesome-icon :icon="['fas','code']" size="1x"/> View Code</span></a>
                            
                        </div>
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
@import '@/assets/style/_variables.scss';

section {
    background-color: $Secondary-bg-Color;
}

h3{
    text-align: center;
    font-size: 1.17em;
    color: $Accent-Color;
    margin: 10px;
}

.port {
    margin:100px 0;
    
    h4{
        font-size: 1.13em;
        color: $Secondary-Text-Color;
    }

    li{
        display: inline-block;
        border: 1px solid $Accent-Color;
        border-radius: 5px;
        font-size: 0.5em;
        padding: 10px;
        margin: 10px;
    }

    li:first-child{
        margin-left: 0px;
    }
}

.btn{
    background: $Accent-Color;
    padding: 10px;
    margin-right: 20px;
    border-radius: 5px;
    font-size: 0.75em;

    :hover{
        color: $Secondary-bg-Color;
    }
}

</style>