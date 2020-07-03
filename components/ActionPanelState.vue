<template>
    <div>
        Action panel state
        <ActionPanelNode v-if="actionPanelNode"/>
    </div>
</template>


<script>
import ActionPanelNode from '@/components/ActionPanelNode';
import {mapState} from 'vuex';

export default {
    name: 'ActionPanelState',
    components: { ActionPanelNode },
    computed: {
        ...mapState(['actionPanelState', 'actionPanelNode'])
    }
}
</script>