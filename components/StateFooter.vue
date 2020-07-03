<template>
    <div>
        State Footer for  {{activeNode.name}}
        <a-button type="primary" @click="nextNode('node2')">To Node 2</a-button>
         <a-button type="primary" @click="nextNode('node1')">To Node 1</a-button>
    </div>
</template>


<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['activeNode'])
    },
    methods: {
        nextNode(node) {
            // this.$router.push({path: '/test-app/state1/node2'})
            this.$router.push({params: {node}})
        }
    }
}
</script>