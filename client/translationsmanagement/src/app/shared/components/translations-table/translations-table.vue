<template>
  <div>
    <div class="table-tabs ">
      <b-tabs content-class="mt-3 ">
        <b-tab title="Search Results">
          <div class="table-container">
            <b-table responsive striped  bordered hover :items="items"></b-table>
            <div class="alert-container">
              <b-alert
                v-if="showErrorAlert"
                show
                variant="danger"
              >{{resultsErrorRetrieving}}</b-alert>
            </div>
          </div>
        </b-tab>
        <b-tab title="History">
          <div class="search-values-parent-container">
            <h4 class="search-history">Search History</h4>
            <b-card  class="search-values-child-container">
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
import TranslationService from "../../services/translations-service";
export default {
  name: "TranslationsTable",
  props: ["inputText", "items", "showHistoryCard", "showErrorAlert"],
  mounted(){
    this.defineTextError();
    this.defineSearchHistory()
  },
  methods: {
    defineTextError(){
      this.resultsErrorRetrieving = 'Something went wrong while retrieving results'
    },
    defineSearchHistory(){
      this.searchHistoryText = 'Search History';
    }
  },
  components: {},
  data() {
    return {
      resultsErrorRetrieving:'',
      searchHistoryText:''
    };
  }
};
</script>
<style >
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
  text-align: center;}
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
 .table-tabs .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
  background: #BF9C8F;
  color: #fff
}
.tab-content:focus{
outline: 0;
}
.table-responsive{
  outline: 0;
}
.tab-pane.active:focus{
  outline: 0;
}
.table-tabs .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem ;
    border-top-right-radius: 0.25rem;
    color: #0D0D0D;
}
.table-tabs .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: transparent;
}
.card-body{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          padding: 1.25rem;
    border-radius: 0.25rem;
    max-height:11.11rem;
    overflow: auto;
}
.search-history{
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
}
.table-tabs .nav-tabs .nav-item {
    margin-bottom: -2px;
}
</style>
