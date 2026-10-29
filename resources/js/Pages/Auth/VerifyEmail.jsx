import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Email Verification" />

            <div className="contain py-16">
                <div className="mx-auto max-w-lg overflow-hidden rounded px-6 py-7 shadow">
                    <ApplicationLogo className="mx-auto mb-5" />
                    <h2 className="mb-1 text-2xl font-medium uppercase">
                        Verify your email
                    </h2>
                    <p className="mb-6 text-sm leading-6 text-gray-600">
                        Thanks for signing up. Please verify your email address
                        using the link we sent you. If it hasn’t arrived, request
                        another verification email below.
                    </p>

                    {status === 'verification-link-sent' && (
                        <div role="status" className="mb-4 rounded-lg border border-green-400/20 bg-green-500/10 p-3 text-sm font-medium text-green-600">
                            A new verification link has been sent to your email address.
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="block w-full rounded border border-primary bg-primary py-2 text-center font-medium uppercase text-white transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Sending...' : 'Resend verification email'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Need to switch accounts?{' '}
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                        >
                            Log out
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
