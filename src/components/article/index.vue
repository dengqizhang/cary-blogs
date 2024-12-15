<!-- 文章类别导航页面 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="200px"
        style="border-right: 1px #dddddd solid; margin-top: 20px; height: 80vh"
      >
        <h4>列表</h4>
        <el-tree
          empty-text="暂无数据"
          style="max-width: 600px"
          :data="data"
          node-key="id"
          @node-click="handleNodeClick"
          :highlight-current="true"
          :default-expand-all="true"
      /></el-aside>
      <el-main><md :main="main" /></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { articleData } from "../../localData/article/index";
import { articleTree } from "../../localData/article/types";
import md from "./../md/md.vue";
const route = useRoute();
const data = ref<any>([]);
const main = ref<number | string>();

/**
 * 模拟请求网络数据
 */
const getdata = (navId: string | number) => {
  data.value = [];
  articleData.forEach((item) => {
    if (item.navId == navId) {
      data.value.push(item);
    }
  });
  console.log(data.value);
  if (data.value.length == 0) {
    //无导航项情况下
    main.value = undefined;
  } else {
    //默认值赋值
    //无子节点
    if (data.value[0].children.length == 0) {
      main.value = data.value[0].articelMain;
    } else {
      //有子节点
      main.value = data.value[0].children[0].articelMain;
    }
  }
};
/**
 * 树节点点击事件
 */
const handleNodeClick = (val: articleTree) => {
  console.log(val);

  main.value = val.articelMain;
};
onMounted(() => {});
watch(
  () => route.query.id,
  (newValue: any) => {
    getdata(newValue);
  },
  { immediate: true }
);
</script>
    