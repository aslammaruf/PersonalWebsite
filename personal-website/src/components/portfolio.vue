<template>
    <section class="portfolio">
        <div class="container">
            <h2>{{ title }}</h2>
            <h3>{{ subtitle }}</h3>

            <div v-for="(port, id) in portfolio" :key="id">
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
                        <p>ABOUT</p>
                        <p v-html="port.about"></p>

                        <a :href="'{{ port.demo }}'">DEMO</a>
                        <a :href="'{{ port.code }}'">CODE</a>
                        
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
                    tags: [ "HTML & CSS", "JAVASCRIPT", "PHP", "SMARTY", "POSTGRES", "DOCKER"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
                    demo: "/",
                    code: "/"
                },

                { 
                    title: "Discord Bot",
                    tags: [ "HTML & CSS", "JAVASCRIPT", "PHP", "SMARTY", "POSTGRES", "DOCKER"],
                    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
                    demo: "/",
                    code: "/"
                },

                { 
                    title: "Personal Website",
                    tags: [ "HTML & CSS", "JAVASCRIPT", "PHP", "SMARTY", "POSTGRES", "DOCKER"],
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

</style>