<template>
    <div>
        <div>
            <a-button variant="default" v-for="(panel, i) in panels" :key="i" @click="togglePanel(panel.id)">{{panel.id}}</a-button>
        </div>
        <ActionPanelState v-if="openPanel" />
    </div>
</template>

<script>
import ActionPanelState from '@/components/ActionPanelState';
import {mapState, mapActions} from 'vuex';

export default {
    name: 'ActionPanel',
    components: { ActionPanelState },
    data() {
        return {
            panelId: '',
            openPanel: false,
        };
    },
    computed: {
        ...mapState({panels: state => Object.values(state.actionPanels), actionPanelState: 'actionPanelState'})
    },
    methods: {
        // ...mapActions(['setPanelState']),
        togglePanel(selectedPanelId) {
            this.openPanel = !this.openPanel;
            this.panelId = selectedPanelId;
            this.$router.push({query: {openPanel: this.openPanel, panelId: this.panelId }});
        }
    }
}
</script>