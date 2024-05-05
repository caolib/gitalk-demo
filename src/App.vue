<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>

  <el-tabs id="comment-route">
    <el-tab-pane>
      <template #label>
        <el-button type="success" link @click="router.push('/gitalk')">
          <span class="sel-text">Gitalk</span>
        </el-button>
      </template>
    </el-tab-pane>

    <el-tab-pane>
      <template #label>
        <el-button type="success" link @click="router.push('/giscus')">
          <span class="sel-text">Giscus</span>
        </el-button>
      </template>
    </el-tab-pane>

  </el-tabs>

  <div>
    <router-view/>
    <el-backtop :right="50" :bottom="50"/>
  </div>
</template>

<style scoped>

#comment-route {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sel-text{
  font-weight: bold;
  font-size: large;
}

</style>
