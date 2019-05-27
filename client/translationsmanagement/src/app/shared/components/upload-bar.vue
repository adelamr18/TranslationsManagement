<template>
  <!-- <div class="upload-container" >
     <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="pl-Pl">
  <label class="custom-file-label" for="customFileLang"></label>
</div>
  </div>-->
  <div class="upload-content">
    <div class="upload-text">Upload file</div>
    <div class="upload-bar">
      <b-form-file
        v-model="file"
        id="selectFiles"
        :state="Boolean(file)"
        placeholder="Choose a file..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <div class="submit-upload">
      <button class="btn btn-primary" @click="submitFile" id="import">Import</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TranslationService from "../services/translations-service";
export default {
  name: "UploadBar",
  props: [""],
  methods: {
    submitFile() {
      var files = document.getElementById("selectFiles").files;
      // console.log(files[0].name)
      this.$emit("changeMsg", files[0].name);
      if (files.length <= 0) {
        return false;
      }
      var fr = new FileReader();
      fr.onload = function(e) {
        var result = JSON.parse(e.target.result);
        TranslationService.sendFiles(JSON.stringify(result, null, 2))
          .then(res => {})
          .catch(error => {});
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
      fileNames: []
    };
  }
};
</script>
<style scoped>
.upload-bar-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
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

.upload-bar {
  flex-grow: 0.9;
  margin-left: 2rem;
  margin-right: 4rem;
}
.upload-container {
  display: flex;
}
.upload-content {
  margin-top: 2rem;
  display: flex;
}

.submit-upload {
  margin-top: 0.1rem;
}
.upload-text {
  margin-top: 0.12rem;
}
.custom-file-input.is-invalid,
.custom-file-label {
  border-color: black !important;
}
</style>
