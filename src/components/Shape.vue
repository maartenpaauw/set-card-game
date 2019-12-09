<template>
  <component :is="shape" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Diamond from '@/assets/icons/diamond-open.svg';
import DiamondStriped from '@/assets/icons/diamond-striped.svg';
import DiamondSolid from '@/assets/icons/diamond-solid.svg';
import Pill from '@/assets/icons/pill-open.svg';
import PillStriped from '@/assets/icons/pill-striped.svg';
import PillSolid from '@/assets/icons/pill-solid.svg';
import Squiggle from '@/assets/icons/squiggle-open.svg';
import SquiggleStriped from '@/assets/icons/squiggle-striped.svg';
import SquiggleSolid from '@/assets/icons/squiggle-solid.svg';

@Component({
  components: {
    'set-diamond-open': Diamond,
    'set-diamond-striped': DiamondStriped,
    'set-diamond-solid': DiamondSolid,
    'set-pill-open': Pill,
    'set-pill-striped': PillStriped,
    'set-pill-solid': PillSolid,
    'set-squiggle-open': Squiggle,
    'set-squiggle-striped': SquiggleStriped,
    'set-squiggle-solid': SquiggleSolid,
  },
})
export default class Shape extends Vue {
  @Prop({ required: true })
  shape!: string;
}
</script>
