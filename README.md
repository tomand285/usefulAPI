# useful API #

Creates an AWS EC2 Instance running NodeJS and associated AWS resources for the "usefulapi" service. Please note that I am not following best practices for security as it is just 1 instance in the default settings.

### What is this repository for? ###

To house all of my one-off API ideas.

### How do I get set up? ###

* Run the Cloudformation template using either the CLI or AWS console: EC2Instance-usefulAPI.yaml

### Services ###
* convert:
    * Converts an Image to Base64
    * Endpoint:
        ```
        POST https://bfhzdjfhr8.execute-api.us-east-1.amazonaws.com/dev/convert
        ```
    * Body:
        ```
        Upload the image as multipart/form-data with no JSON body
        ```
    * Response:
        ```
        {
            "image": {
                "filename": "image.jpg",
                "contentType": "image/jpeg",
                "base64": "/9j/4AAQSkZJRgABAQEBLAEsAAD/..."
            }
        }
        ```

### Contribution guidelines ###

* If you would like to make edits, please create a pull request or make an new issue.

### Who do I talk to? ###

* Andrew Tomko
* tomand285@gmail.com
