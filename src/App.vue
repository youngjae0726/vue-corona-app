<template>
  <BasicLayout
    @menuSelect="
      (item) => {
        content = item;
      }
    "
  >
    <MainContent :content="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "./layouts/BasicLayout";
import MainContent from "./components/MainContent";
export default {
  name: "App",
  components: { BasicLayout, MainContent },
  data() {
    return {
      content: {
        label: "대시보드",
        index: "Dashboard",
        path: "main",
      },
    };
  },
};
</script>

<style></style>
