<template>
  <div>
    <div class="table-tabs">
      <b-tabs content-class="mt-3 ">
        <b-tab title="Search Results">
          <div class="table-container">
            <b-table responsive bordered hover :items="items"></b-table>
          </div>
        </b-tab>
        <b-tab title="History">
          <div v-bind:key="value.id" v-for="value in inputText">
            <b-card>{{value.text}}</b-card>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import translationService from "../services/translations-service";
export default {
  name: "TranslationsTable",
  props: ["inputText", "items"],
  methods: {},
  components: {},
  data() {
    return {};
  }
};
</script>
<style scoped>
.table-tabs {
  margin-top: 2rem;
}
.table thead th {
  width: 50%;
}
.table-container {
  margin-top: -1rem;
}
</style>
