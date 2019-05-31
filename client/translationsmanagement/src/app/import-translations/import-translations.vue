<template>
  <div>
    <b-nav tabs class="nav-bar-cont">
      <b-nav-item>
        <router-link
          :to="{ name: 'TranslationsDashboard', params: { uploads: this.fileNames} }"
        >{{homeLink}}</router-link>
      </b-nav-item>
      <b-nav-item id="import-tab">
        <router-link :to="{ name: 'ImportTranslationPage'}">{{importLink}}</router-link>
      </b-nav-item>
    </b-nav>
    <div class="upload-history-container">
      <div class="navigation-buttons-container">
        <div>
          <UploadBar @upload-history="updateFilesHistory"/>
        </div>

        <div class="uploaded-history-files" v-if="isFileSelected">
          <div id="upload-history-text">File uploads history</div>
          <div
            class="file-uploaded-with-name-container"
            v-bind:key="value.id"
            v-for="value in fileNames "
          >
            <div class="uploaded-file-icon">
              <font-awesome-icon icon="file"/>
            </div>
            <div class="uploaded-file-name">{{value.fileName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadBar from "../shared/components/upload-bar/upload-bar";
export default {
  name: "ImportTranslationPage",
  data() {
    return {
      fileNames: [],
      id: 0,
      isFileSelected: false,
      transferredResults: [],
      homeLink:'',
      importLink:''
    };
  },
  components: {
    UploadBar
  },
  mounted() {
 this.defineLinksText();
    if (this.$route.params.transferredUploads ) {
      var results = this.$route.params.transferredUploads;
      for (let key in results) {
        this.updateFilesHistory(results[key].fileName);
      }
    }
  },
  methods: {
    updateFilesHistory(name) {
      if (name) {
        this.isFileSelected = true;
        this.fileNames.push({
          id: this.id++,
          fileName: name
        });
      }
    },
    defineLinksText(){
      this.homeLink = 'Home';
      this.importLink = 'Import'    }
  },

  props: [""]
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
.uploaded-history-files {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.file-uploaded-with-name-container {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-left: 1.5rem;
}
#upload-history-text {
  margin-top: 1.5rem;
  display: block;
  width: 100%;
}
.svg-inline--fa.fa-w-12 {
  font-size: 1.5rem;
}
path {
  fill: #bf9c8f;
}
.upload-history-container {
  font: 400 17px/1.8 Lato, sans-serif;
}
</style>
