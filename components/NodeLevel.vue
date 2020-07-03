<template>
    <div>
        Node Level: {{activeNode.name}}
        <component v-for="(temp, i) of renderedTemplates" :key="i" :is="temp.component" v-bind="temp.inputs"></component>
    </div>
</template>


<script>
import {mapState, mapGetters} from 'vuex';
import * as Parts from '@/parts';

export default {
    name: 'NodeLevel',
    methods: {

    },
    computed: {
        ...mapState(['activeNode']),
        ...mapGetters(['renderedTemplates'])
    }
}
</script>