<script setup lang="ts">
import { ref, computed, type PropType } from 'vue';
import type { IWebPost } from '../../stores/posts.store';

const props = defineProps({
  children: {
    type: Array as PropType<IWebPost[]>,
    required: true,
  },
})
const sketchIndex = ref(0)
const currentSketchChild = computed(() => {
  return props.children.at(sketchIndex.value)
})
const updateIndex = (index: number) => {
  sketchIndex.value = index
}
</script>

<template>
  <div class="basis-1/6 mt-20">
    <div class="flex flex-col gap-4">
      <button class="dateButton" 
        v-for="(sketchDate, index) in children" 
        @click="updateIndex(index as any)"
        :class="sketchIndex === index ? 'dateButtonSelected' : 'dateButton'"
      >
        {{sketchDate.title}}
      </button>
    </div>
  </div>
  <div class="basis-5/6 mx-24">
    <div class="flex flex-col gap-4">
      <h2 class="aboutTitle pb-3">{{currentSketchChild?.title}}</h2>
      <img :src="currentSketchChild?.cover?.source" />
      <div class="mainText flex justify-center">
        <p>{{currentSketchChild?.textBlocks[0]}} {{currentSketchChild?.textBlocks[1]}}</p>
      </div>
      <img :src="currentSketchChild?.endImage?.source" />
    </div>
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

.dateButton {
  color: #878988;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
}

.dateButtonSelected {
  color: #363636;
  font-weight: 700;;
}
</style>