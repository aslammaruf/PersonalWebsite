<template>
    <div class="footer">
        <div class="container">
            <ul>
                <li v-for="(icon, id) in icons" :key="id">
                     <a class="social-links" :href="'{{ icon.link }}'"><font-awesome-icon :icon="[icon.type, icon.name]" size="1x"/></a>
                </li>
            </ul>

            <p><span>Aslam Maruf</span> &copy; 2019</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer",
    data () {
        return {
            icons: [
                { type: "fab", name: "github", link: "/", },
                { type: "fab", name: "linkedin-in", link: "/", },
                { type: "fas", name: "envelope", link: "/", }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

$Secondary-bg-Color: #0B0C10;
$Main-bg-Color: #1F2833;
$Main-Text-Color: #C5C6C7;
$Secondary-Text-Color: #66FCF1;
$Accent-Color: #45A29E;

.footer{
    padding: 50px 0;
    background-color: $Secondary-bg-Color;
    text-align: center;
}

p {
    color: $Main-Text-Color;
    font-size: 0.75em;
    margin-top: 50px;

    span{
        color: $Secondary-Text-Color;
    }
}

li{
    display: inline-block;
    background: $Main-bg-Color;
    padding: 10px;
    margin: 0 20px;

    .social-links{
        color: white;
    }

    a:hover{
        color: $Accent-Color;
    }
}

</style>