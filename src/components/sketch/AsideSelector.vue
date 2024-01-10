<script setup lang="ts">
import { sketchStore, sketchDates } from '../../stores/sketch.store';
</script>

<template>
    <div class="flex flex-col gap-4">
      <button class="dateButton" 
        v-for="(sketchDate, index) in sketchDates" 
        @click="sketchStore.update(index)"
        :class="sketchStore.currentSketch?.id === index ? 'dateButtonSelected' : 'dateButton'"
      >
        {{sketchDate.title}}
      </button>
    </div>
</template>

<style>
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