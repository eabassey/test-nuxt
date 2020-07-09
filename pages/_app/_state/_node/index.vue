<template>
        <AppLevel />       
</template>

<script>
import AppLevel from '@/components/AppLevel';

import {mapState} from 'vuex';

export default {
    components: {AppLevel},
    asyncData ({params, store, query}) {
        const {app, state, node} = params;
        store.dispatch('setRouteParams', {app, state, node})
        console.log({params, query});
    }
}
</script>


<style lang="scss">
    :host {
        height: 100%;
        display: flex;
    }

</style>