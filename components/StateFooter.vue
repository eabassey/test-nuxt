<template>
        <footer class="module-footer">
            <template>
                <!-- <pagination-controls
                *ngIf="node?.footerType === 'pagination'"
                class="flx-pagination"
                (pageChange)="setCurrentPage($event)"
                id="list"
                maxSize="5"
                previousLabel="←"
                nextLabel="→"
                >
                </pagination-controls> -->
                <template v-if="activeNode && activeNode.navs">
                     <FooterButton v-for="(nav, i) in activeNode.navs" :nav="nav" :key="i"/>
                </template>
                <!-- <workflow-node-footer [navs]="node?.navs" [compInstances]="compInstances$ | async" *ngIf="node?.footerType === 'node_nav'"></workflow-node-footer> -->
            </template>
        </footer>
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

<style lang="scss">
    .module-footer {
  background-color: var(--bar);
  display: flex;
  flex: 0 0 56px;
  align-items: center;
  padding: 0 1rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--linear-gradient-default-2), transparent);
    top: 0;
    position: absolute;
  }
}

</style>