export default {
	login: (username, permissions) => {
		storeValue('userID', username);
		storeValue('userPermissions', permissions);
		return true;
	}
}