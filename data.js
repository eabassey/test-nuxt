export const apps = {
    'test-app': {
        id: 'test-app',
        name: 'Test App',
        description: '',
        layout: {
            addActionPanel: true,
            addHeaderActions: true,
            addFooter: true,
            addHeader: true
        },
        navLinks: [],
        toolbar: [],
        startState: 'state1',
        appStates: {
            'state1': {
                id: 'state1',
                name: 'State One',
                description: '',
                title: 'State1',
                layout: {
                    addActionPanel: true,
                    addHeaderActions: true,
                    addFooter: true,
                    addHeader: true
                },
                startNode: 'node1',
                nodes: {
                    'node1': {
                        id: 'node1',
                        name: 'Node1',
                        description: '',
                        title: '',
                        layout: {
                            addActionPanel: true,
                            addHeaderActions: true,
                            addFooter: true,
                            addHeader: true
                        },
                        templates: [
                            {component: 'HeaderPart', inputs: {title: 'Title on node 1'}},
                        ],
                        footerType: 'nav',
                        toolbar: [],
                        serverCalls: [],
                        serverQueries: [],
                        events: [],
                        onNodeInit: [],
                        onNodeDestroy: [],
                        navs: [
                            { text: 'To Node2', nextNode: 'node2'},
                        ]
                    },
                    'node2': {
                        id: 'node2',
                        name: 'Node2',
                        description: '',
                        title: '',
                        layout: {
                            addActionPanel: true,
                            addHeaderActions: true,
                            addFooter: true,
                            addHeader: true
                        },
                        templates: [
                            {component: 'HeaderPart', inputs: {title: '$var'}},
                            {component: 'HeaderPart', inputs: {title: 'MIddle Title'}, outputs: {}}
                        ],
                        footerType: 'nav',
                        toolbar: [],
                        serverCalls: [],
                        serverQueries: [],
                        events: [],
                        onNodeInit: [],
                        onNodeDestroy: [],
                        navs: [
                            { text: 'To Node1', nextNode: 'node1'}
                        ]
                    }
                },
                toolbar: [],
                serverCalls: [],
                serverQueries: [],
                events: [],
                onStateInit: [],
                onStateDestroy: [],
                actionPanels: {
                    panel1: {
                        id: 'panel1',
                        name: 'Panel 1',
                        startNode: 'panelNode1',
                        icon: '',
                        title: '',
                        nodes: {
                            panelNode1: {
                                id: 'panelNode1',
                                name: 'panelNode1',
                                description: '',
                                templates: [
                                    {component: 'HeaderPart', inputs: {title: 'Title on panel node 1'}},
                                ],
                                footerType: 'nav',
                                toolbar: [],
                                serverCalls: [],
                                serverQueries: [],
                                events: [],
                                onNodeInit: [],
                                onNodeDestroy: [],
                                navs: [
                                    { text: 'Panel 2', nextNode: ''},
                                ]
                            },
                            panelNode2: {
                                id: 'panelNode2',
                                name: 'panelNode2',
                                description: '',
                                templates: [
                                    {component: 'HeaderPart', inputs: {title: 'Title on panel node 1'}},
                                ],
                                footerType: 'nav',
                                toolbar: [],
                                serverCalls: [],
                                serverQueries: [],
                                events: [],
                                onNodeInit: [],
                                onNodeDestroy: [],
                                navs: [
                                    { text: 'Panel 2', nextNode: ''},
                                ]
                            }
                        }
                    },
                    panel2: {
                        id: 'panel2',
                        name: 'Panel 2',
                        startNode: 'panelNode11',
                        icon: '',
                        title: '',
                        nodes: {
                            panelNode11: {
                                id: 'panelNode11',
                                name: 'panelNode11',
                                description: '',
                                templates: [
                                    {component: 'HeaderPart', inputs: {title: 'Title on panel2 node 1'}},
                                ],
                                footerType: 'nav',
                                toolbar: [],
                                serverCalls: [],
                                serverQueries: [],
                                events: [],
                                onNodeInit: [],
                                onNodeDestroy: [],
                                navs: [
                                    { text: 'Panel 2', nextNode: ''},
                                ]
                            },
                            panelNode22: {
                                id: 'panelNode22',
                                name: 'panelNode22',
                                description: '',
                                templates: [
                                    {component: 'HeaderPart', inputs: {title: 'Title on panel2 node 2'}},
                                ],
                                footerType: 'nav',
                                toolbar: [],
                                serverCalls: [],
                                serverQueries: [],
                                events: [],
                                onNodeInit: [],
                                onNodeDestroy: [],
                                navs: [
                                    { text: 'Panel 2', nextNode: ''},
                                ]
                            }
                        }
                    }
                } 
            }
        },
        serverCalls: [],
        serverQueries: [],
        events: [],
        onAppInit: [],
        onAppDestroy: [],
    }
}