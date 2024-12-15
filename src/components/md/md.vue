<template>
  <div id="leafContainer" style="height: 75vh">
    <div v-html="mainData"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, watch } from "vue";
import { articleData } from "../../localData/article/index";

const mainData = ref<string | number>();
//接受父组件传过来的参数
const props = defineProps({
  main: {
    type: [Number, String],
  },
});
//根据id获取文章
const getfetch = (articleMain: number | string) => {
  if (articleData) {
    mainData.value = articleMain;
  }
};
onMounted(() => {});
watch(
  () => props.main,
  (newData) => {
    if (newData != undefined) {
      getfetch(newData);
    } else {
      mainData.value = undefined;
    }
  },
  { immediate: true }
);
</script>