<template>
  <div class="card">
    <div v-for="number in amount" class="card__shape" :class="classes" :key="number"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import range from 'lodash.range';
import Features from '@/interfaces/Features';

@Component
export default class Card extends Vue {
  @Prop({ required: true })
  readonly features!: Features;

  get amount(): Array<number> {
    return range(1, this.features.amount + 1);
  }

  get classes(): Array<String> {
    return [
      `card__shape--${this.features.shape}`,
      `card__shape--${this.features.shade}`,
      `card__shape--${this.features.color}`,
    ];
  }
}
</script>
