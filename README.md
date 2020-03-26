# useful API #

Creates an AWS EC2 Instance running NodeJS and associated AWS resources for the "usefulapi" service. Please note that I am not following best practices for security because I am only using the default subnet and VPC with only 1 instance and no auto scaling. I could also force everyone to use the ELB but am not.

### What is this repository for? ###

To house all of my one-off API ideas.

### How do I get set up? ###

* Run the Cloudformation template using either the CLI or AWS console: EC2Instance-usefulAPI.yaml
* Please note that the startup script will take some time to run and is still running after the stack is finished creating. I noticed that about 5 minutes should be enough time before you try hitting the API. If the ELB does not work at first, give it a few minutes because it is being set to InService after the CFN is done.
### Architecture Diagram ###
![Diagram of Useful API](/img/Useful.png)
### Services ###
* convert:
    * Converts an Image to Base64
    * Endpoint:
        ```
        POST http://usefulapi-instance-zq8eve4su3ax-692985434.us-east-1.elb.amazonaws.com/convert
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
