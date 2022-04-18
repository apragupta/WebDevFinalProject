import * as service from '../services/search-service';

export const SEARCH = 'SEARCH';


export const search = async (dispatch, term) => {
    const results = await service.search(term);
    dispatch({
        type: SEARCH,
        results
    });
}
