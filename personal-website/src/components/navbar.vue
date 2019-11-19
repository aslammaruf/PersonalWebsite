<template>
    <div class="navbar">
        <div class="container">
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
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data (){
        return {
            navOptions: 
            [
                { value: "About Me", link: "#about" },
                { value: "Portfolio", link: "#portfolio" },
                { value: "Contact Me", link: "#contact" },
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.navbar{
    padding: 20px 0;
}

ul{
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li{
        padding: 0 20px;
    }

    li:last-child {
        padding: 0px 0px 0 20px;
    }
}
</style>