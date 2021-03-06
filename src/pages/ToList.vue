<template>
  <q-page>
    <div class="q-pa-xs q-ma-md rounded-borders bg-secondary">
      <h3 class="q-pl-sm text-white">Today's List</h3>
    </div>

  </q-page>
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
