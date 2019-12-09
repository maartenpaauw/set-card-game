<template>
  <component :is="shape" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Diamond from '@/assets/icons/diamond-open.svg';
import DiamondSolid from '@/assets/icons/diamond-solid.svg';
import DiamondStriped from '@/assets/icons/diamond-striped.svg';
import Pill from '@/assets/icons/pill-open.svg';
import PillSolid from '@/assets/icons/pill-solid.svg';
import PillStriped from '@/assets/icons/pill-striped.svg';
import Squiggle from '@/assets/icons/squiggle-open.svg';
import SquiggleSolid from '@/assets/icons/squiggle-solid.svg';
import SquiggleStriped from '@/assets/icons/squiggle-striped.svg';

@Component({
  components: {
    'set-diamond-open': Diamond,
    'set-diamond-solid': DiamondSolid,
    'set-diamond-striped': DiamondStriped,
    'set-pill-open': Pill,
    'set-pill-solid': PillSolid,
    'set-pill-striped': PillStriped,
    'set-squiggle-open': Squiggle,
    'set-squiggle-solid': SquiggleSolid,
    'set-squiggle-striped': SquiggleStriped,
  },
})
export default class Shape extends Vue {
  @Prop({ required: true })
  shape!: string;
}
</script>
