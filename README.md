# Social Network API (MongoDB & Mongoose)

  ### Description

MongoDB is a popular choice for making databases to its speed with large amounts of data and flexibility with unstructured data. The following application is a social network web app where users can share their thoughts, react to friends’ thoughts and create a friend list. Using Express.js for routes, MongoDB for the database and Mongoose ODM. To test the database, the application Insomnia was used to look at the functionality and seeding the data.

  ## Table of Contents 
  
  - [Built With](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Credits](#credits)
  - [Contact](#contact)
  - [License](#license)

  ## Built With

  - Javascript ES6+
  - Node.js
  - Express.js
  - MongoDB & Mongoose ODM
  - Insomnia

  ## Installation

  Below is an example of how you can download the project onto your own device:

  1. Clone the repository using this link: 
      ```md
          git clone https://github.com/squrpe/social-network-api.git
      ```
  
  You will need to download the suitable extensions to run the application in the command line.
  
  2. Install the node modules needed for the project within the terminal
      ```md
          npm install
      ```

  ## Usage

  - To start the server, use the node command `npm start`.

  Below is an example of the program in Insomnia when seeded:

  ![](./utils/images/Social%20Network%20API.gif)

  [You can also access the example video by clicking here](https://drive.google.com/file/d/1FKHm-L0DTETe54h2HdsLnvsMDelDkqBV/view)

  If done correctly, MongoDB Compass will reflect the same information:

  ![](./utils/images/socialdb.png)![](./utils/images/users.png)![](./utils/images/thoughts.png)
  
  ## Testing
  
  Using Insomnia, the following routes were used to test and seed the functionality behind the application. The above video demonstrates how to seed each route.

  User
  - Find All Users: `GET` `/api/users`
  - Find Single User by Id: `GET` `/api/users/:userId`
  - Create User: `POST` `/api/users`
  - Update User by Id: `PUT` `/api/users/:userId`
  - Delete User by Id: `DELETE` `/api/users/:userId`

  Friend
  - Add Friend: `POST` `/api/users/:userId/friends/:friendId`
  - Remove Friend: `DELETE` `/api/users/:userId/friends/:friendId`

  Thought
  - Find All Thoughts: `GET` `/api/thoughts`
  - Find Single Thought by Id: `GET` `/api/thoughts/:thoughtId`
  - Create Thought: `POST` `/api/thoughts`
  - Update Thought by Id: `PUT` `/api/thoughts/:thoughtId`
  - Delete Thought by Id: `DELETE` `/api/thoughts/:thoughtId`

  Reaction
  - Create Reaction by Id: `POST` `/api/thoughts/:thoughtId/reactions/:reactionId`
  - Delete Reaction by Id: `DELETE` `/api/thoughts/:thoughtId/reactions/:reactionId`

  ## Credits
  
  Project Idea: The University of Adelaide Coding Bootcamp
  
  ## Contact
  
  Lara Nicole - [grockelara@gmail.com](grockelara@gmail.com)
  
  Project Link - https://github.com/squrpe/social-network-api
  
  ## License
  
  Distributed under the MIT License. See LICENSE.txt for more information.
