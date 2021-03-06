<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-primary">
        <div class="row justify-center">
          <div class="col-md-6 q-mx-auto">
            <img src="../static/todo.svg" class="" alt="tofo todo">
            <h2 class="q-mt-xs text-h4 text-white mobile">Organize your ToDo</h2>
          </div>
          <div class="col-md-6 q-mx-auto">
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur eligendi nulla possimus sapiente soluta?</p>
          </div>
        </div>
<!--            <div>-->

<!--              <h2 class="q-mt-xs text-center text-h4 text-white">Organize your ToDo</h2>-->
<!--              <p class="text-white text-center content-center">Let;s organize your daily to do list with priority and do everything without stress. </p>-->
<!--              <div><q-btn align="around" class="btn-fixed-width bg-blue-grey-6 text-white q-pa-xs q-ma-sm" label="Continue with Facebook" icon="facebook" /></div>-->
<!--              <div><q-btn align="around" class="btn-fixed-width bg-blue-grey-6 q-pa-xs q-ma-sm text-white"  label="Continue with Google" icon="google" /></div>-->
<!--              <div><q-btn align="around" class="btn-fixed-width bg-blue-grey-6 q-pa-xs q-ma-sm text-white"  label="Continue with Email" icon="mail" /></div>-->
<!--            </div>-->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
};
</script>

<style lang="sass" scoped>
.btn-fixed-width
  width: 400px
</style>


//https://dev.to/vycoder/a-simple-productivity-app-built-on-quasar-and-firebase-2h5a
