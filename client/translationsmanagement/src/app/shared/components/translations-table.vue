<template>
  <div>
    <div class="table-tabs">
      <b-tabs content-class="mt-3 ">
        <b-tab title="Search Results">
          <div class="table-container">
            <b-table responsive bordered hover :items="items"></b-table>
            <div class="alert-container">
              <b-alert
                v-if="showErrorAlert"
                show
                variant="danger"
              >Something went wrong while retrieving results</b-alert>
            </div>
          </div>
        </b-tab>
        <b-tab title="History">
          <div class="search-values-parent-container">
            <b-card title="Search History" class="search-values-child-container">
              <div
                v-bind:key="value.id"
                v-for="value in inputText"
                class="search-history-values"
              >{{value.text}}</div>
            </b-card>
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
  props: ["inputText", "items", "showHistoryCard", "showErrorAlert"],
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
.search-values-child-container {
  width: 50%;
  margin: auto;
}
.card-title {
  text-align: center;
}
.search-history-values {
  margin-top: 1rem;
}
.search-values-parent-container {
  margin-top: 2rem;
}
.alert-container {
  margin-top: 2rem;
  margin-right: 2rem;
}
</style>
