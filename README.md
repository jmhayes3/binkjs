# binksjs

binksjs is a chatbot that integrates Discord.js with the new OpenAI Assistants API.
The bot operates within Discord channels, listening to messages and using OpenAI to generate responses.

## Features

- **Discord Integration**: The bot listens to messages in Discord channels.
- **OpenAI Response Generation**: Leverages the new OpenAI Assistants API to create responses to messages.
- **Message Thread Tracking**: Maintains message threads for continuity in conversations.
- **Assistants Capabilities**: Since the bot uses Assistants, you no longer have to worry about context management and you can also benefit from assistant capabilities such as `code interpreter` and `file search`

## Prerequisites

- Node.js installed on your machine.
- A Discord bot token (from Discord Developer Portal).
- An OpenAI API key.

## Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/jmhayes3/binksjs.git
   ```
2. **Navigate to the Repository Folder**:
   ```
   cd binksjs
   ```
3. **Install Dependencies**:
   ```
   npm install
   ```

## Configuration

1. **Set Up Environment Variables**:
   Create a `.env` file in the root of your project with the following variables:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   OPENAI_API_KEY=your_openai_api_key
   ASSISTANT_ID=your_openai_assistant_id
   ```

## Running the Bot

1. **Start the Bot**:
   ```
   node bot.js
   ```

## Usage

- **Interaction**: Simply type and send messages in your Discord server where the bot is added. The bot will automatically generate and send replies based on the OpenAI model's output.
- **Discord Channels**: Works in any text channel or thread where the bot has permissions to read and send messages.

## Contributing

Feel free to fork the repository and submit pull requests.

