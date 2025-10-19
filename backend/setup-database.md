# E-Commerce Database Setup

## Overview
This Laravel application includes a complete e-commerce database structure with models, migrations, seeders, and factories.

## Database Structure

### Core Tables
- **users** - Customer accounts with profile information
- **admin_users** - Admin panel users with roles and permissions
- **categories** - Product categories with hierarchical structure
- **brands** - Product brands
- **products** - Main product catalog with pricing, inventory, and SEO
- **product_images** - Product image gallery
- **product_brands** - Many-to-many relationship between products and brands

### Shopping & Orders
- **shopping_carts** - User shopping carts
- **cart_items** - Items in shopping carts
- **orders** - Customer orders with status tracking
- **orders_items** - Individual items in orders
- **addresses** - Customer shipping and billing addresses

### Marketing & Engagement
- **promo_codes** - Discount codes and promotions
- **reviews** - Product reviews and ratings
- **wishlists** - Customer wishlists

## Setup Commands

### 1. Run Migrations
```bash
php artisan migrate
```

### 2. Seed Database
```bash
php artisan db:seed
```

### 3. Fresh Migration with Seeding
```bash
php artisan migrate:fresh --seed
```

## What Gets Created

### Sample Data
- **Categories**: Electronics, Clothing, Home & Garden, etc. with subcategories
- **Brands**: Apple, Samsung, Nike, Adidas, Sony, Microsoft, etc.
- **Products**: 100+ products including featured items like iPhone 15 Pro, Samsung Galaxy S24
- **Users**: 20+ test users with addresses
- **Promo Codes**: WELCOME10, SAVE20, FLAT50 and more
- **Reviews**: 200+ product reviews
- **Shopping Carts**: Active carts for 30% of users
- **Wishlists**: Random wishlist items for users

### Test User
- **Email**: test@example.com
- **Password**: password

## Model Relationships

### User Model
- Has many: addresses, orders, reviews, wishlists
- Has one: shopping cart

### Product Model
- Belongs to: category, brand
- Has many: images, reviews, cart items, order items, wishlists
- Soft deletes enabled

### Category Model
- Self-referencing (parent/children)
- Has many: products

### Order Model
- Belongs to: user, promo code, shipping address, billing address
- Has many: order items

## Key Features

### Product Management
- SKU tracking
- Inventory management
- Sale pricing
- Featured products
- SEO fields (meta title, description, slug)
- Soft deletes
- Product dimensions and weight

### Order Management
- Order status tracking (pending, processing, shipped, delivered, cancelled)
- Payment status tracking
- Shipping and billing addresses
- Promo code support
- Tax and shipping calculations

### User Management
- Customer profiles with extended fields
- Address management
- Admin users with role-based permissions

### Marketing
- Promo codes with usage limits and expiration
- Product reviews with approval system
- Wishlist functionality

## Factory Usage

All models include factories for testing:

```php
// Create test data
User::factory(10)->create();
Product::factory(50)->create();
Category::factory(5)->create();
```

## Seeder Usage

Individual seeders can be run:

```bash
php artisan db:seed --class=CategorySeeder
php artisan db:seed --class=ProductSeeder
```