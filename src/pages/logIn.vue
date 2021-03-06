<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col">

          </div>
          <div class="col q-ml-md">image side</div>

        </div>
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
