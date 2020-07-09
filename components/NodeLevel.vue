<template>
    <div>
        Node Level: {{activeNode && activeNode.name}}
        <component v-for="(temp, i) of renderedTemplates" :key="i" :is="temp.component" v-bind="temp.inputs"></component>
    </div>
</template>


<script>
import {mapState, mapGetters} from 'vuex';
import * as Parts from '@/parts';

export default {
    name: 'NodeLevel',
    components: {...Parts},
    methods: {

    },
    computed: {
        ...mapState(['activeNode']),
        ...mapGetters(['renderedTemplates'])
    }
}
</script>