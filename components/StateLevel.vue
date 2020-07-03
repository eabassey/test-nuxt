<template>
    <div>
        State Level: {{activeState && activeState.name}}
        <NodeLevel />
    </div>
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