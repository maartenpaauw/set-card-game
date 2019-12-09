<template>
  <section>
    <template v-for="card in deck.cards">
      <set-card :features="card.features" :key="card.id" style="card" />
    </template>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import Deck from '@/models/Deck';

@Component({
  components: {
    'set-card': Card,
  },
})
export default class Home extends Vue {
  readonly deck: Deck = new Deck().shuffle();
}
</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    margin: 10px;
  }
</style>
