<template>
    <div class="medium-picture">
      <img src="./../../assets/me.jpeg" alt="wat">
      <!-- <div class="picture-point">
        ——
      </div> -->
      <div class="intros">
        <div class="name">
          Jia Xi
        </div>
        <div class="title">
          Developer
        </div>
        <div class="introduction">
          I'm Jia, just graduated from University of Copenhagen in October 2020. I love developments and cook. I live in Copenhagen with my cute wife 🌈 and our small cat😺 and dog🐶.
        </div>
        <div  @click="$router.push('/portfolio')" class="button" id="portfolio">
          PORTFOLIO
        </div>
        <div @click="$router.push('/resume')" class="button" id="resume">
          RESUME
        </div>
      </div>

    </div>
</template>

<script>
export default {
    name:"Introduction"
}
</script>

<style scoped>

.medium-picture{
  position: absolute;
  /* width: 20vw;
  height: 90vh; */
  position: absolute;
  top: 5vh;
  left: 25vw;
  /* border: 3px solid #73AD21; */

  /* width:100%; */
  /* height: 100%; */
  display:flex;
  flex-wrap: wrap;
  justify-content:start;

}

.medium-picture img{
  width: 50%;
  /* border: 3px solid #73AD21; */
  box-shadow: 0 3px 20px 0 rgba(0,0,0,0.5);
}

.medium-picture .intros{
  margin-top: 30vh;
  width: 30vw;
  margin-left: 50px;
}

.intros .name{
  color: #4B22FF;
  font-weight: bold;
  font-size: 30px;
  margin-bottom:15px;
}

.intros .title{
  font-weight: bold;
  margin-bottom: 30px;
}

.intros .introduction{
  line-height: 20px;
  font-size: 10px;
  margin-bottom: 30px;
}

.intros .button{
  padding:10px;
  display: inline;
  border: 3px solid #4B22FF;
  border-radius:30px;
  font-size: 10px;
  font-weight: bold;
  margin-right: 20px;
  color:#4B22FF;
  letter-spacing:2px;
  text-align:center;
  transition: 0.2s;
  cursor: pointer;
}

.intros .button:hover{
  color:#fff;
  background-color: #4B22FF;
}

</style>
