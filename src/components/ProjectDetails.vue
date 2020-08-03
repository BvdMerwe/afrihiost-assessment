<template>
    <div id="project-details">
        <CTA href="#" id="back-button">
            <i class="icon-back"></i>
        </CTA>

        <div class="project-information">
            <div class="image-container" :style="cssVars">
            </div>
            <div class="project-title">{{project.projectTitle}}</div>
            <div class="project-path medium">{{project.projectPath}}</div>
            <div class="highlight bold" id="project-id">
                Project id: {{project.projectID}}
                <CTA class="small justify-end " href="#">
                    view on gitlab
                </CTA>
            </div>
            <div class="highlight bold" id="project-id">
                Auto deploy:
                <vue-toggle-btn :options="{isActive: project.autoDeploy}" class="justify-end"></vue-toggle-btn>
            </div>
            <div class="highlight bold" id="project-id">
                Slack Notifications
                <vue-toggle-btn :options="{isActive: project.slackNotifications}" class="justify-end"></vue-toggle-btn>
            </div>
        </div>
        <div class="grid-layout-2 align-center gutter-10 pad-top">
            <CTA class="" href="#" @click.native="rollbackClicked">
                Rollback
            </CTA>
            <CTA class="outline" href="#">
                Deploy Now
            </CTA>
        </div>

        <CTA class="discrete" href="#">
            Archive Project
        </CTA>
    </div>
</template>

<script>
import CTA from "./CTA"

import helpers from '../mixins/helpers';
import VueToggleBtn from './toggle-btn.vue';

export default {
    name: "ProjectDetails",
    components: {
        CTA,
        VueToggleBtn
    },
    props: {
        project: {
            type: Object
        }
    },
    mixins: [helpers],
    computed: {
        cssVars() {
            return {
                '--imageUrl': "url('"+this.getImgUrl(this.project.projectImage)+"')"
            }
        }
    },
    methods: {
        rollbackClicked(e) {
            e.preventDefault();
            this.$emit('rollback')
        }
    }

}
</script>

<style lang="scss" scoped>

#project-details {
    position: relative;
    padding-top: 70px;
}

.project-information {
    display: grid;
    
    background-color: #171C27;
    padding: 0 14px 14px;
    border-radius: 10px;
}

#back-button {
    position: absolute;
    top: 10px;
    left: 10px;
}

.highlight {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    text-align: left;
    font-size: 14px;
    background-color: rgba(#3D4558, 0.4);
    color:#647291;
    border-radius: 10px;
    padding: 11px 13px;
    margin-bottom: 11px;
}

.project-title {
    font-size: 29px;
    color: #CDDDFF;
    margin-bottom: 13px;
}
.project-path {
    font-size: 13px;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.image-container {
    margin-top: -70px;
    overflow: hidden;
    width: 140px;
    height: 140px;
    border-radius: 1000px;
    border: 11px solid #171C27;
    justify-self: center;

    background-image: var(--imageUrl);
    // background-image: url(../assets/project-images/1908-fixed-lte-gitlab-avatar.png);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>