<template>
  <div>
    <b-nav tabs class="nav-bar-cont">
      <b-nav-item>
        <router-link to="/">{{homeLink}}</router-link>
      </b-nav-item>
      <b-nav-item id="import-tab">
        <router-link
          :to="{ name: 'ImportTranslationPage', params: { transferredUploads: this.uploads } }"
        >{{importLink}}</router-link>
      </b-nav-item>
    </b-nav>
    <div class="navigation-buttons-container">
      <div></div>
      <SearchBar
        v-on:default-values="getDefaultValues"
        v-bind:inputText="inputText"
        v-on:pass-text="passText"
      />
      <TranslationsTable
        :showErrorAlert="showErrorAlert"
        :items="items"
        v-bind:inputText="inputText"
      />
      <div class="backend-alert-container">
        <b-alert
          v-if="showSearchBackendError"
          show
          variant="danger"
        >{{internetConnectionAlert}}</b-alert>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../app/shared/components/search-bar/search-bar";
import TranslationsTable from "../../app/shared/components/translations-table/translations-table";
import TranslationsService from "../shared/services/translations-service";
export default {
  name: "TranslationsDashboard",
  components: {
    SearchBar,
    TranslationsTable
  },
  mounted() {
    this.defineLinksText();
    this.defineAlertsText();
    this.uploads = this.$route.params.uploads;
    TranslationsService.getAllFiles()
      .then(result => {
        result.data.map(element => {
          delete element._id;
        });
        this.items = result.data;
      })
      .catch(error => {
        if (error) {
          this.showErrorAlert = true;
        }
      });
  },
  props: {},
  data() {
    return {
      inputText: [],
      id: 0,
      text: "",
      items: [],
      showErrorAlert: false,
      showSearchBackendError: false,
      uploads: [],
      homeLink:'',
      importLink:'',
      internetConnectionAlert:''
    };
  },
  methods: {
    passText(q) {
      this.inputText.push({
        text: q
      });
      this.id++;
      const body = {
        q
      };
      this.sendSearchedTranslations(body);
    },
    getDefaultValues(getDefaultTableValues) {
      if (getDefaultTableValues) {
        TranslationsService.getAllFiles()
          .then(result => {
            result.data.map(element => {
              delete element._id;
            });
            this.items = result.data;
          })
          .catch(error => {
            this.showErrorAlert = true;
          });
      }
    },
         /**
* This is the sendSearchedTranslations function that sends the typed values in the search bar to the database
to mmake a post request and recieve all translations matching the value that is typed in the search bar
@param body this is the values typed in the search bar
*/  sendSearchedTranslations(body) {
      TranslationsService.sendSearchedTranslation(body)
        .then(res => {
          this.items = res.data;
          console.log(res.data);
        })
        .catch(error => {
          this.showSearchBackendError = true;
        });
    },
    defineLinksText(){
      this.homeLink = 'Home';
      this.importLink = 'Import'
    },
    defineAlertsText(){
      this.internetConnectionAlert= 'Something went wrong while uploading a file';
    }
  }
};
</script>
<style scoped>
.navigation-buttons-container {
  margin-top: 2rem;
  margin-left: 2rem;
}
.home-button {
  margin-right: 0.75rem;
}
.backend-alert-container {
  margin-top: 2rem;
  margin-right: 2rem;
}
.nav-tabs a {
  color: #0d0d0d;
}
.nav-tabs a.nav-link.active a {
  color: #bf9c8f;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: transparent;
}
.tab-content:focus {
  outline: 0;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #0d0d0d;
  background-color: transparent;
  border-color: transparent;
  border: 0;
}
a. .nav-tabs .nav-link {
  background: transparent;
}
.nav-tabs {
  font-size: 1.2rem;
}
#import-text-navigation a.nav-link:active {
  color: #bf9c8f;
}
</style>
