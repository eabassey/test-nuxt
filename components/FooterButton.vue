<template>
    <a-button type="primary" @click="selectNextNode(nav.nextNode)">{{nav.text}}</a-button>
</template>


<script>
export default {
    name: 'FooterButton',
    props: ['nav'],
    methods: {
        selectNextNode(node) {
            const query = this.$route.query;
            this.$router.push({params: {node}, query})
        }
    }
}
</script>