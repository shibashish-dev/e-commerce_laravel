import InputError from '@/Components/InputError';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Confirm Password" />

            <div className="contain py-16">
                <div className="mx-auto max-w-lg overflow-hidden rounded px-6 py-7 shadow">
                    <ApplicationLogo className="mx-auto mb-5" />
                    <h2 className="mb-1 text-2xl font-medium uppercase">
                        Confirm password
                    </h2>
                    <p className="mb-6 text-sm leading-6 text-gray-600">
                        This is a secure area. Please confirm your password before continuing.
                    </p>

                    <form onSubmit={submit}>
                        <div>
                            <label htmlFor="password" className="mb-2 block text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:ring-0 placeholder-gray-400"
                                autoComplete="current-password"
                                autoFocus
                                required
                                placeholder="Enter your password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="block w-full rounded border border-primary bg-primary py-2 text-center font-medium uppercase text-white transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Confirming...' : 'Confirm password'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        <Link href={route('login')} className="text-primary">
                            Back to login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
