# Admin Panel Setup Guide

## 🔐 Admin Panel Access

The admin panel is available at: `/admin`

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **IMPORTANT:** Change these credentials in production!

## 🛠 Environment Variables Setup

Add these to your `.env` file:

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:your_password@your_coolify_host:3000/postgres?schema=public"

# Admin Authentication
ADMIN_USERNAME="admin"
# Default password hash for "admin123" - CHANGE THIS IN PRODUCTION!
ADMIN_PASSWORD_HASH="$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj8SJp7OHOzS"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Production Environment
NODE_ENV="development"
```

## 🔒 Security Features

1. **Protected Routes:** All admin routes are protected by middleware
2. **JWT Authentication:** Secure token-based authentication
3. **HTTP-Only Cookies:** Tokens stored in secure, HTTP-only cookies
4. **No Search Engine Indexing:** Admin pages are excluded from search engines
5. **Hidden from Navigation:** No links to admin panel in the main website

## 📱 Admin Panel Features

### Dashboard (`/admin`)
- Project statistics overview
- Recent projects display
- Quick access to project management

### Project Management (`/admin/projects`)
- View all projects with filtering by category
- Add new projects (`/admin/projects/new`)
- Edit existing projects (`/admin/projects/[id]/edit`)
- Delete projects with confirmation
- Featured project management

### Authentication
- Secure login system (`/admin/login`)
- Auto-logout after 24 hours
- Session validation on all admin routes

## 🚀 Getting Started

1. **Set up your environment variables** in `.env`
2. **Run database migration:** `npx prisma migrate dev --name init`
3. **Start your development server:** `npm run dev`
4. **Access admin panel:** Navigate to `http://localhost:3000/admin`
5. **Login with default credentials** (change them afterwards!)

## 🔧 Changing Admin Credentials

To change the admin password:

1. Generate a new password hash:
```bash
node -e "console.log(require('bcryptjs').hashSync('your_new_password', 12))"
```

2. Update `ADMIN_PASSWORD_HASH` in your `.env` file
3. Update `ADMIN_USERNAME` if needed
4. Restart your application

## 📂 Admin Panel Structure

```
src/
├── app/admin/
│   ├── layout.tsx              # Admin layout (no search indexing)
│   ├── login/page.tsx          # Login page
│   ├── page.tsx                # Dashboard
│   ├── projects/
│   │   ├── page.tsx            # Projects list
│   │   ├── new/page.tsx        # Add new project
│   │   └── [id]/edit/page.tsx  # Edit project
│   └── api/admin/auth/         # Authentication API routes
├── components/admin/
│   ├── AdminSidebar.tsx        # Navigation sidebar
│   └── ProjectForm.tsx         # Project creation/editing form
├── lib/auth.ts                 # Authentication utilities
└── middleware.ts               # Route protection
```

## 🛡 Production Security Checklist

- [ ] Change default admin username and password
- [ ] Use a strong, unique JWT secret
- [ ] Enable HTTPS in production
- [ ] Set up proper environment variables
- [ ] Consider adding rate limiting
- [ ] Monitor admin access logs
- [ ] Regular security updates

## 🔍 Accessing the Admin Panel

The admin panel is intentionally hidden from your main website navigation. To access it:

1. **Direct URL:** Navigate directly to `/admin`
2. **Bookmark:** Save the admin URL for easy access
3. **Browser history:** Use your browser's history if you've visited before

Remember: Only you should know and access this URL!

