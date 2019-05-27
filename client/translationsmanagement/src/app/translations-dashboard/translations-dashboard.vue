<template>
  <div>
    <div class="navigation-buttons-container">
      <div class="navigation-buttons-children">
        <router-link to="/">
          <button type="button home-button" class="btn btn-primary">Home</button>
        </router-link>
        <router-link to="/import">
          <button type="button import-button" class="btn btn-success">Import</button>
        </router-link>
      </div>
      <SearchBar v-on:default-values="getDefaultValues"  v-bind:inputText="inputText" v-on:pass-text="passText" />
      <TranslationsTable :items="items"  v-bind:inputText="inputText"/>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../app/shared/components/search-bar";
import TranslationsTable from "../../app/shared/components/translations-table";
import TranslationsService from "../shared/services/translations-service";
export default {
  name: "TranslationsDashboard",
  components: {
    SearchBar,
    TranslationsTable
  },
     mounted(){
       TranslationsService
      .getAllFiles()
      .then(result => {
         result.data.map((element) => {
         delete element._id
      });
        this.items = result.data;
      })
      .catch(error => {
        alert(error);
      });
    },
  props: {},
  data() {
    return {
      inputText: [],
      id: 0,
      text: "",
      items:[]
    };
  },
  methods: {
    passText(q) {
       this.inputText.push({
        text:q
      })
      this.id++;
      const body = {
        q
      }
      TranslationsService.sendSearchedTranslation(body).then(res => {
        this.items= res.data;
      });
    },
    getDefaultValues(getDefaultTableValues){
if(getDefaultTableValues){
      TranslationsService
      .getAllFiles()
      .then(result => {
         result.data.map((element) => {
         delete element._id
      });
        this.items = result.data;
      })
      .catch(error => {
        alert(error);
      });
    }
  }
}};
</script>
<style scoped>
.navigation-buttons-container {
  margin-top: 2rem;
  margin-left: 2rem;
}
.home-button {
  margin-right: 0.75rem;
}
</style>
