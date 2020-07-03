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
                        onNodeDestroy: []
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
                            {component: 'HeaderPart', inputs: {title: 'Main title'}},
                            {component: 'HeaderPart', inputs: {title: 'MIddle Title'}, outputs: {}}
                        ],
                        footerType: 'nav',
                        toolbar: [],
                        serverCalls: [],
                        serverQueries: [],
                        events: [],
                        onNodeInit: [],
                        onNodeDestroy: []
                    }
                },
                toolbar: [],
                serverCalls: [],
                serverQueries: [],
                events: [],
                onStateInit: [],
                onStateDestroy: [],
                actionPanel: {} 
            }
        },
        serverCalls: [],
        serverQueries: [],
        events: [],
        onAppInit: [],
        onAppDestroy: [],
    }
}