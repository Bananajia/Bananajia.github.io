<template>
    <div class="card">
        <!-- <div class="mask">
        </div> -->
        <div class="imgandtitle" @mouseover="showit=false" @mouseleave="showit=true">
            <!-- "./../assets/picadon.png" Web Application-->
            <img :src=imgPath alt="">
            <transition name="fade">
                <div v-show="showit"  class="title">
                    {{title}}
                </div>
            </transition>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data(){
        return{
            showit: true
        }
    },
    props: {
        imgPath: String,
        title: String
  }
}
</script>

<style scoped>
.imgandtitle:hover{
    /* border-radius: 10px; */
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}
.imgandtitle{
    margin: -1px;
}
.card img{
    width: 350px;
    height: 230px;
    /* opacity: 100%; */
    transition: 0.2s;
    padding:0;
    /* padding:5%; */
    /* border-radius: 10px; */
}


.imgandtitle{
    position: relative;
}
.title{
    width: 100%;
    height: 70%;
    position: absolute;
    top:0;
    left:0;
    font-size: 25px;
    font-weight:bold;
    background-color: rgba(255, 255, 255, 1);
    /* opacity: 70%; */
    padding-top:30%;
    text-align: center;
    /* transition:0.3s; */
    cursor: pointer;
    /* color:#4B22FF; */
    
}

/* .title:hover{
    opacity: 0%;
} */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
