<template>
    <div class="webapp">
        <div class="cards">
            <a href="https://demotest7878-client.azurewebsites.net/">
                <div id="phoneorder" class="card">
                <img  src="@/assets/order.jpeg" alt="">
                <div class="name">
                    Order WebApp
                </div>
            </div>
            </a>
            <div  class="webapp">
                <a href="https://picadonassignment-web.azurewebsites.net/">
                <div class="card">
                    <img src="@/assets/picadon.png" alt="">
                    <div class="name">
                        Picadon Assignment
                    </div>
                </div>
                </a>
                
                <a href="https://eatintime.dk/">
                    <div class="card">
                        <img src="@/assets/eatintime.png" alt="">
                        <div class="name">
                            Eat In Time
                        </div>
                    </div>
                </a>
                
            </div>


        </div>


    </div>
</template>

<script>
export default {
    name: 'WebApp',
}
</script>

<style scoped>
.cards{
    display:flex;
    flex-wrap: wrap;
    
}
.card{
    margin:50px;
    height: 230px;
    padding: 10px;
    border-radius: 20px;
    width: 350px;
    /* border: 1px solid black; */
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    transition: 0.5s;
    color: black;
    /* margin-right:0px; */
}

.card img{
    border-radius: 20px;
    width:100%;
}

.card .name{
    text-align: center;
    margin:10px;
}
.card:hover{
    transform: translateY(-3px);
    cursor: pointer;
}

#phoneorder{
    width: 200px;
    height:470px;
    margin: 50px 50px 0 100px;
    /* color: black; */
}
</style>
