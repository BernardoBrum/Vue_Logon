<template>
  <div class="home-page">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/containers/header/index.vue";
import Content from "@/containers/content/index.vue";
import Footer from "@/containers/footer/index.vue";

export default {
  name: "homePage",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
.home-page {
  background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
}
</style>