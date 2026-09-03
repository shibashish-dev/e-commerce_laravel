import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import { motion } from 'framer-motion';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        aggrement: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Create Account" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-2 tracking-tight">Create an Account</h2>
                    <p className="text-neutral-500 text-sm">
                        Join us to access exclusive features and personalized shopping.
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <InputLabel htmlFor="name">Full Name</InputLabel>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="block w-full"
                            placeholder="John Doe"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

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

                    <div>
                        <InputLabel htmlFor="password_confirmation">Confirm Password</InputLabel>
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="block w-full"
                            placeholder="••••••••"
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="pt-2">
                        <label className="flex items-start group cursor-pointer">
                            <div className="pt-0.5">
                                <Checkbox
                                    name="aggrement"
                                    id="aggrement"
                                    checked={data.aggrement}
                                    onChange={(e) => setData('aggrement', e.target.checked)}
                                />
                            </div>
                            <span className="ml-2 text-sm text-neutral-600 leading-tight">
                                I agree to the <a href="#" className="text-primary hover:text-accent font-medium">Terms of Service</a> and <a href="#" className="text-primary hover:text-accent font-medium">Privacy Policy</a>
                            </span>
                        </label>
                        <InputError message={errors.aggrement} className="mt-2" />
                    </div>

                    <div className="pt-4">
                        <PrimaryButton disabled={processing} className="w-full py-3.5 shadow-md shadow-primary/20">
                            {processing ? <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> : null}
                            Create Account
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-8 flex items-center justify-center relative">
                    <div className="absolute inset-x-0 h-px bg-neutral-200"></div>
                    <span className="relative bg-white px-4 text-sm text-neutral-400">Or sign up with</span>
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
                    Already have an account?{' '}
                    <Link href={route('login')} className="font-semibold text-primary hover:text-accent transition-colors">
                        Sign in
                    </Link>
                </p>
            </motion.div>
        </GuestLayout>
    );
}
