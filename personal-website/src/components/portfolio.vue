<template>
    <div class="portfolio container">
        <h2>{{ title }}</h2>
        <h4>{{ subtitle }}</h4>

        <img width="50%" :src="'/portPH.png'" />
    </div>
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
                { value: "About Me", link: "./About" },
            ]
        }
    }
}
</script>

<style scoped>

</style>