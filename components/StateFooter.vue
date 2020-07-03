<template>
    <div>
        State Footer for  {{activeNode.name}}
        <FooterButton v-for="(nav, i) in activeNode.navs" :nav="nav" :key="i"/>
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