<template>
  <q-page padding>
    <div class="">
      <h3 class="q-mt-sm">About</h3>
      <div class=""></div>
      <p class="q-pr-lg text-subtitle1 text-justify q-mx-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque delectus, deleniti dignissimos dolorem eligendi obcaecati quis saepe sapiente veniam. Earum error modi tempore voluptatum.</p>
      <p class="q-pr-lg text-subtitle1 text-justify q-mx-sm q-mt-md-lg" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur debitis inventore nulla odio, officiis omnis quos recusandae tempore voluptates. A animi aperiam aspernatur consectetur cumque cupiditate distinctio doloremque excepturi fugit illum magni minima molestiae neque obcaecati, officiis provident quas quasi quidem quo ratione recusandae, reiciendis reprehenderit, sint vero voluptate?</p>
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
