<template>
    <div id="page-header">
        <div class="header-container">
            <div class="header-text" data-aos="fade-right" data-aos-duration="3000">
                <h1 class="page-title">Hi, I'm Aslam.</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                </p>
            </div>
            <div class="header-image" data-aos="fade-in" data-aos-duration="3000">
                <img src="assets/imgs/header-img.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped lang="scss">
@import '@/assets/style/style.scss';

div#page-header{
    background: $header;
    color: $header-text;
    height: calc( 100vh - 100px - 4rem );
    width: 100%;

    .header-container{
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        max-width: $container-size;
        margin: auto;
    }

    .header-text{
        letter-spacing: 0.1em;
        place-self: center;
    }

    .page-title{
        font-size: 2em;
        color: $accent;
    }

    p{
        font-size: 1.5em;
        padding: 2rem 0;
    }

    .header-image{
        place-self: center;
        padding: 2rem;

        img{
            display: block;
            width: 100%;
            text-align: center;
        }
    }

    @media screen and (max-width: 992px) {
        height: 100%;

        .header-container{
            grid-template-columns: 1fr;
        }
    }
}
</style>