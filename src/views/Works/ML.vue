<template>
  <div class="ML">
    <div class="cards">
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/jian24.jpg" alt />
        <div class="name">Self-Service Supermarket</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/rjgz.png" alt />
        <div class="name">Face Detection</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/helloear1.jpg" alt />
        <div class="name">Ear Detection</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/rjgz.png" alt />
        <div class="name">Face Recognition</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/nlp.png" alt />
        <div class="name">SNA (semantic network analysis)</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/XJ15.jpg" alt />
        <div class="name">Mathematical Modeling Competition</div>
      </HoverList>
    </div>
  </div>
</template>

<script>
import HoverList from "../../components/HoverList.vue";

export default {
  components: {
    HoverList
  },
  name: "ML"
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 30px;
  margin-left: 60px;
  margin-right: 30px;
  height: 230px;
  padding: 10px;
  border-radius: 20px;
  width: 350px;
  /* border: 1px solid black; */
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  color: black;
  /* margin-right:0px; */
}

.card img {
  border-radius: 20px;
  height: 90%;
  width: 100%;
}

.card .name {
  text-align: center;
  margin: 10px;
}
.card:hover {
  transform: translateY(-3px);
  cursor: pointer;
}
</style>
