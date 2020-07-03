<template>
    <div>
        Acion panel node
        <component v-for="(temp, i) of renderedPanelTemplates" :key="i" :is="temp.component" v-bind="temp.inputs"></component>
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
        ...mapState(['actionPanelNode']),
        ...mapGetters(['renderedPanelTemplates'])
    }
}
</script>