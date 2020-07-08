<template>
<header class="module-header">
  <div
    class="hamburger-menu"
    @click="toggleMenu"
    :class="{ active: true, disableMenu: disableMenu}"
  >
  hello
    <!-- <flx-icon type="app-menu-hamburger"></flx-icon> -->
  </div>

  <div class="current-module">
     Hello Title
  </div>

  <div class="module-actions">
    <!-- <flx-header-actions></flx-header-actions> -->
  </div>
</header>
<!-- <flx-glow-line [color]="isOffline ? 'danger' : 'default'" size="100%"></flx-glow-line> -->

</template>

<script>
export default {
    name: 'AppBar',
    data() {
        return {
            disableMenu: false
        }
    },
    methods: {
        toggleMenu() {}
    }
}
</script>

<style lang="scss" scoped>
    .disableMenu {
  pointer-events: none;
  opacity: 0.4;
}

.module-header {
  align-items: center;
  background-color: var(--bar); //TODO: Create shadow mixin
  color: var(--heading-primary);
  display: flex;
  height: 3.5rem;
  position: sticky;
  top: 0;
  transition: all 350ms;

  .hamburger-menu,
  .waffle {
    align-items: center;
    display: flex;
    height: 56px;
    justify-content: center;
    transition: all 350ms;
    width: 56px;

    cursor: pointer;
    &:hover {
      background-color: var(--app-menu);
    }
    &.active {
      background-color: var(--app-menu);
      z-index: 13;
    }
    &:hover svg {
      transition: transform 0.2s ease-in-out;
      transform: scale(1.2, 1.2);
    }
  }

  .current-module {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 1rem;
    font-size: var(--app-bar-heading-size);
  }

  .module-actions {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 0.8rem;
    }
  }
}

.border {
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--linear-gradient-default),
    var(--linear-gradient-default-2),
    var(--linear-gradient-default)
  );
  position: fixed;
  z-index: 4;
}

flx-glow-line {
  position: absolute;
  bottom: 0;
  width: 100%;
}

</style>