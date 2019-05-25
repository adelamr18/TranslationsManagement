<template>
  <div>
    <input type="file" id="selectFiles" value="Import">
    <br>
    <button @click="submitFile" id="import">Import</button>
    <textarea id="result"></textarea>
  </div>
</template>
<script>
import axios from "axios";
import TranslationService from "../services/translations-service";
export default {
  name: "UploadBar",
  props: [""],
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      var files = document.getElementById("selectFiles").files;
      if (files.length <= 0) {
        return false;
      }
      var fr = new FileReader();
      fr.onload = function(e) {
        var result = JSON.parse(e.target.result);
        TranslationService.sendFiles(JSON.stringify(result, null, 2))
          .then(res => {
            console.log(result);
          })
          .catch(error => {
            console.log(error);
          });
      };
      fr.readAsText(files.item(0));
    }
  },
  data() {
    return {
      file: "",
      error: false,
      message: "",
      allowSubmit: false,
    };
  }
};
</script>
<style scoped>
.upload-bar-container {
  display: flex;
}
form {
  margin-top: 1rem;
}
.field {
  display: flex;
}
#result {
  display: block;
  width: 400px;
  height: 200px;
}

#import {
  margin: 10px 0;
}
</style>
