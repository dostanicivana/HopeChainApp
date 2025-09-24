# HopeChain

HopeChain is an **on-chain crowdfunding application** built with **Next.js** and **Thirdweb**.  
It allows users to create, view, and invest in crowdfunding campaigns using blockchain technology.

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/dostanicivana/HopeChainApp.git
cd HopeChainApp
yarn
```

## Environment Variables

To run HopeChain, create a .env file in the root folder and add:
````
CLIENT_ID = your_client_id_here
````

For instructions on creating a client ID, refer to the [Thirdweb documentation]([url](https://portal.thirdweb.com/typescript/v5/client))

## Running Locally

Start the development server:
````
yarn dev
````

## Open the application in your browser:
````
http://localhost:3000
`````
## Production Build

Create a production build:
````
yarn build
````

##Start the production server:
````
yarn start
````
## Features

Create and browse crowdfunding campaigns

Track investments in real-time

Interact with smart contracts on blockchain

## Technologies

Frontend: React / Next.js / Tailwind CSS

Blockchain: Solidity, Ethereum / Sepolia testnet

Web3 Interaction: Thirdweb SDK

## License

MIT License

