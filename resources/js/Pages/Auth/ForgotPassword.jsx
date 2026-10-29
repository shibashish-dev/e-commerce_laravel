import InputError from '@/Components/InputError';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />

            <div className="contain py-16">
                <div className="mx-auto max-w-lg overflow-hidden rounded px-6 py-7 shadow">
                    <ApplicationLogo className="mx-auto mb-5" />
                    <h2 className="mb-1 text-2xl font-medium uppercase">
                        Forgot password
                    </h2>
                    <p className="mb-6 text-sm text-gray-600">
                        Enter the email address associated with your account and
                        we will send you a link to reset your password.
                    </p>

                    {status && (
                        <div role="status" className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-gray-600">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoFocus
                                autoComplete="email"
                                required
                                className="block w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:ring-0 placeholder-gray-400"
                                placeholder="youremail@domain.com"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="block w-full rounded border border-primary bg-primary py-2 text-center font-medium uppercase text-white transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Sending...' : 'Email password reset link'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Remembered your password?{' '}
                        <Link href={route('login')} className="text-primary">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
