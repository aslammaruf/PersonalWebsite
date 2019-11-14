<template>
    <div class="navbar container">
        <div class="row">
            <div class="col">
                <h3>Aslam<span>Maruf</span></h3>
            </div>
            <div class="col">
                <ul id="navbar-list">
                    <li v-for="(nav, id) in navOptions" :key="id">
                        <a :href="nav.link">{{ nav.value }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data (){
        return {
            navOptions: 
            [
                { value: "About Me", link: "./About" },
                { value: "Portfolio", link: "./About" },
                { value: "Contact Me", link: "./About" },
            ]
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    text-align: right;
}
li{
    float:left;

}
</style>