import {apps} from '../data';
import * as Parts from '@/parts';
import {transformInputs} from '@/helpers/utils';

export const state = () => ({
    apps,
    activeApp: apps['test-app'],
    activeState: apps['test-app'].appStates[apps['test-app'].startState],
    activeNode: apps['test-app'].appStates[apps['test-app'].startState].nodes[apps['test-app'].appStates[apps['test-app'].startState].startNode],
    actionPanels: apps['test-app'].appStates[apps['test-app'].startState].actionPanels,
    actionPanelState: null,
    actionPanelNode: null,
    variables: {title: 'Fun Title from store'}
});


export const mutations = {
    setRouteParams(state, payload) {
        state.activeApp = state.apps[payload.app];
        state.activeState = state.activeApp ? state.activeApp.appStates[payload.state] : null;
        state.activeNode = state.activeState ? state.activeState.nodes[payload.node] : null;
    },

    setVariables(state, payload) {
        state.variables = {...state.variables, ...payload};
    },

    setPanelState(state, payload) {
        state.actionPanelState = state.actionPanels[payload.panelId];
        state.actionPanelNode = state.actionPanelState.nodes[state.actionPanelState.startNode]
    }
};


export const actions = {
    setRouteParams({commit}, payload) {
        commit('setRouteParams', payload)
    },

    setVariables({commit}, payload) {
        commit('setVariables', payload);
    },

    setPanelState({commit}, payload) {
        commit('setPanelState', payload)
    },

};

export const getters = {
    renderedTemplates(state) {
        if (state.activeNode && state.activeNode.templates && state.activeNode.templates.length) {
            const temp = state.activeNode.templates.map(tp => {
            return {component: Parts[tp.component], inputs: transformInputs(tp.inputs, state.variables)}
        });
        return temp;
        }
        return [];
    },
    renderedPanelTemplates(state) {
        if (state.actionPanelNode && state.actionPanelNode.templates && state.actionPanelNode.templates.length) {
            const temp = state.actionPanelNode.templates.map(tp => {
            return {component: Parts[tp.component], inputs: transformInputs(tp.inputs, state.variables)}
        });
        return temp;
        }
        return [];
    }
}