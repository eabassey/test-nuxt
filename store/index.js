import {apps} from '../data';
import * as Parts from '@/parts';
import {transformInputs} from '@/helpers/utils';

export const state = () => ({
    apps,
    activeApp: apps['test-app'],
    activeState: apps['test-app'].appStates[apps['test-app'].startState],
    activeNode: apps['test-app'].appStates[apps['test-app'].startState].nodes[apps['test-app'].appStates[apps['test-app'].startState].startNode],
    actionPanels: apps['test-app'].appStates[apps['test-app'].startState].actionPanels,
    actionPanelState: {},
    activePanelNode: {},
    variables: {title: 'Fun Title from store'}
});


export const mutations = {
    setRouteParams(state, payload) {
        state.activeApp = state.apps[payload.app];
        state.activeState = state.activeApp.appStates[payload.state];
        state.activeNode = state.activeState.nodes[payload.node];
    },

    setVariables(state, payload) {
        state.variables = {...state.variables, ...payload};
    }
};


export const actions = {
    setRouteParams({commit}, payload) {
        commit('setRouteParams', payload)
    },

    setVariables({commit}, payload) {
        commit('setVariables', payload);
    }
};

export const getters = {
    renderedTemplates(state) {
        if (state.activeNode.templates && state.activeNode.templates.length) {
            const temp = state.activeNode.templates.map(tp => {
            return {component: Parts[tp.component], inputs: transformInputs(tp.inputs, state.variables)}
        });
        return temp;
        }
        return [];
    }
}