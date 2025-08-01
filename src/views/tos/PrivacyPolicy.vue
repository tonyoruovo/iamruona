<script setup lang="ts">
import { env as Env } from '@/modules/libs/keys';
import { isNil } from 'lodash';
import { inject } from 'vue';


const env = inject<ImportMetaEnv>(Env)!

</script>

<template>
    <main>
        <hgroup>
            <h1>Privacy Policy</h1>
            <p>Effective Date: {{ env.VITE_LAUNCH_DATE }}</p>
        </hgroup>

        <section>
            <h2>1. Introduction</h2>
            <p>This privacy policy explains how we collect, use, and protect your information when you visit the
                personal portfolio website of {{ env.VITE_FULLNAME }} ("we", "our", or "us").</p>
        </section>

        <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li><strong>Authentication Data:</strong> When you log in using a third-party provider via Firebase
                    OAuth (e.g., Google, Twitter), we may receive your name and email address.</li>
                <li><strong>Submitted Content:</strong> Any information you provide through forms, such as messages
                    or resume uploads.</li>
                <li><strong>Usage Data:</strong> We may collect anonymized data such as IP address, browser type,
                    and device information through our logging infrastructure (TBD).</li>
            </ul>
        </section>

        <section>
            <h2>3. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul>
                <li>Authenticate your identity and grant access to restricted features</li>
                <li>Respond to inquiries or messages sent through contact forms</li>
                <li>Improve the reliability and performance of the website</li>
            </ul>
        </section>

        <section>
            <h2>4. Data Storage and Security</h2>
            <p>We use modern, secure third-party platforms to store and manage data:</p>
            <ul>
                <li><strong>MongoDB Atlas:</strong> For storing form submissions and profile data</li>
                <li><strong>Cloudinary:</strong> For managing file uploads (if applicable)</li>
                <li><strong>Render:</strong> For backend logic and secure API endpoints</li>
            </ul>
            <p>All data transmission is encrypted using HTTPS. We apply reasonable industry-standard security
                practices to protect your data.</p>
        </section>

        <section>
            <h2>5. Third-Party Services</h2>
            <p>We rely on the following third-party services which have their own privacy policies:</p>
            <ul>
                <li>Cloudflare Pages (hosting)</li>
                <li>Firebase Auth (authentication)</li>
                <li>MongoDB Atlas (database)</li>
                <li>Cloudinary (file storage)</li>
            </ul>
            <p>We are not responsible for how these providers handle data independently of this website.</p>
        </section>

        <section>
            <h2>6. Cookies and Tracking</h2>
            <p>This site does not use cookies or third-party advertising trackers. Anonymous logging may occur for
                operational monitoring.</p>
        </section>

        <section>
            <h2>7. Your Rights</h2>
            <p>If you would like to request deletion of your data or ask questions about our handling of your
                information, please contact us at <a :href="`mailto:${env.VITE_PERSONAL_EMAIL}`">{{
                    env.VITE_PERSONAL_EMAIL }}</a>.</p>
        </section>

        <section>
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on
                this page, along with the effective date.</p>
        </section>

        <section>
            <h2>9. Contact</h2>
            <p>For privacy-related concerns, contact:</p>
            <p>Email: <a :href="`mailto:${env.VITE_PERSONAL_EMAIL}`">{{ env.VITE_PERSONAL_EMAIL }}</a></p>
            <p v-if="!isNil(env.VITE_PERSONAL_ADDRESS) && env.VITE_PERSONAL_ADDRESS.length > 0">Location: {{
                env.VITE_PERSONAL_ADDRESS }}</p>
        </section>
    </main>
</template>

<style lang="css" scoped>
@reference '@/assets/styles/base.css';

main {
    max-width: 800px;
    margin: 8rem auto 0;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    @apply border border-background;
}

section {
    margin-bottom: 2rem;
}

h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--color-glyph);
}

p {
    margin: 0.5rem 0;
}

a {
    color: var(--color-glyph);
    text-decoration: underline;
}
</style>
