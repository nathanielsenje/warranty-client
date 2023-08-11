# ALAF Warranty Website - Front End

![ALAF Warranty Website](https://example.com/path/to/your/image.png)

## Description

This repository contains the front-end code for the ALAF Warranty Website. The website is designed to provide users with information about ALAF warranties and related services. It offers a user-friendly interface that allows customers to explore available warranties, learn about terms and conditions, and contact customer support.

## Table of Contents

- [ALAF Warranty Website - Front End](#alaf-warranty-website---front-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)
  - [Database tables](#database-tables)
    - [1. Customer](#1-customer)
    - [2. Warranty](#2-warranty)
    - [3. Claims](#3-claims)

## Installation

To get a local copy of the project up and running, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/alaf-warranty-frontend.git
```

2. Navigate to the project's directory:

```
cd alaf-warranty-frontend
```

3. Install the necessary dependencies:

```
npm install
```

## Usage

Once the installation is complete, you can start the development server:

```
npm start
```

This will launch the ALAF Warranty Website on your local machine, accessible at `http://localhost:3000`.

## Technologies Used

The ALAF Warranty Website - Front End is built using the following technologies:

- HTML
- CSS
- JavaScript
- React.js

## Contributing

Contributions to this project are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Commit your changes: `git commit -m "Your detailed description of the changes"`.
4. Push to the branch: `git push origin feature/your-feature-name` or `git push origin bugfix/your-bug-fix`.
5. Open a Pull Request, and we'll review your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

This project is created and maintained by Nathaniel Senje.

If you have any questions or feedback, feel free to contact me at [nathaniel@example.com](mailto:nathaniel@example.com).

## Database tables
### 1. Customer
  id 
  customer_id 
  name
  id_number
  phone UNIQUE
  email UNIQUE

### 2. Warranty
  id
  warranty_code
  customer_id
  invoice_number
  invoice_date
  shop_name
  product_name
  quantity
  town

### 3. Claims
  id
  claim_id
  warranty_code
  claim_type
  claim_description
  claim_status