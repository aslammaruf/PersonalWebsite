<template>
    <section class="footer">
        <div class="container">
            <p>Experience</p>
            <div v-for="(work, id) in work" :key="id">
                <p>{{ work.title }}</p>
                <div v-html=" work.desc "></div>
                <p>{{ work.place }}</p>
                <p>{{ work.fromYear }} - {{ work.toYear }}</p>
            </div>
            <div v-for="(edu, id) in education" :key="id">
                <p>{{ edu.place }}</p>
                <p>{{ edu.desc }}</p>
                <p>{{ edu.fromYear }} - {{ edu.toYear }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "experience",
    data () {
        return {
            work: [
                { 
                    title: "Web Designer and Server Administrator",
                    place: "Trojan Warrior Fitness",
                    desc: `
                        <ul>
                            <li>Communicated with clients on a regular basis to gather information.</li>
                            <li>Designed and implemented a website and an e-store, created from scratch with no frameworks.</li>
                            <li>Designed and implemented multiple Linux based servers, both for personal use and company use.</li>
                            <li>Worked with clients to take photos for both the website, social media and e-store.</li>

                        <ul>
                    `,
                    fromYear: "Jan 2014",
                    toYear: "Dec 2014"
                },
            ],
            education: [
                { 
                    place: "University of Greenwich",
                    desc: "",
                    fromYear: "Sep 2012",
                    toYear: "Jul 2015"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>