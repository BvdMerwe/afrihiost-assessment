<template>
  <div id="rollback-confirmation">
      <div class="confirmation-section deployment-selector" :class="[screen == 0 ? 'show' : '']">
          <Title>Project Rollback</Title>
          <p>Choose a deployment to roll back to</p>
          <div class="deployment-list">
            <div v-for="deployment in deployments" :key="deployment.id" class="deployment-info" @click="select(deployment)" :class="[selected.id == deployment.id ? 'selected' : '']">
                <div class="name">{{formatName(deployment.title)}} </div>
                <div class="hash">{{deployment.hash}}</div>
                <div class="time"><span v-html="formatDate(deployment.date)"/></div>
            </div>
          </div>
          <div class="bottom-controls">
              <CTA href="#" class="justify-start" @click.native="back">Back</CTA>
              <CTA href="#" class="justify-end" :class="[!selected.id ? 'discrete disabled' : 'outline']" @click.native="confirm">Next</CTA>
              <!-- <CTA href="#" class="justify-end outline" @click.native="confirm">Next</CTA> -->
          </div>
      </div>

      <div class="confirmation-section confirmation" :class="[screen == 1 ? 'show' : '']">
          <Title>Are you sure?</Title>
          <p>Are you sure you want to roll back?</p>
          <DeploymentInfo v-if="selected" class="outline" :deployment="selected"></DeploymentInfo>
          <div class="bottom-controls">
              <CTA href="#" class="justify-start" @click.native="back">No, Go Back</CTA>
              <CTA href="#" class="justify-end outline" @click.native="confirm">Yes, Rollback</CTA>
          </div>
      </div>

      <div class="confirmation-section response-mesage" :class="[screen == 2 ? 'show' : '']">
          <img src="../assets/img-tick.svg" alt="Success"/>
          <Title>Rollback Succesful</Title>
          <p>{{project.projectTitle}} has been rolled back successfully</p>
          <CTA href="" class="outline">Go to Project</CTA>
      </div>
  </div>
</template>

<script>
import DeploymentInfo from "./DeploymentInfo"
import Title from "./Title"
import CTA from "./CTA"
export default {
    name: "RollbackConfirmation",
    props: {
        project: {
            type: Object
        }
    },
    data() {
        return {
            screen: 0,
            selected: {},
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
                    title: "Arwen",
                    message: "This was definitely harder than I expected it would be. Thanks for the challenge.",
                    date: new Date("2019-08-23T15:52:00+0200"),
                    status: "success",
                    hash: "#7a7df2e"
                },
                {
                    id: 2,
                    title: "Bilbo Baggins",
                    message: "Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet.",
                    date: new Date("2019-08-23T15:52:00+0200"),
                    status: "success",
                    hash: "#7a7df2e"
                },
                {
                    id: 3,
                    title: "Pippin Took",
                    message: "Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet.",
                    date: new Date("2019-08-23T15:52:00+0200"),
                    status: "success",
                    hash: "#7a7df2e"
                },
                {
                    id: 4,
                    title: "Gandalf",
                    message: "Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet.",
                    date: new Date("2019-08-23T15:52:00+0200"),
                    status: "success",
                    hash: "#7a7df2e"
                }
            ]
        }
    },
    components: {
        Title,
        CTA,
        DeploymentInfo
    },
    methods: {
        back(e){
            e.preventDefault();
            if (this.screen > 0)
                this.screen--;
            else 
                this.$parent.$emit('closeModal');
        },
        select(deployment){

            this.deployments.forEach(deployment => {
                deployment.selected = false;
            });

            // item.classList.add('selected')

            this.selected = deployment;
            deployment.selected = true
        },
        confirm(e){
            e.preventDefault();
            this.screen++;
            
        },
        formatDate(date) {
            if (!date) return
            let result = "";

            let hours = date.getHours();
            let minutes = date.getMinutes();

            result = hours + ":" + minutes;
            result += "&nbsp;&nbsp;&nbsp;&nbsp;";
            result += date.getDate() + "&nbsp;" + date.getMonth() + 1 + "&nbsp;" + date.getUTCFullYear();
            return result;
        },
        formatName(name) {
            if (!name) return
            let result = name.split(' ')[0];
            if (name.split(' ')[1]) {
                result += " " + name.split(' ')[1].substr(0,1)
            }
            return result;
        }
    }

}
</script>

<style scoped lang="scss">
#rollback-confirmation {
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // width: calc(300% - 400px);
    position: relative;
    color:#CDDDFF;
    font-size: 20px;
    font-weight: 400;
    img {
        padding-bottom: 28px;
    }
    p {
        margin: 6px 0 42px;
    }
    padding: 100px;

    & > div {
        display: none;
        &.show {
            display: block;
        }
    }
}

.deployment-list {
    display: grid;
    row-gap: 10px;
}

.deployment-info {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    justify-items: start;
    background-color: rgba(#3D4558, 0.3);
    border-radius: 10px;
    padding: 10px 28px;
    border: 1px solid transparent;

    &.selected {
        border: 1px solid #CDDDFF;
    }

    & > * {
        pointer-events: none;
    }
}

.name {
    color: #CDDDFF;
    font-size: 14px;
}

.time {
    color: #647291;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
    justify-self: end;
}

.message {
    color: #647291;
    font-size: 10px;
    font-weight: bold;
}

.hash {
    color: #647291;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    padding: 9px 31px;
    background-color: #3D4558;
    border-radius: 10px;
    align-self: start;
}

.bottom-controls {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#3D4558, 0.3);
    border-radius: 0 0 10px 10px;
    padding: 12px 14px;

    .cta {
        min-width: 170px;
    }
}
.outline {
    border: 1px solid;
}
</style>