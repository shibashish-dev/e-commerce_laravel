import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onSuccess: (response) => {
                if (response.props.redirect) {
                    window.location.href = response.props.redirect; // Force redirect to Blade
                }
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title='Sign In' />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-2 tracking-tight">Welcome Back</h2>
                    <p className="text-neutral-500 text-sm">
                        Please sign in to access your account and continue shopping.
                    </p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} autoComplete="off" className="space-y-5">
                    <div>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="block w-full"
                            placeholder="name@example.com"
                            isFocused={true}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="block w-full"
                            placeholder="••••••••"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center group cursor-pointer">
                            <Checkbox
                                name="remember"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-neutral-600 group-hover:text-primary transition-colors">Remember me</span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <div className="pt-2">
                        <PrimaryButton disabled={processing} className="w-full py-3.5 shadow-md shadow-primary/20">
                            {processing ? (
                                <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
                            ) : null}
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-8 flex items-center justify-center relative">
                    <div className="absolute inset-x-0 h-px bg-neutral-200"></div>
                    <span className="relative bg-white px-4 text-sm text-neutral-400">Or continue with</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-600 font-medium py-2.5 px-4 rounded-xl transition-all text-sm shadow-sm hover:shadow active:scale-95">
                        <i className="fa-brands fa-google text-red-500"></i> Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-600 font-medium py-2.5 px-4 rounded-xl transition-all text-sm shadow-sm hover:shadow active:scale-95">
                        <i className="fa-brands fa-facebook text-blue-600"></i> Facebook
                    </button>
                </div>

                <p className="mt-8 text-center text-sm text-neutral-600">
                    Don't have an account?{' '}
                    <Link href={route('register')} className="font-semibold text-primary hover:text-accent transition-colors">
                        Create one now
                    </Link>
                </p>
            </motion.div>
        </GuestLayout>
    );
}
