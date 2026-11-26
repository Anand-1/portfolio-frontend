import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import styles from './index.module.css';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const { error } = await getSupabaseBrowserClient().auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      await router.replace('/');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to sign in right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Sign in | Anand Raj</title>
        <meta name="description" content="Sign in to your Anand Raj account." />
      </Head>
      <main className={styles.page}>
        <section className={styles.card} aria-labelledby="login-title">
          <p className={styles.eyebrow}>WELCOME BACK</p>
          <h1 id="login-title" className={styles.title}>Sign in</h1>
          <p className={styles.description}>Enter your details to access your account.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />

            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />

            {errorMessage && (
              <p className={styles.error} role="alert">{errorMessage}</p>
            )}

            <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className={styles.note}>
            Authentication is securely handled by Supabase.
          </p>
        </section>
      </main>
    </>
  );
}
