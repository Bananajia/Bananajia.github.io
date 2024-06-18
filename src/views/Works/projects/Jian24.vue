<template>
  <div class="content">
    <h1 class="title">Project Overview</h1>
    <p>Jian24 checkout-free convenience store is an AmazonGo-like supermarket that uses several cameras to recognize people and commodities. My responsibility in this project was to apply an algorithm to recognize items efficiently.</p>

    <h2 class="title">Design of Image Collection Method</h2>
    <p>We designed a program to facilitate the collection of commodity images. The process begins with scanning a barcode using a scanner, which triggers the start of video recording. This recording captures the barcode while also marking the start time of the video. We then rotate the object through multiple angles, and once sufficient angles are covered, the barcode is scanned again to stop the recording. This method helps us gather numerous training samples simulating real-life scenarios.</p>
    <img src="@/assets/jian24.jpg" alt="Commodity Collection Process" class="content-image" />

    <h2 class="title">Implementation of the Recognition Model</h2>
    <p>To recognize the commodities, we implemented a deep learning model using Pytorch. The model of choice was ResNet50, which was previously popular for such tasks. We also incorporated various other commodities as negative samples to enhance the model's accuracy and robustness.</p>
    <img src="@/assets/jian24_prd.png" alt="Model Implementation" class="content-image" />

    <h2 class="title">Testing and Validation</h2>
    <p>Our testing process involved creating specific programs to evaluate both the training data and the real data collected from the store. These tests were crucial in refining our model to ensure high accuracy and efficiency in a live environment.</p>
    <!-- 使用require来引用PDF -->
    <a :href="pdfLink" target="_blank">View the detailed test report</a>

    <h2 class="title">Challenges and Learnings</h2>
    <p>The project presented several challenges, including the need to accurately capture dynamic changes in a retail environment and the complexity of integrating multiple types of data inputs. The learnings from this project are significant, enhancing our capabilities in applying deep learning models to real-world applications in retail technology. We were seeking for more improvements like video analysis instead of image analysis, but I came out to study so had no time to continue.</p>
  </div>
</template>

<script>
import pdfLink from "@/assets/jian24_report.pdf";
export default {
  name: "Jian24Project",
  data() {
    return {
      pdfLink: pdfLink
    };
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  margin-right: 50px;
}

.title {
  font-weight: bold;
  margin-top: 30px;
}

.content-image {
  display: block;
  width: 80%;
  height: auto;
  margin: 20px auto;
}
p {
  margin-bottom: 30px;
}

a {
  color: #090909;
  text-decoration: underline;
}
</style>
