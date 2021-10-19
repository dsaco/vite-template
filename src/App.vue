<template>
  <div class="container">
    <h3 class="title">
      Hello <span class="red">{{ name }}</span>
    </h3>
    <HelloWorld />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import HelloWorld from './components/HelloWorld.vue';
import { name } from './common/const.js';

export default defineComponent({
  components: {
    HelloWorld,
  },
  data() {
    return {
      name,
    };
  },
});
</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-align: center;
  .red {
    color: red;
  }
}
</style>
