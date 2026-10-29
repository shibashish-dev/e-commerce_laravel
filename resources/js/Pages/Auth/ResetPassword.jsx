import InputError from '@/Components/InputError';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Reset Password" />

            <div className="contain py-16">
                <div className="mx-auto max-w-lg overflow-hidden rounded px-6 py-7 shadow">
                    <ApplicationLogo className="mx-auto mb-5" />
                    <h2 className="mb-1 text-2xl font-medium uppercase">
                        Reset password
                    </h2>
                    <p className="mb-6 text-sm text-gray-600">
                        Choose a new password for your account.
                    </p>

                    <form onSubmit={submit}>
                        <input type="hidden" name="token" value={data.token} />
                        <div>
                            <label htmlFor="email" className="mb-2 block text-gray-600">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:ring-0"
                                autoComplete="email"
                                required
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="mb-2 block text-gray-600">
                                New password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:ring-0 placeholder-gray-400"
                                autoComplete="new-password"
                                autoFocus
                                required
                                placeholder="Enter a new password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="mb-2 block text-gray-600">
                                Confirm new password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:ring-0 placeholder-gray-400"
                                autoComplete="new-password"
                                required
                                placeholder="Re-enter your new password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="block w-full rounded border border-primary bg-primary py-2 text-center font-medium uppercase text-white transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Resetting...' : 'Reset password'}
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
