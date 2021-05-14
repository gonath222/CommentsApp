import { CommentsModel } from '../model/comments.model';
import * as CommentsAction from '../comments.store/comments.action';

const initialState = {
    commentsModel: [
        new CommentsModel("gonath", "Gogulnath", "gonath@gmail.com", "Testing comments with the data for gonath", "Sdfkdldierd", new Date().toDateString()),
        new CommentsModel("sudhiksh", "sudhiksh", "sudhiksh@gmail.com", "Testing comments with the data for sudhiksh", "dgedDglfk", new Date().toDateString()),
        new CommentsModel("mano", "mano", "mano@gmail.com", "Testing comments with the data for mano", "asdf34DFDDf", new Date().toDateString())
    ]
};

export function CommentsReducer(state = initialState, action: CommentsAction.CommentsActionType) {
    switch (action.type) {
        case CommentsAction.ADD_COMMENTS:
            return {
                ...state,
                commentsModel: [...state.commentsModel, action.payload]
            };
        case CommentsAction.DELETE_COMMENTS:
            return {
                ...state,
                commentsModel: state.commentsModel.filter((com, comIndex) => {
                    return comIndex != action.id;
                })
            }
        default:
            return state;
    }

}
