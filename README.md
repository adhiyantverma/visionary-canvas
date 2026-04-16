# Welcome to your WebNest

## Project info

**URL**: https://webnestconsultancyservices-au.netlify.app/

## How can I edit this code?

There are several ways of editing your application.

**Use VScode**

Simply visit the [WebNest](https://webnestconsultancyservices-au.netlify.app/) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form (Let's Talk)

The contact form uses [Formspree](https://formspree.io) so submissions are emailed to you without a backend server.

1. Sign up at [formspree.io](https://formspree.io).
2. Create a new form and set the notification email to your address (e.g. `adhiyantverma00623@gmail.com`).
3. Copy your form ID from the form endpoint (e.g. from `https://formspree.io/f/xyzabc` the ID is `xyzabc`).
4. Copy `.env.example` to `.env` and set:
   ```bash
   VITE_FORMSPREE_FORM_ID=xyzabc
   ```
5. Restart the dev server. Submissions will be sent to your Formspree email.

## How can I deploy this project?

Simply open [Lovable](https://webnestconsultancyservices-au.netlify.app/) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://webnestconsultancyservices-au.netlify.app/)
