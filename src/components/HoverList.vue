<template>
  <div
    class="card"
    v-on:mouseover="showList = true"
    v-on:mouseout="showList = false"
    @click="goToPage"
  >
    <l v-if="showList">
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </l>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      required: true
    },
    redirectUrl: {
      // Add a new prop for the redirect URL
      type: String,
      required: true
    }
  },
  data() {
    return {
      showList: false
    };
  },
  methods: {
    goToPage() {
      this.$router.push(this.redirectUrl); // Use Vue Router to navigate
    }
  }
};
</script>
