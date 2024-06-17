<template>
    <div class="card">
        <!-- <div class="mask">
        </div> -->
        <div class="name-dscp">
            <!-- "./../assets/picadon.png" Web Application-->
            <div class="name">
                {{name}}
            </div>
            <div class="dscp">
                {{dscp}}
            </div>
            <div class="tech-info">
            Tech-stacks: {{tech}}
            </div>
            <div class="basic-info">
            📍 {{location}} 📅 {{time}} 🏘️ {{company}}
            </div>
            
        </div>

        
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    props: {
        name: String,
        dscp: String,
        location: String,
        time: String,
        company: String,
        tech: String
  }
}
</script>

<style scoped>
/* 
.card {

} */
.name-dscp:hover{
    /* border-radius: 10px; */
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    
}
.name-dscp{
    padding: 20px;
    width: 350px;
    height: 150px;
    /* position: relative; */
    /* margin: -1px; */
}

.name{
    font-weight: bold;
    margin-bottom: 15px;
}

.dscp{
    /* font-weight: 400; */
    font-size: 12px;
    line-height:18px;
    margin-bottom: 5px;
}
.basic-info{
    /* position: absolute; */
    bottom:20px;
    font-weight:100;
    font-size:12px;
}

.tech-info{
    /* position: absolute; */
    /* bottom:20px; */
    margin-bottom: 10px;
    /* font-weight:100; */
    font-size:8px;
    font-weight: bold;
}
</style>
