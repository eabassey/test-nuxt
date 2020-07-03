<template>
    <div>
        App Level: {{activeApp && activeApp.name}}
        <StateLevel />
    </div>
</template>


<script>
import StateLevel from '@/components/StateLevel';
import {mapState} from 'vuex';

export default {
    name: 'AppLevel',
    components: { StateLevel },
    computed: {
        ...mapState(['activeApp'])
    }
}
</script>