# useful API #

Creates an AWS EC2 Instance running NodeJS and associated AWS resources for the "usefulapi" service

### What is this repository for? ###

To house all of my one-off API ideas.

### How do I get set up? ###

* Follow [this guide](https://serverless.com/framework/docs/getting-started/) to get the initial Serverless Framework set up.
* Run the following command:
```
serverless install --url https://github.com/tomand285/usefulAPI-serverless
```
* Go into the new dir and run:
``
sls deploy
``

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
