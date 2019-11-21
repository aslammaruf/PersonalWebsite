<template>
    <header id="navbar">
        <div class="nav-container">
            <div id="logo">
                <h3>Aslam<span>Maruf</span></h3>
            </div>
            <div id="nav-items" :class="{ 'nav-open' : menuopen }">
                <ul>
                    <li v-for="(nav, id) in navOptions" :key="id">
                        <a :href="nav.link">{{ nav.value }}</a>
                    </li>
                </ul>
                <div id="nav-hamburger" :class="{ 'hamburger-close' : menuopen }" @click="menuopen = !menuopen">
                    <span class="top-bar"></span>
                    <span class="mid-bar"></span>
                    <span class="bot-bar"></span>
                </div>
            </div>
        </div>
    </header>

</template>

<script>
export default {
    name: 'Navbar',
    data (){
        return {
            navOptions: 
            [
                { value: "Skills", link: "#skills" },
                { value: "Portfolio", link: "#portfolio" },
                { value: "Experience", link: "#experience" },
                { value: "Contact Me", link: "#footer" },
            ],
            menuopen: false,
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/style.scss';

header#navbar{
    background: $header;
    color: $navbar-text;
    padding: 2rem;
    font-size: 1.17em;

    .nav-container{
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 20% 80%;
    }

    #logo{
        font-weight: 100;
        letter-spacing: 0.1em;
        align-self: center;

        span{
            font-weight: bold;
            color: $accent;
        }
    }

    #nav-items{
        margin-left: auto;
            
        ul{
            display: block;
            align-self: center;
        }

        li{
            display: inline-block;
            padding: 0 20px;
        
            &:last-child{
                padding-right: 0px;
            }
        }
    }
}

#nav-hamburger{
    display: none;

    span{
        transition: all linear 0.3s;
        transform-origin: left center;
        content: "";
        background: white;
        display: block;
        height: 4px;
        width: 34px;
        border-radius: 3px;
    }

    .top-bar{
        margin-bottom: 8px;
    }

    .bot-bar{
        margin-top: 8px;
    }
}

.hamburger-close{
    .top-bar{
        transform: rotate(45deg);
        width: 39.5px;
    }

    .mid-bar{
        transform: translateX(-50px);
        opacity: 0;
    }

    .bot-bar{
        transform: rotate(-45deg);
        width: 39.5px;
    }
}

@media (max-width: 992px) {
    #navbar{
        padding: 2rem 0.5rem !important;
    }
    #nav-items>ul{
        display: none !important;
    }

    #nav-hamburger{
        display: block;


    }

}

</style>