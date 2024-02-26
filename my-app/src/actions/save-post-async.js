import { setPostData } from './set-post-data';
import { transformPost } from '../bff/transformers';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(transformPost(updatedPost.res)));

		return updatedPost.res;
	});
