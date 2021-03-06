<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-pa-md">
        <div class="text-h2">To Do List</div>
        <div class="text-subtitle1 q-pt-md"> 02 March 2021</div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="230"
      :breakpoint="650"
    >
      <q-scroll-area style="height: calc(100% - 186px); margin-top: 186px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            to="/"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section class="text-weight-medium text-subtitle1">
              ToDo Lists
            </q-item-section>
          </q-item>
          <q-item
            to="about"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section class="text-weight-medium text-subtitle1">
              Help
            </q-item-section>
          </q-item>
          <q-item
            to="login"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>

            <q-item-section class="text-weight-medium text-subtitle1">
              login
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top bannerImage " src="../static/hero_banner.jpg" style="height: 186px">
        <div class="absolute-bottom bg-transparent ">
          <q-avatar  size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="q-pa-sm-xs">
            <div class="text-weight-bold text-h6">Alkemy Hossain</div>
            <div>@alkemy</div>
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
];

import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;
}
</script>
