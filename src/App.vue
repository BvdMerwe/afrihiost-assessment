<template>
  <div id="app">
    <Modal ref="modal" id="main-modal">
      <RollbackConfirmation :project="currentProject"></RollbackConfirmation>
    </Modal>
    <Nav logo="Logo.svg" :user="currentUser"></Nav>

    <div class="main">
      <div class="sidebar">
        <ProjectDetails ref="projectDetails" :project="currentProject"/>
      </div>

      <div class="content">
        <div class="section dploy-script">
          <div class="grid-layout-2 title-container">
            <Title class="justify-start">Dploy script</Title>
            <CTA href="#" class="justify-end">Edit script <i class="icon-edit"></i></CTA>
          </div>
          <CodeBlock>
            {{currentProject.deployScript}}
          </CodeBlock>
        </div>
      
        <div class="section deployments">
          <div class="grid-layout-2 title-container">
            <Title class="justify-start">Deployments</Title>
            <CTA href="#" class="justify-end">View Deployment History <i class="icon-history"></i></CTA>
          </div>
          <div v-if="currentProject.deployments.length > 0" class="grid-layout-2 gutter-10">
            <DeploymentInfo v-for="deployment in currentProject.deployments" :key="deployment.id" :deployment="deployment">
            </DeploymentInfo>
          </div>

          <span v-else class="notice">There are currently no deployments</span>
        </div>

        <div class="section builds">
          <div class="grid-layout-2 title-container">
            <Title class="justify-start">Builds</Title>
          </div>
          <div class="build-card">
            <div v-if="currentProject.builds.length > 0"></div>
            <span v-else class="notice">There is currently no build history</span>
          </div>
        </div>

        <div class="section sentry">
          <div class="grid-layout-2 title-container">
            <Title class="justify-start">Sentry Issues</Title>
            <CTA href="#" class="justify-end">View on Sentry <i class="icon-popout"></i></CTA>
          </div>
          <div v-if="currentProject.sentry.issues.length > 0" class="issues-container">
            <Sentry :sentry="currentProject.sentry"></Sentry>
          </div>
          <span v-else class="notice">There are currently no issues</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import CTA from './components/CTA.vue'
import Title from './components/Title.vue'
import CodeBlock from './components/CodeBlock.vue'
import DeploymentInfo from './components/DeploymentInfo.vue'
import Sentry from './components/Sentry.vue'
import Modal from './components/modal.vue'
import RollbackConfirmation from './components/RollbackConfirmation.vue'

import helpers from './mixins/helpers'

export default {
  name: 'App',
  components: {
    Nav,
    ProjectDetails,
    CTA,
    Title,
    CodeBlock,
    DeploymentInfo,
    Sentry,
    Modal,
    RollbackConfirmation
  },
  data(){
    //making some assumptions on what will be recieved froma the API
    return {
      currentProject: {
        projectTitle: "FixedLTE",
        projectID: "234",
        projectPath: "Node CMS  |  ~/repo/fixed-wireless",
        projectImage: "project-images/1908-fixed-lte-gitlab-avatar.png",
        autoDeploy: true,
        slackNotifications: false,
        deployScript: `
git pull origin master
composer install --no-interaction --prefer-dist --optimize-autoloader
echo "" | sudo -S service php7.3-fpm reload

if [ -f artisan ]
then
    php artisan migrate --force
    php artisan horizon:terminate
fi

yarn
yarn prod

if [ -f artisan ]
then
    php artisan migrate --force
    php artisan horizon:terminate
fi`,
        deployments: [
          {
            id: 0,
            title: "Frodo Baggins",
            message: "Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet.",
            date: new Date("2019-08-23T15:52:00+0200"),
            status: "success",
            hash: "#7a7df2e"
          },
          {
            id: 1,
            title: "Bilbo Baggins",
            message: "Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet.",
            date: new Date("2019-08-23T15:52:00+0200"),
            status: "fail",
            hash: "#7a7df2e"
          },
        ],
        builds: [],
        sentry: {
          totalIssues: 102,
          usersAffected: 52,
          issues: [
            {
              issue: "UnhandledRejection",
              usersAffected: 265,
              events: 265

            },
            {
              issue: "UnhandledRejection",
              usersAffected: 265,
              events: 265

            },
            {
              issue: "UnhandledRejection",
              usersAffected: 265,
              events: 265

            },
            {
              issue: "UnhandledRejection",
              usersAffected: 265,
              events: 265

            },
            {
              issue: "UnhandledRejection",
              usersAffected: 265,
              events: 265

            },
          ],
        }
      },
      currentUser: {
        username: "Frodo Baggins",
        userEmail: "frodo@mordor.co",
        userImage: "users/T189G7EMC-U189XABK7-58e28f9aa76c-48.jpg"
      }
    }
  },
  methods: {
    rollBack() {
      this.$refs.modal.showModal()
    }
  },
  mounted() {
    this.$refs.projectDetails.$on('rollback', () => {
        this.rollBack()
    });
  },
  mixins: [helpers]
}
</script>

<style lang="scss">

@import './assets/font/Montserrat/stylesheet.css';
// TODO:Remove icons folder
@import './assets/font/afrihost-iconset/css/afrihost-iconset.css';

body {
  background-color: #11141D;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a:link, a:visited {
  color: inherit;
  text-decoration: none;
}

.regular {
  font-weight: 300;
}
.medium {
  font-weight: 500;
}
.bold {
  font-weight: bold;
}

[class*=grid-layout-] {
  display: grid;

  &.grid-layout-2 {
    grid-template-columns: 1fr 1fr;
  }
  &.grid-layout-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  &.grid-layout-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  &.gutter-10 {
    column-gap: 10px;
  }
}
.align-start {
    align-items: start;
}

.align-end {
    align-items: end;
}

.align-center {
    align-items: center;
}
.justify-start {
    justify-self: start;
}

.justify-end {
    justify-self: end;
}

.justify-center {
    justify-self: center;
}

.pad-top {
  padding-top: 25px;
}

#app {
  padding-top: 58px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}

.main {
  display: grid;
  grid-template-columns: 30% auto;
  column-gap: 13px;
  margin: 0 40px;
}

//debug
.sidebar ,
.content {
  // border: 1px solid greenyellow;
}

.section {
  margin: 0 0 28px;
}

.title-container {
  margin: 0 0 28px 15px;
}

.build-card {
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: rgba(#171C27,0.2);
  border: 1px solid rgba(#3D4558, 0.3);
  border-radius: 10px;
  min-height: 160px;
}

.notice {
  font-size: 21px;
  color: rgba(#3D4558, 0.5);
  font-weight: 600;
}
</style>
