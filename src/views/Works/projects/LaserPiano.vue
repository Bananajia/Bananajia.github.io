<template>
  <div class="content">
    <h1 class="title">Introduction</h1>
    <p>We conducted preliminary practice with the purchased hardware, completing a work that can display images as soon as it is powered on.</p>

    <h2 class="title">Experimental Schemes</h2>
    <p>According to the literature, we preset two experimental schemes: The first one: Directly use the infrared laser mold, and capture the finger cursor directly with the infrared camera. The second one: Use a straight-line infrared laser head, and capture the spot where the finger presses through a camera with a filter. After the experiment, it was found that the spot of the second scheme was brighter and the hardware was cheaper to use.</p>
    <img src="@/assets/piano_hardware.jpg" alt="Introduction Image" class="content-image" />

    <h2 class="title">Design of the Program</h2>
    <p>Since we did not find an existing piano-style grating, we tried to design a program with a computer keyboard projection style grating, according to: ①The OpenCV library program calls the camera to collect video stream data. ②Get the virtual key coordinates of the keyboard and establish a key library based on the coordinates. ③Get keyboard (virtual projection keyboard) input events. ④Dynamically track the position of the finger (displayed in coordinates). ⑤Keyboard content output.</p>
    <img src="@/assets/piano_sfw.jpg" alt="Introduction Image" class="content-image" />

    <h2 class="title">Final Setup</h2>
    <p>And after multiple tests to get the best placement, we made a small wooden box to fix it, and it can be used as long as the switch is turned on.</p>

    <h2 class="title">Completed Works</h2>
    <p>The overall design of the hardware: including the structure of the work, material selection, and finally can turn on the hardware switch, the hardware part starts normally. Software graphic processing design: After connecting the USB camera, run the C language program to capture the coordinates of the finger spot, read and output the data we need. Read the data and output music.</p>

    <h2 class="title">Limitations and Advantages</h2>
    <p>The electronic system we made this time can only complete basic tasks, only involving supplying power to two laser emitters and connecting the camera to the host through a USB cable. No microcontroller is used, which means that the algorithm introduced in the previous principle part will be fully implemented on the PC. The advantage of this is that it greatly reduces the cost and difficulty of production. If a driver-free USB camera is used, using this laser projection keyboard on a PC only requires additional running processing programs. However, the disadvantage is that such a design cannot be used for devices that do not support USB.</p>
  </div>
</template>

<script>
export default {
  name: "LaserPiano"
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
</style>
