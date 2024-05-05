<script setup lang="ts">
import Gitalk from 'gitalk'
import {onMounted} from "vue";

const gitalk = new Gitalk({
  clientID: 'Ov23liPhEiwRZT4xQOBy',
  clientSecret: '346f80c0f2515c3af6b49cd55d6e738ec7a5581a',
  repo: 'gitalk',
  owner: 'caolib',
  admin: ['caolib'],
  id: location.pathname,
  distractionFreeMode: false
});

onMounted(()=>{
  gitalk.render('gitalk-container')
})

</script>



<template>

  <div>
    <div id="gitalk-container"/>
  </div>


</template>

<style scoped>
#gitalk-container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px grey;
}

</style>