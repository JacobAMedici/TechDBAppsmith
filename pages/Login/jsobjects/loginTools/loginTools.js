export default {
	// For full transparency, this code was created with the help of ChatGPT as neither I, nor my partner
	// know JavaScript and I believe that this falls clear within the realm of acceptable given the nature of this project
	login: (username, permissions) => {
		storeValue('userID', username);
		storeValue('userPermissions', permissions);
		return true;
	},
	checkAuth: () => {
		return appsmith.store.userID !== undefined;
	},
	isAdmin: () => {
		return appsmith.store.permissions == "admin"
	},
	isManufacturer: () => {
		return appsmith.store.permissions == "manufacturer"
	},
	logout: () => {
		clearStore();
	}
}