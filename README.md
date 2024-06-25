# Blockchain-Based Voting Web App

## Overview
This project is a blockchain-based voting web application designed to enhance the transparency, security, and integrity of the voting process. Built on the Ethereum blockchain, it ensures immutability and trust in every vote cast.

## Features
- **Secure Voting Mechanism:** Uses Ethereum smart contracts to securely record votes, ensuring that votes are tamper-proof and transparent.
- **User Verification System:** Implements a login system for voters using hardcoded voter IDs and names for secure access.
- **Responsive UI/UX Design:** Features a user-friendly interface with React, including dropdowns for party selection, error handling for invalid login attempts, and visually appealing background images.

## Pages

### Home Page
- **Description:** Welcome page of the voting app.
- **Features:** Includes buttons to navigate to voter and admin login pages.

### User Login Page
- **Description:** Voter verification page.
- **Features:** Allows voters to log in using their name and voter ID. Validates user information against a hardcoded list of voters.

### Voter Page
- **Description:** Voting page for authenticated voters.
- **Features:** Voters can select a party and cast their vote. The vote is recorded on the Ethereum blockchain.

### Admin Page
- **Description:** Admin login page.
- **Features:** Allows admins to log in and manage the voting process.

### About Page
- **Description:** Information about the app.
- **Features:** Provides an overview of the app's purpose and features.

### Help Page
- **Description:** Help and support page.
- **Features:** Contains contact information for assistance.

## Technology Stack
- **Frontend:** React, CSS
- **Blockchain:** Ethereum, Solidity
- **Wallet:** MetaMask

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/blockchain-voting-app.git
    cd blockchain-voting-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

## Usage

1. Open MetaMask and connect to the Sepolia test network.
2. Deploy the smart contract on the Ethereum network.
3. Navigate to the login page and enter the required voter information.
4. Cast your vote by selecting a party on the voter page.
5. Admins can log in through the admin page to manage the voting process.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any queries or support, please contact:
- **Email:** aryavhirkoul1@gmail.com
- **Phone:** 7006636358
