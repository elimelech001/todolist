# Todo List App

This is a simple web application for managing a to-do list.

## Running the app with Docker Compose

To run the app using Docker Compose, follow these steps:

1. Install Docker and Docker Compose if you haven't already.
2. Clone the repository to your local machine.
3. Navigate to the project root directory.
4. Open the docker-compose.yml file and replace the environment variables with your own values.
5. In the terminal, run the following command to build the Docker images:

docker-compose up

7. Wait for the containers to start up. You should see logs from each container in your terminal.
8. Open your web browser and go to http://localhost:3000 to access the app.

That's it! You should now have the app up and running with Docker Compose.

8.To stop the containers, press Ctrl-C in the terminal.
9.To remove the containers and their associated resources, use the following command:

docker-compose down

