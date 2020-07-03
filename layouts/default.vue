<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '480px' }">
        <Nuxt />
        <hr />
        <ActionPanel />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <StateFooter />
    </a-layout-footer>
  </a-layout>
</template>


<script>
import StateFooter from '@/components/StateFooter';
import ActionPanel from '@/components/ActionPanel';
import * as Parts from '@/parts';

export default {
  components: {...Parts, StateFooter, ActionPanel}
}
</script>