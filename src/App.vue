<template>
  <!-- style from
    https://www.behance.net/gallery/34183081/Personal-CV-or-VCard?tracking_source=search_projects_recommended%7Cresume%20web
  -->
  <div id="app">
    <div class="container">
      <div class="left-side">
        <router-link style="text-decoration: none; color: inherit;" to="/">
          <div class="logo">
            席佳
            <p>HOME</p>
          </div>
        </router-link>

        <div class="contact-info">
          <p class="contact-title">Email</p>
          <p class="contact-content">bananajiajia@gmail.com</p>
          <p class="contact-title">Phone</p>
          <p class="contact-content">+45 50654380</p>
          <p class="contact-title">Find Me On</p>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/xi-jia-51673a171/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009823698804">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/xijiajiajia/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="inspired">
          This page is inspired by
          <a
            href="https://www.behance.net/gallery/34183081/Personal-CV-or-VCard?tracking_source=search_projects_recommended%7Cresume%20web"
          >
            <i class="fa fa-behance" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div class="right-side">
        <!-- <div class="nav">
        三
        </div>-->
        <transition name="slide-left" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>-->
      </div>
    </div>
  </div>
  <!-- <router-view/> -->
</template>
<script>
export default {};
</script>
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>


<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap; /* 确保左右侧栏不换行 */
  align-items: stretch; /* 新增：使子项填充父容器的高度 */
  justify-content: center;
}

.left-side {
  width: 30%;
  background-color: #4b22ff;

  /* outline:3px solid black; */
  /* border:3px solid black; */
  /* width: 30%;
  height: 100%; */
}

.logo {
  font-size: 30px;
  color: #fff;
  margin: 10vh 0 0 5vw;
  letter-spacing: 10px;
}
.logo p {
  font-size: 15px;
  color: #fff;
  /* margin: 10vh 0 0 5vw; */
  /* letter-spacing:10px; */
}

.contact-info {
  position: absolute;
  bottom: 0;
  color: #fff;
  margin: 0 0 10vh 5vw;
}

.inspired {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 3px;
  text-align: center;
  margin: 0 0 1vh 5vw;
}

.contact-info a {
  text-decoration: none;
  color: #fff;
}

.contact-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.contact-content {
  margin-bottom: 16px;
}

.social-media {
  letter-spacing: 20px;
  font-size: 5vh;
}

.right-side {
  width: 70%;
  /* border: 1px solid black; */
  /* widows: 69%;
  height: 100%; */
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(3em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-3em, 0);
}
</style>
