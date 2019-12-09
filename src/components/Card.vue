<template>
  <div class="card">
    <set-shape
      class="card__shape"
      v-for="number in features.amount"
      :key="number"
      :shape="shape"
      :class="classes"/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Features from '@/interfaces/Features';
import Shape from '@/components/Shape.vue';

@Component({
  components: {
    'set-shape': Shape,
  },
})
export default class Card extends Vue {
  @Prop({ required: true })
  readonly features!: Features;

  get shape(): string {
    return `set-${this.features.shape}-${this.features.shade}`;
  }

  get classes(): Array<String> {
    return [
      `card__shape--${this.features.color}`,
      `card__shape--${this.features.shade}`,
    ];
  }
}
</script>
