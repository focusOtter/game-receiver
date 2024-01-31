# Game Receiver

Welcome to the Game Receiver repository, an innovative application designed to showcase the seamless integration between AWS EventBridge and AWS AppSync for real-time data communication across different domains. This project highlights a new feature allowing EventBridge rules to directly call AppSync endpoints, facilitating real-time updates and data synchronization.

## Getting Started

Before diving into the Game Receiver, we highly recommend checking out the [EventBridge Target AppSync Repository](https://github.com/focusOtter/eventbridge-target-appsync). This repository provides a general walkthrough and foundational knowledge necessary for understanding the integration and setup required to make the most out of the Game Receiver application.

## Prerequisites

- AWS Account
- Basic understanding of AWS services, particularly EventBridge and AppSync
- Familiarity with Node.js and serverless applications

## Companion Resources

- **Companion App:** For a complete experience, deploy this project alongside its companion app, [Game Broadcaster](https://github.com/focusOtter/game-brodcaster). The Game Broadcaster serves as the data source, broadcasting events that the Game Receiver captures and processes in real-time.

- **YouTube Video:** For a visual and detailed walkthrough of the project, including setup and deployment, watch our [accompanying YouTube video](https://youtu.be/s2ew8-D7SYY). This video provides a live example and demonstrations to help you get started.

- **Blog Post:** Dive deeper into the technicalities and the architecture behind this integration by reading our [blog post](https://blog.focusotter.com/how-aws-appsync-and-amazon-eventbridge-unlock-real-time-data-across-domains). The post explores how AWS AppSync and Amazon EventBridge unlock real-time data capabilities, offering insights into the project's background and its potential applications.

## Installation

1. **Clone the Repository:** Start by cloning this repository to your local machine.
   ```bash
   git clone https://github.com/focusOtter/game-receiver.git
   ```
2. **Set up AWS Resources:** Follow the instructions in the [EventBridge Target AppSync Repository](https://github.com/focusOtter/eventbridge-target-appsync) to set up the necessary AWS resources, including the EventBridge and AppSync configurations.

3. **Deploy the Companion App:** If you haven't already, deploy the [Game Broadcaster](https://github.com/focusOtter/game-brodcaster) application as it serves as the event source for the Game Receiver.

4. **Configure Environment:** Update the `.env` file with your AWS credentials and any other necessary configurations as outlined in the setup guide.

5. **Install Dependencies:** Navigate to the project directory and install the required dependencies.

   ```bash
   npm install
   ```

6. **Deploy:** Follow the deployment instructions provided in the repository to deploy the Game Receiver application to your AWS account.

## Usage

Once deployed, the Game Receiver will listen for events broadcasted by the Game Broadcaster. These events are captured in real-time, thanks to the direct communication between EventBridge and AppSync. The application processes and displays these events, showcasing the power of real-time data synchronization across different domains.

## Support

If you encounter any issues or have questions, please feel free to open an issue on this repository. For additional context and explanations, refer to the [blog post](https://blog.focusotter.com/how-aws-appsync-and-amazon-eventbridge-unlock-real-time-data-across-domains) and [YouTube video](https://youtu.be/s2ew8-D7SYY).

---

We hope you find the Game Receiver insightful and useful for understanding the capabilities of AWS services in facilitating real-time data communication. Happy coding!
