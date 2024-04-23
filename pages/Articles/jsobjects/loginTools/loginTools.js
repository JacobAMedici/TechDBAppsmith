export default {
	// For full transparency, this code was created with the help of ChatGPT as neither I, nor my partner
	// know JavaScript and I believe that this falls clear within the realm of acceptable given the nature of this project
	storeUserInfo: (userID, permissions) => {
		storeValue('userID', userID);
		storeValue('userPermissions', permissions);
	},
	checkAdmin: () => {
				if (appsmith.store.userPermissions != 'admin') {
			showAlert('You must have admin status to acess this field.', 'error');
		} else {
			navigateTo('Delete Article')
		}
	},
	logout: () => {
		clearStore()
	}
}