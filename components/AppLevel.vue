<template>
    <main>
          <section
                class="app-shell-container action-panel-visible"
                ref="appShell"
                :class="{ 'action-panel-expand': expandActionPanel, 'action-panel-collapse': !expandActionPanel}"
            >
                <section class="module-wrapper">
                <!-- <flx-app-bar></flx-app-bar> -->
                <app-bar />
                <section class="module-container">
                     <StateLevel />
                </section>
                <!-- <app-footer></app-footer> -->
                <StateFooter />
                </section>
            </section>
            <template>
            <div class="action-panel-container">
                <aside
                    class="action-panel action-panel__padding"
                    ref="actionPanel"
                    :class="{
                    'action-panel-expand': expandActionPanel,
                    'action-panel-closed': !expandActionPanel}"
                >
                  <ActionPanel />
                    <!-- <router-outlet *ngIf="expandActionPanel" name="actionPanel"></router-outlet> -->
                </aside>
                <nav class="action-panel-navigation">
                    <div class="top-icons">
                    <div class="avatar-container">
                        <div class="avatar">HJ</div>
                    </div>
                    <!-- <a>
                        <flx-icon
                            [type]="action.icon"
                            [isActive]="clickedActionPanel === action.path ? true : false"
                            active="primary"
                            class="action-panel-button"
                            use="action-panel"
                            hover="primary"
                            [instruction]="action.instruction"
                            (click)="clickPanel(action.path)"
                        >
                            {{ action.icon }}
                        </flx-icon>
                    </a> -->
                    </div>
                    <div class="bottom-icons">
                        <!-- -->
                    </div>
                </nav>
                </div>

            </template>
        </main>
</template>


<script>
import StateFooter from '@/components/StateFooter';
import AppBar from '@/ui/components/AppBar';
import ActionPanel from '@/components/ActionPanel';
import * as Parts from '@/parts';
import StateLevel from '@/components/StateLevel';
import {mapState} from 'vuex';

export default {
    name: 'AppLevel',
    components: {...Parts, StateLevel, StateFooter, ActionPanel, 'app-bar': AppBar },
    computed: {
        ...mapState(['activeApp']),
    },
     data() {
        return {
            expandActionPanel: false
        }
    }
}
</script>


<style lang="scss">
app-bar {
    position: relative;
  }
  main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .app-shell-container {
    background-color: var(--background);
    height: 100%;
    display: flex;
    margin-right: 376px;
    transition: 0.3s;
  
    &.action-center-closed {
      margin-right: 56px;
    }
  
    &.action-panel-hidden {
      margin-right: 0 !important;
    }
  
    &.action-panel-expand {
      margin-right: 372px;
    }
  
    &.action-panel-collapse {
      margin-right: 56px;
    }
  }
  
  .module-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  
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
  
    .module-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow-y: auto;
      padding: 1rem;
      position: relative;
      &.module-container--is-loading {
        overflow-y: hidden;
      }
    }
  }
  
  // .offline {
  //   background-color: var(--danger);
  //   color: var(--model);
  //   text-align: center;
  //   font-size: 1.5rem;
  // }
  

  .action-panel {
    color: var(--text-primary);
    // display: flex;
    height: 100vh;
    margin-right: 49px;
    background-color: var(--action-panel);
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    width: 323px;
    transition: 0.3s;
    overflow-y: auto;
  
    &.action-panel__padding {
      padding: 0 20px;
    }
  
    &.action-panel-closed {
      right: -320px;
    }
  
    &.action-panel-collapse {
      width: 0;
    }
  
    &.additional-panel {
      height: auto;
      top: auto;
      bottom: 0;
      margin-bottom: 3.5rem;
      z-index: 4;
    }
  
    &.action-panel-expand {
      &.additional-panel-expanded {
        padding-bottom: 20rem;
        overflow-y: auto;
      }
    }
  }
  
  flx-scratch-pad {
    position: absolute;
    bottom: 0;
  }
  
  .action-panel-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  
  .action-panel-navigation {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    background-color: var(--action-panel-nav);
    display: flex;
    flex-direction: column;
    flex: 0 0 56px;
    z-index: 4;
    // z-index: 2;
  
    .top-icons,
    .bottom-icons {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  
    .top-icons {
      justify-content: flex-start;
    }
  
    .bottom-icons {
      justify-content: flex-end;
      margin-bottom: 3.5rem;
    }
  
    .action-panel-button {
      display: flex;
      height: 56px;
      width: 56px;
      justify-content: center;
      align-items: center;
      color: var(--icon);
    }
  }
  
  .avatar-container {
    display: flex;
    width: 3.5rem;
    height: 3.5rem;
    justify-content: center;
    align-items: center;
  
    .avatar {
      width: 2rem;
      height: 2rem;
      background-color: var(--icon-background);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--text-primary-hover);
    }
  }
  
</style>