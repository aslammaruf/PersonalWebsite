<template>
    <section class="header">
        <div class="container">
            <div class="row">
                <div class="contents">
                    <h1>Aslam Maruf</h1>
                    <br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

section{
    height: calc(100vh - 50px);
    text-align: center;
    font-size:  2em;

    .container, .row {
        height: 100%;
    }

    .row{
        display: flex;
        align-items: center;
    }

    .contents{

    }
}


</style>