<template>
    <header id="navbar">
        <div class="nav-container">
            <div id="logo">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
                    <path fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M90.5,324.5c0,0,0,17,17,17c46,0,82-216,82-216
                        s52.1,216,54,252c1.3,24.8-5.6-145.9-189-125"/>
                    <path fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M269.5,333.5c0,0,0,8,9,8c27,0,45-143,45-143
                        s18,99,36,99s36-117,36-117l27,198"/>
                    <rect fill="none" stroke="#000000" stroke-width="20" stroke-miterlimit="10" width="500" height="500"/>
                </svg>
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

svg{
    height: 100px;
    
    path, rect{
        stroke: white;
    }

    rect{
        opacity: 0;
    }

    &:hover{
        rect{
            opacity: 1;
            transition: 0.3s all ease;
        }
    }
}


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

        object{
            height: 50px;
            display: inline-block;
            fill: white;
        }
    }

    #nav-items{
        margin-left: auto;
        align-self: center;
        
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