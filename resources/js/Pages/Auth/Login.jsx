import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

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

        <>
            <Head title='Login' />
            {/* login */}
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        welcome back customer
                    </p>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                    <form onSubmit={submit} autoComplete="off">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                                <input type="email" name="email" onChange={(e) => setData('email', e.target.value)} value={data.email} id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="youremail.@domain.com" />
                                <InputError message={errors.email} className="mt-2" />

                            </div>
                            <div>
                                <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                                <input type="password" name="password" id="password" onChange={(e) => setData('password', e.target.value)} value={data.password} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
                                <InputError message={errors.password} className="mt-2" />

                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" onChange={(e) => setData('remember', e.target.checked)} value={data.remember} className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                            </div>
                            <a href={route('password.request')} className="text-primary">Forgot password</a>
                        </div>
                        <div className="mt-4">
                            <button type="submit" disabled={processing} className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                        </div>
                    </form>
                    {/* login with */}
                    <div className="mt-6 flex justify-center relative">
                        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
                    </div>
                    <div className="mt-4 flex gap-4">
                        <a href="#" className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                        <a href="#" className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
                    </div>
                    {/* ./login with */}
                    <p className="mt-4 text-center text-gray-600">Don't have account? <Link href={route('register')} className="text-primary">Register
                        now</Link></p>
                </div>
            </div>
            {/* ./login */}



        </>
    );
}
