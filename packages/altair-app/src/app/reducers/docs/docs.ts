
import * as docs from '../../actions/docs/docs';

export interface DocView {
    /**
     * type, field, root, search
     */
    view: string;
    /**
     * used by field views
     */
    parentType: string;
    /**
     * identifies type/field
     */
    name: string;
}

export interface State {
    showDocs: boolean;
    isLoading: boolean;
    docView: DocView;
}

export const getInitialState = (): State => {
    return {
        showDocs: false,
        isLoading: false,
        docView: {
            view: 'root',
            parentType: 'Query',
            name: ''
        },
    }
};

export function docsReducer(state = getInitialState(), action: docs.Action): State {
    switch (action.type) {
        case docs.TOGGLE_DOCS_VIEW:
            return Object.assign({}, state, { showDocs: !state.showDocs });
        case docs.START_LOADING_DOCS:
            return Object.assign({}, state, { isLoading: true });
        case docs.STOP_LOADING_DOCS:
            return Object.assign({}, state, { isLoading: false });
        case docs.SET_DOC_VIEW:
            return { ...state, docView: action.payload.docView };
        default:
            return state;
    }
}
