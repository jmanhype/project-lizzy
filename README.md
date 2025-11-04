# Project Lizzy

A full-stack web3 gaming and e-commerce platform built with Next.js, Express, and Polkadot integration.

## Features

- 🎮 Web3 Gaming Platform with NFT marketplace
- 🛒 E-commerce functionality
- 🌐 Multi-language support (EN, DE, ZN)
- 🔐 User authentication and authorization
- 💳 Payment integration (Paytm, Stripe)
- ☁️ Cloudinary image management
- 📊 Admin dashboard

## Tech Stack

**Frontend:**
- Next.js (React framework)
- TypeScript
- Tailwind CSS
- Jotai (state management)
- Polkadot.js API

**Backend:**
- Express.js
- MongoDB (Mongoose)
- JWT authentication
- Cloudinary

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- Cloudinary account
- SendGrid account (for emails)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-lizzy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:
```env
# Server
NODE_ENV=development
PORT=4000

# Database
MONGO_URI=your_mongodb_connection_string

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_MAIL=your_sendgrid_email
SENDGRID_RESET_TEMPLATEID=your_reset_template_id
SENDGRID_ORDER_TEMPLATEID=your_order_template_id

# Payment (Paytm)
PAYTM_MID=your_paytm_merchant_id
PAYTM_WEBSITE=your_paytm_website
PAYTM_CHANNEL_ID=your_paytm_channel_id
PAYTM_INDUSTRY_TYPE=your_paytm_industry_type
PAYTM_CUST_ID=your_paytm_customer_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
```

See `.env.example` for a complete list of required environment variables.

4. Start the development server:
```bash
npm start
```

The application will run on:
- Frontend: http://localhost:3002
- Backend: http://localhost:4000

## Available Scripts

- `npm start` - Start both frontend and backend servers
- `npm run build` - Build the application for production
- `npm test` - Run tests

## Project Structure

```
project-lizzy/
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   ├── utils/           # Utility functions
│   └── chain/           # Web3/Polkadot integration
├── server/              # Backend source code
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middlewares/     # Custom middlewares
│   └── utils/           # Backend utilities
├── public/              # Static assets
└── package.json         # Dependencies

```

## Security

⚠️ **Important Security Notes:**
- Never commit `.env` files to version control
- Keep all API keys and secrets secure
- Use strong JWT secrets in production
- Enable HTTPS in production environments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

GPL-3.0

## Author

henryliu


