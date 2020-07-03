<template>
    <div>
        Node Level: {{activeNode.name}}
        <component v-for="(temp, i) of renderedTemplates" :key="i" :is="temp.component" v-bind="temp.inputs"></component>
    </div>
</template>


<script>
import {mapState} from 'vuex';
import * as Parts from '@/parts';

export default {
    name: 'NodeLevel',
    computed: {
        ...mapState(['activeNode']),
        renderedTemplates() {
            if (this.activeNode.templates && this.activeNode.templates.length) {
                const temp = this.activeNode.templates.map(tp => {
                return {component: Parts[tp.component], inputs: tp.inputs}
            });
            return temp;
            }
            return [];
        }
    }
}
</script>