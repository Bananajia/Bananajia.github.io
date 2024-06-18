<template>
  <div class="DIY">
    <div class="cards">
      <HoverList :listItems="['OpenCV', 'Hardware', 'Innovation']" redirect-url="laser-piano">
        <img src="@/assets/laser.jpeg" alt />
        <div class="name">Laser Keyboard/Laser Piano</div>
      </HoverList>
      <HoverList :listItems="['Item 1', 'Item 2', 'Item 3']">
        <img src="@/assets/eletronic_cake.jpeg" alt />
        <div class="name">Electronic Cake</div>
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
  name: "DIY"
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 50px;
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
