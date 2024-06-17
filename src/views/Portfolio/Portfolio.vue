<template>
    <div class="profolio">
        <div class="title-wok">
            PRIVIOUS WORKS
        </div>
        
        <div class="area">
            <!-- debug(imgPaths[i-1])-->
            <div @click="$router.push(pushRouter[i-1]) " v-for="i in 4" :key="i" class="card">
                <PortfolioCard :imgPath="imgPaths[i-1]" :title="titles[i-1]"/>
            </div>

            <!-- <div class="card">
                <div class="img-title">
                    <img src="@/assets/picadon.png" alt="???">
                    <div class="title">
                        {{title}}
                    </div>
                </div>
                
            </div> -->
            
            <!-- <div @click="$router.push(pushRouter[1])" class="card">
                <PortfolioCard imgPath="@/assets/rjgz.png" :title="titles[1]"/>
            </div>

            <div @click="$router.push(pushRouter[2])" class="card">
                <PortfolioCard imgPath="@/assets/babe.png" :title="titles[2]"/>
            </div>

            <div @click="$router.push(pushRouter[3])" class="card">
                <PortfolioCard imgPath="@/assets/Cook.png" :title="titles[3]"/>
            </div> -->
        </div>
    </div>
</template>

<script>
import PortfolioCard from "../../components/Portfiliocard.vue"

export default {
    name: "Portfolio",
    methods:{
        debug(item){
            console.log(item)
        }
    },
    data(){
        return{
            imgPaths:[
                require('./../../assets/picadon.png'),
                require('./../../assets/rjgz.png'),
                require('./../../assets/babe.jpeg'),
                require('./../../assets/Cook.jpeg')
                // 'https://i.ibb.co/Hz1KYZg/picadon.png',
                // 'https://i.ibb.co/ZLLb4Hm/rjgz.png',
                // 'https://i.ibb.co/c6QmGwc/babe.jpg',
                // 'https://i.ibb.co/0VStw8J/Cook.jpg'
                ],
            titles:[
                'Web Application',
                'Machine Learning',
                'Photograpy',
                'Cooking'
            ],
            pushRouter:[
                '/webapp',
                '/ml',
                '/photo',
                '/cook'
            ]
        }
    },
    components:{
        PortfolioCard
    }
}
</script>

<style scoped>


.area{
    display:flex;
    flex-wrap: wrap;
    /* justify-content:center; */

    margin-left: 70px;
}
/* .card{
    border: 1px solid;
    width: 30vw;
    height: 30vh;
} */
.title-wok{
    margin: 70px 0 70px 70px;
    font-size:30px;
    font-weight: 900;
    letter-spacing: 3px;
}
</style>
