import {apps} from '../data';

export const state = () => ({
    apps,
    activeApp: apps['test-app'],
    activeState: apps['test-app'].appStates[apps['test-app'].startState],
    activeNode: apps['test-app'].appStates[apps['test-app'].startState].nodes[apps['test-app'].appStates[apps['test-app'].startState].startNode],
    actionPanels: apps['test-app'].appStates[apps['test-app'].startState].actionPanels,
    actionPanelState: {},
    activePanelNode: {}
});


export const mutations = {
    setRouteParams(state, payload) {
        state.activeApp = state.apps[payload.app];
        state.activeState = state.activeApp.appStates[payload.state];
        state.activeNode = state.activeState.nodes[payload.node];
    }
};


export const actions = {
    setRouteParams({commit}, payload) {
        commit('setRouteParams', payload)
    }
};