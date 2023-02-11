<template>
  <div class="main">
    <h1 class="center">Server Dump</h1>
    <div class="parent">
      <div class="info">
        <h4>Server Info</h4>
        <span><b>Plugin name: </b>{{ pluginName }}</span>
        <span><b>Plugin version: </b>{{ version }}</span>
        <span><b>Server Software</b> {{ serverVersion }}</span>
        <span><b>Java Version</b> {{ javaVersion }}</span>
      </div>
    </div>

    <div class="parent">
      <div class="info">
        <h4>Git Info</h4>
        <span><b>Commit: </b>{{ gitCommit }}</span>
        <span><b>Commit user: </b> {{ gitUser }}</span>
        <span><b>Branch: </b> {{ gitBranch }}</span>
        <span><b>Build time: </b> {{ buildTime }}</span>
      </div>
    </div>

    <div class="parent">
      <div class="info">
        <h4 >Server Specs</h4>
        <span><b>OS: </b>{{ osName }} ({{ osArch }})</span>
        <span><b>OS Version: </b> {{ osVersion }}</span>
        <span><b>Uptime: </b> {{ uptime }} </span>
        <span><b>Memory: </b> {{ allocatedMemory }} MB </span>
        <span><b>CPUs: </b> {{ cpuCores }} </span>
      </div>
    </div>

    <!-- Installed Addons -->
    <div class="parent">
      <div class="info">
        <h4 class="left">Installed Addons</h4>
        <Spoiler title="Show it">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Ver</th>
                <th scope="col">Description</th>
                <th scope="col">Main</th>
              </tr>
            </thead>
            <tbody>
              <AddonRow
                v-for="index in addons"
                :key="index.key"
                :name="index.name"
                :author="index.author"
                :description="index.description"
                :version="index.version"
                :main="index.main"
              >
              </AddonRow>
            </tbody>
          </table>
        </Spoiler>
      </div>
    </div>
  </div>

  <!-- Installed Plugins -->
  <div class="parent">
    <div class="info">
      <h4 class="left">Installed Plugins</h4>
      <Spoiler title="Show it">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Ver</th>
              <th scope="col">Description</th>            
              <th scope="col">Main</th>
            </tr>
          </thead>
          <tbody>
            <AddonRow
              v-for="index in plugins"
              :key="index.key"
              :name="index.name"
              :author="index.author"
              :description="index.description"
              :version="index.version"
              :main="index.main"
            >
            </AddonRow>
          </tbody>
        </table>
      </Spoiler>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Notiflix from "notiflix";
import AddonRow from "../components/AddonRow.vue";

export default {
  name: "Dump",
  data() {
    return {
      invalid: false,
      pasteID: "",

      pluginName: "Loading...",
      version: "Loading...",
      serverVersion: "Loading...",
      javaVersion: "Loading...",

      osName: "Loading...",
      osArch: "...",
      osVersion: "Loading...",
      uptime: "Loading...",
      cpuName: "Loading...",
      cpuCores: "...",
      allocatedMemory: "Loading...",

      addons: [
        {
          name: "Loading...",
          author: "Loading...",
          description: "Loading...",
          version: "Loading...",
          main: "Loading...",
        },
      ],

      plugins: [
        {
          name: "Loading...",
          author: "Loading...",
          description: "Loading...",
          version: "Loading...",
          main: "Loading...",
        },
      ],

      config: "Loading...",

      gitUser: "Loading...",
      gitBranch: "Loading...",
      gitCommit: "Loading...",
      buildTime: "Loading...",
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    onload() {
      this.loadData();
    },

    async loadData() {
      this.pasteID = this.$route.params.id;
      if (!this.pasteID) {
        this.invalid = true;
        console.log("Invalid paste id");
        console.log(this.pasteID);
        return;
      }
      try {
        const { data } = await axios.get(`https://api.pastes.dev/${this.pasteID}`);
        console.log(data);

        const dump = data;

        this.version = dump.version;
        this.serverVersion = dump.serverSoftware;
        this.javaVersion = dump.javaVersion;
        this.gitBranch = dump.git.branch;
        this.gitCommit = dump.git.commit;
        this.gitUser = dump.git.user;
        this.buildTime = dump.git.time;
        this.pluginName = dump.pluginName;

        this.osName = dump.osName;
        this.uptime = dump.uptime;
        this.cpuCores = dump.cpuCores;
        this.allocatedMemory = dump.allocatedMemory;
        this.cpuName = dump.cpuName;
        this.osArch = dump.osArch;
        this.osVersion = dump.osVersion;

        this.addons = dump.addons;
        this.plugins = dump.plugins;

        this.loaded = true;
      } catch (e) {
        console.log(e);
        Notiflix.Notify.failure("Error loading dump!");
        this.error = e.response ? e.response.data : e.message;
      }
    },
  },
  components: {
    AddonRow,
  },
  computed: {
    pasteId() {
      return this.$route.hash ? this.$route.hash.substring(1) : this.$route.query.id;
    },
    originalUrl() {
      return `https://paste.gg/p/anonymous/${this.pasteId}`;
    },
  },
};
</script>

<style scoped>
@import "./../assets/css/dump.css";
</style>
