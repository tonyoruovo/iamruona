<script setup lang='ts'>
import { env as Env } from '@/modules/libs/keys';
import { inject } from 'vue';


const env = inject<ImportMetaEnv>(Env)!

</script>

<template>
    <!-- <main>
        <h1 id="terms-of-service">Terms of Service</h1>
        <p><strong>Effective Date: [Insert Date]</strong></p>
        <p>Welcome to the official website of [Sales Executive&#39;s Full Name] (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and
            associated services (&quot;Services&quot;). By using the website, you agree to these Terms. If you do not
            agree, do not use the website.</p>
        <hr>
        <h2 id="1-use-of-the-website">1. Use of the Website</h2>
        <p>This website is a personal portfolio and professional showcase of [Sales Executive&#39;s Name]. All content
            is provided for informational purposes only. You agree to use the website in compliance with all applicable
            laws and regulations.</p>
        <hr>
        <h2 id="2-user-accounts-and-authentication">2. User Accounts and Authentication</h2>
        <p>Certain features may require user authentication via <strong>Firebase Auth (OAuth)</strong>. By signing in
            with a third-party service (e.g., Google, Twitter), you authorize us to access basic authentication data,
            such as your name and email, in accordance with their terms and privacy policies.</p>
        <p>We do not access or store your third-party login credentials.</p>
        <hr>
        <h2 id="3-data-handling-and-storage">3. Data Handling and Storage</h2>
        <p>All data submitted through this website (e.g., contact forms, resumes) is stored in <strong>MongoDB
                Atlas</strong>, managed securely via <strong>Mongoose</strong>. File uploads, if enabled, are stored and
            processed using <strong>Cloudinary</strong> infrastructure with appropriate access controls.</p>
        <p>We do not share or sell your data. Data is only used to facilitate legitimate user interactions or as
            explicitly disclosed at the point of collection.</p>
        <hr>
        <h2 id="4-third-party-services">4. Third-Party Services</h2>
        <p>This website utilizes the following third-party services, each governed by their own terms:</p>
        <ul>
            <li><strong>Cloudflare Pages</strong> (static content delivery)</li>
            <li><strong>Render</strong> (Java/Spring-based authentication backend)</li>
            <li><strong>Firebase Auth</strong> (authentication)</li>
            <li><strong>MongoDB Atlas</strong> (data storage)</li>
            <li><strong>Cloudinary</strong> (media handling and file storage)</li>
        </ul>
        <p>We are not responsible for any issues arising from these third-party services, but we make best efforts to
            integrate them securely and responsibly.</p>
        <hr>
        <h2 id="5-logging-and-analytics">5. Logging and Analytics</h2>
        <p>We may collect anonymized usage statistics for diagnostic and security purposes via a logging service (TBD).
            This may include IP address, browser type, and access time. We do <strong>not</strong> collect sensitive
            personal information for analytics.</p>
        <hr>
        <h2 id="6-intellectual-property">6. Intellectual Property</h2>
        <p>All original content on this site, including text, images, branding, and layout, is the property of [Sales
            Executive&#39;s Name] unless otherwise noted. You may not reproduce, modify, or distribute any part of the
            site without explicit permission.</p>
        <hr>
        <h2 id="7-disclaimer">7. Disclaimer</h2>
        <p>The content on this site is provided &quot;as is&quot; and without warranties of any kind. We do not
            guarantee that the website will be error-free or continuously available. The use of the site is at your own
            risk.</p>
        <hr>
        <h2 id="8-limitation-of-liability">8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, [Sales Executive&#39;s Name] and affiliated parties shall not be
            liable for any indirect, incidental, or consequential damages arising out of your use or inability to use
            the site.</p>
        <hr>
        <h2 id="9-changes-to-terms">9. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Updates will be posted on this page with a new effective date.
            Continued use of the site after changes constitutes your acceptance of the new Terms.</p>
        <hr>
        <h2 id="10-contact">10. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at:
            📧 <a href="mailto:ruonaoruovo@gmail.com">ruonaoruovo@gmail.com</a>
            📍</p>
        <hr>
    </main> -->
    <main>
        <hgroup>
            <h1>Terms of Service</h1>
            <p>Effective Date: {{ env.VITE_LAUNCH_DATE }}</p>
        </hgroup>
        <section>
            <h2>1. Use of the Website</h2>
            <p>This site serves as a professional portfolio for {{ env.VITE_FULLNAME }}. All information is provided
                for informational purposes only. Your use of this site must comply with all applicable laws and
                regulations.</p>
        </section>

        <section>
            <h2>2. User Accounts and Authentication</h2>
            <p>Certain features may require signing in via OAuth providers which will be routed to our <a href="https://firebase.google.com">internal authentication service</a>. We only
                access basic information (name, email) necessary for login. No credentials are stored on our servers.
            </p>
            <p>
                See their <a href="https://firebase.google.com/terms">Terms of Service document</a> and their <a href="https://firebase.google.com/support/privacy">Privacy policy</a>
            </p>
        </section>

        <section>
            <h2>3. Data Handling and Storage</h2>
            <p>Submitted data is stored securely in <a href="https://www.mongodb.com/legal/privacy/privacy-policy">Mongo Atlas</a> and uploaded files are handled through
                <a href="https://cloudinary.com/privacy">Cloudinary</a>. Data is only used for direct user interactions and is never sold or shared without consent.
            </p>
        </section>

        <section>
            <h2>4. Third-Party Services</h2>
            <p>This site integrates services including <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare Pages</a> (frontend), <a href="https://render.com/privacy">Render</a> (backend). Each service operates under its own privacy policies and terms.</p>
        </section>

        <section>
            <h2>5. Logging and Analytics</h2>
            <p>We may collect anonymous diagnostic data (IP, device type, etc.) via an external logging provider (TBD).
                This data is used solely to improve reliability and performance of the site.</p>
        </section>

        <section>
            <h2>6. Intellectual Property</h2>
            <p>All original site content is the intellectual property of {{ env.VITE_FULLNAME }} and may not be copied,
                modified, or redistributed without written permission.</p>
        </section>

        <section>
            <h2>7. Disclaimer</h2>
            <p>All content is provided “as is” without warranty of any kind. We do not guarantee the site will be free
                of errors or interruptions. Use is at your own risk.</p>
        </section>

        <section>
            <h2>8. Limitation of Liability</h2>
            <p>To the extent allowed by law, we are not liable for any indirect, incidental, or consequential damages
                related to your use of the site.</p>
        </section>

        <section>
            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Updates will be posted here with a revised
                effective date. Continued use constitutes acceptance of the changes.</p>
        </section>

        <section>
            <h2>10. Contact</h2>
            <p>If you have questions about these Terms, please contact:</p>
            <p>Email: <a :href="`mailto:${env.VITE_PERSONAL_EMAIL}`">{{ env.VITE_PERSONAL_EMAIL }}</a></p>
            <!-- <p>Location: [Insert Location]</p> -->
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
