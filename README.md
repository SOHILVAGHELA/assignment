1. Authentication Setup
Backend:
Create a login API endpoint (POST /user/login) that:
Authenticates users using their email and password.
Returns a JWT token and the authenticated user's info.
Create a registration API endpoint (POST /user/register).

Frontend:
Login Form (Login.js):
Handle the form submission and call the login API (POST /user/login).
Store the JWT token and user info in localStorage.
Update the AuthContext with the logged-in user's info.
Registration Form (Register.js):
Implement the form to allow new users to register.
AuthContext:
Implement the AuthContext to manage user state (login, logout).
Ensure JWT token storage in localStorage.

2. Role-Based Access Control (RBAC)
Define User Roles:
Admin and Client.
Use AuthContext to check the current user's role and manage access to protected routes.
Redirect unauthorized users to the login page.

3. Routing Setup
Implement the following route structure:
/login: Login page (public).
/register: Registration page (public).
/admin: Admin dashboard (protected, accessible only to Admin role).
/client: Client dashboard (protected, accessible only to Client role).
Use the Navigate component for redirection if users are not authorized to access a page.
