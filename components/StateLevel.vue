<template>
        <NodeLevel />
</template>


<script>
import NodeLevel from '@/components/NodeLevel';
import {mapState} from 'vuex';

export default {
    name: 'StateLevel',
    components: { NodeLevel },
    computed: {
        ...mapState(['activeState'])
    }
}
</script>

<style lang="scss">
    :host {
    width: 100%;
  }
  
  [hidden] {
    display: none !important;
  }
  
  .flow-action-shell {
    height: 100%;
  }
</style>