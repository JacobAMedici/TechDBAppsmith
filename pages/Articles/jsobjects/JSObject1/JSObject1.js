export default {
handleApiResponse: function() {
    // Assuming your API widget's name is "apiWidget" and your Text widget's name is "displayTextWidget"
    
    // Execute the POST request
    apiWidget.trigger().then(response => {
        // Check if response is successful
        if(response.success) {
            // Assuming the response data is in JSON format
            const responseData = response.data;
    
            // Update the Text widget with the response data
            displayTextWidget.text = JSON.stringify(responseData);
        } else {
            // Handle error if the request fails
            displayTextWidget.text = "Error: " + response.error;
        }
    }).catch(error => {
        // Catch any unexpected errors
        displayTextWidget.text = "Unexpected error: " + error;
    });
  }
}