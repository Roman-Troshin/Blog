export const deletePost = (postId) =>
	fetch(`http://localhost:3004/posts/${postId}`, {
		method: 'DELETE',
	});
