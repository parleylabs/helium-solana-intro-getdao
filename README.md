# helium-solana-intro-getdao
Base code to start interacting with Helium on Solana with Typescript and node

Node.js TypeScript Application
This is a simple Node.js TypeScript application. It can be used as a starting point for your own Node.js TypeScript applications.

Installation
To install the dependencies, run the following command:

`npm install`

You will also need a solana wallet to run this application, see instructions below

Code snippet

## Running the Application

To run the application, run the following command:
`export ANCHOR_WALLET=~/.config/solana/id.json`
`npm start`

## Setting Up Your Wallet (for Anchor.xyz client library)

This Node.js application utilizes the Anchor.xyz client library for interacting with the Solana blockchain. To use this application, you'll need a Solana wallet containing funds for transactions. Here's how to set up your wallet:

**1. Choose a Solana Wallet:**

There are various Solana wallets available. Here are a few popular options:

* **SolFlare Wallet:** A browser extension wallet offering ease of use. ([https://solflare.com/](https://solflare.com/))
* **Phantom Wallet:** Another popular browser extension wallet. ([https://phantom.app/](https://phantom.app/))
* **Sollet Wallet:** A mobile wallet option for iOS and Android devices. ([https://soillet.io/](https://soillet.io/))
* **Ledger Nano:** A hardware wallet for secure storage of your private keys. ([https://www.ledger.com/](https://www.ledger.com/))

**2. Install and Configure Your Chosen Wallet:**

Follow the specific instructions for your chosen wallet to install and configure it. This typically involves creating a new wallet or importing an existing one.

**3. Obtain your Wallet Address:**

Once your wallet is set up, locate your Solana wallet address. This address acts as your public identifier on the Solana blockchain and is used to send and receive funds. You can usually find your wallet address within the wallet interface.

**4. Setting the ANCHOR_WALLET Environment Variable:**

This application relies on an environment variable called `ANCHOR_WALLET` to point to your Solana wallet file. This file typically contains your private key used for signing transactions. Here's how to set the environment variable:

* **Option 1: Terminal before running the application:**

  Open your terminal and set the variable before running the application. The syntax depends on your operating system:

    * **Linux/macOS:**

      ```bash
      export ANCHOR_WALLET=~/.config/solana/id.json
      node your_application.js
      ```

    * **Windows:**

      ```
      set ANCHOR_WALLET=C:\Users\YourUsername\.config\solana\id.json
      node your_application.js
      ```

  Replace `your_application.js` with the actual filename of your application and ensure the path to your `id.json` file is correct. This approach sets the variable temporarily for the current terminal session.

* **Option 2: Setting permanently (optional):**

  You can set the environment variable permanently for your system by adding it to your shell configuration file (e.g., `.bashrc` for bash). Refer to your specific shell's documentation for adding environment variables.

**Important Notes:**

* **Security:**  The `id.json` file containing your private key is sensitive information. Avoid sharing it publicly or storing it in unencrypted locations.
* **Alternative Methods:** Some applications might offer alternative ways to connect your wallet, such as through browser extensions or direct integration with the chosen wallet software. Refer to the specific application documentation for details.

By following these steps, you'll have your Solana wallet set up and ready to interact with your Node.js application using the Anchor.xyz client library.
