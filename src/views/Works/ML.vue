<template>
  <div class="ML">
    <div class="cards">
      <HoverList
        :listItems="['Deep learning', 'Image Collections', 'Testing', 'ResNet', 'YOLO', 'Wanted to start Video Analysis', 'Too expensive to do 3D object recognition']"
        redirect-url="jian24"
      >
        <img src="@/assets/jian24.jpg" alt />
        <div class="name">Self-Service Supermarket</div>
      </HoverList>
      <a href="https://arxiv.org/abs/1305.4537">
        <HoverList
          :listItems="['PICO', 'Machine Learning', 'ARM Chip', 'Integrated inside Camera']"
        >
          <img src="@/assets/rjgz.png" alt />

          <div class="name">Face Detection</div>
        </HoverList>
      </a>

      <HoverList :listItems="['OpenCV', 'Find Circle ', 'Find Contours']">
        <img src="@/assets/helloear1.jpg" alt />
        <div class="name">Ear Detection</div>
      </HoverList>
      <a href="https://arxiv.org/abs/1604.02878">
        <HoverList
          :listItems="['Deep Learning', 'CNN', 'ARM Chips', 'Write CNN by pure C on Chips', 'Integrated with Camera']"
        >
          <img src="@/assets/rjgz.png" alt />
          <div class="name">Face Recognition</div>
        </HoverList>
      </a>
      <a href="https://github.com/Bananajia/SNA/blob/main/sna-en.ipynb">
        <HoverList :listItems="['NLP', 'RA for KU Workshop', 'Data Scraping']">
          <img src="@/assets/nlp.png" alt />
          <div class="name">SNA (semantic network analysis)</div>
        </HoverList>
      </a>

      <a :href="pdfLink" target="_blank">
        <HoverList
          :listItems="['Sustainability and a 20-year sustainable development plan', 'Mathematic']"
        >
          <img src="@/assets/XJ15.jpg" alt />
          <div class="name">Mathematical Modeling Competition</div>
        </HoverList>
      </a>
    </div>
  </div>
</template>

<script>
import pdfLink from "@/assets/math.pdf";
import HoverList from "../../components/HoverList.vue";

export default {
  components: {
    HoverList
  },
  name: "ML",
  data() {
    return {
      pdfLink: pdfLink
    };
  }
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
