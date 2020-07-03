<template>
    <div>
        State Footer for  {{activeNode && activeNode.name}}
        <template v-if="activeNode && activeNode.navs">
            <FooterButton v-for="(nav, i) in activeNode.navs" :nav="nav" :key="i"/>
        </template>
    </div>
</template>


<script>
import {mapState} from 'vuex';
import FooterButton from '@/components/FooterButton';

export default {
    name: 'StateFooter',
    components: {FooterButton},
    computed: {
        ...mapState(['activeNode'])
    },
    methods: {
    }
}
</script>