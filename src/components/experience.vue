<template>
    <section id="experience">
        <div class="page-wrapper">
            <div class="section-title">
                <h2>Experience</h2>
                <hr class="section-hr"/>
            </div>
            <div class="section-content">
                <div class="tl">
                    <div class="tl-container"><span />
                        <div class="tl-item" v-for="(exp, id) in experience" :key="id">
                            <div class="content">
                                <img src="portPH.png" />
                                <div class="text">
                                    <h3>{{ exp.title }}</h3>
                                    <p class="place ">{{ exp.place }} | {{ exp.fromYear }} - {{ exp.toYear }}</p>
                                    <p class="desc">{{ exp.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Experience",
    data () {
        return {
            experience: [
                { 
                    title: "Web Designer and Server Administrator",
                    place: "Trojan Warrior Fitness",
                    desc: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    `,
                    fromYear: "Jan 2014",
                    toYear: "Dec 2014"
                },        
                { 
                    title: "BSc Computer Science",
                    place: "University of Greenwich",
                    desc: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    `,
                    fromYear: "Sep 2012",
                    toYear: "Jul 2015"
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

$line-thickness: 4px;
$line-Color: #dddddd;
$item-line-pos: 100px;

.tl-container{
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

    &::after{ // Line in the center
        content: '';
        position: absolute;
        width: $line-thickness;
        background-color: $line-Color;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: (($line-thickness / 2) * -1);
    }

    &::before{ // Line at top of timeline
        content: '';
        position: absolute;
        width: 10px;
        background-color: $line-Color;
        top: 0;
        height: $line-thickness;
        width: 50px;
        left: 50%;
        margin-left: -25px;
    }

    span {
        &::before{ // line at bottom of timeline
            content: '';
            position: absolute;
            width: 10px;
            background-color: $line-Color;
            bottom: 0;
            height: $line-thickness;
            width: 50px;
            left: 50%;
            margin-left: -25px;
        }
    }
}

.tl-item{
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;

    &:nth-child(odd){
        &::before{ // Line connecting item to timeline
            content: " ";
            height: 0;
            position: absolute;
            top: $item-line-pos + 10px;
            width: 0;
            right: 0px;
            border: medium solid $line-Color;
            border-width: $line-thickness/2 0 $line-thickness/2 50px;
        }
    }

    &:nth-child(even){
        left: 50%;

        &::before{ // Line connecting item to timeline
            content: " ";
            position: absolute;
            height: 0;
            width: 0;
            top: $item-line-pos + 10px;
            left: 0px;
            border: medium solid $line-Color;
            border-width: $line-thickness/2 50px $line-thickness/2 0;
        }

        &::after{ // Circle Position 
            left: -12px;
        }
    }

    &::after{ // Circle on Timeline
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            right: -12px;
            background-color: $line-Color;
            border: 4px solid $Accent-Color;
            top: $item-line-pos;
            border-radius: 50%;
            z-index: 1;
    }

}

.content { // timeline - item
    background-color: $Secondary-bg-Color;
    position: relative;
    border-radius: 6px;

    img{
        width: 100%;
        z-index: 1;
        border-radius: 6px 6px 0 0;
    }

    .text{
        padding: 20px 30px;

    }
}

// text styling
h3{
    text-align: center;
    color: $Secondary-Text-Color;
    font-size: 1.13em;
}

.place{
    text-align: center;
    color: $Accent-Color;
    font-size: 0.75em;
    padding: 20px 0;
}

.desc{
    text-align: justify;
}

@media (max-width: 992px) {
    .tl-container{
        width: 100%;

        &::after{
            left: 0px;
        }

         &::before{ // Line at top of timeline
            left: 0%;
        }

        span {
            &::before{ // line at bottom of timeline
                left: 0%;
            }
        }
    }

    .tl-item{
        width: 100%;
        padding-right: 0;
        margin-bottom: 100px;

        &:nth-child(odd){
            &::before{ // Line connecting item to timeline
                position: absolute;
                left: 0px;
            }
        }

        &:nth-child(even){
            left: 0%;

            &::after{ // Circle Position 
                left: -12px;
            }
        }

        &::after{ // Circle on Timeline
                left: -12px;
        }

    }

}

</style>
