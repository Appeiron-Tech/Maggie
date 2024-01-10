<script setup lang="ts">
import { sketchStore } from '../../stores/sketch.store';
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="aboutTitle pb-3">{{sketchStore.currentSketch.title}}</h2>
    <img :src="sketchStore.currentSketch.coverImage" />
    <div class="mainText flex justify-center">
      <p>{{sketchStore.currentSketch.mainText}} {{sketchStore.currentSketch.mainText}}</p>
    </div>
    <img :src="sketchStore.currentSketch.endImage" />
  </div>
</template>

<style>
h2 {
  color: #363636;
  font-weight: 500;
  line-height: 53px;
  font-size: 3rem;
}

.aboutTitle {
  color: #363636;
  font-size: 50px;
  font-weight: 500;
  line-height: 53px;
}

.mainText {
  color: #363636;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
</style>