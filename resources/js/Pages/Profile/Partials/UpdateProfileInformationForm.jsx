import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const userInfo = user?.info || {};
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone_number: userInfo.phone_number || "",
            date_of_birth: userInfo.date_of_birth || "",
            gender: userInfo.gender || "",
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"), {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Profile updated successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true,
                    position: "top-end",
                    timerProgressBar: true,
                });
            },
            onError: () => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true,
                    position: "top-end",
                    timerProgressBar: true,
                });
            },
        });
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form
                onSubmit={submit}
                className="mt-6 space-y-6  w-full"
                encType="multipart/form-data"
            >
                {/* Name */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full disabled:bg-slate-100"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                        readOnly
                        disabled
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                {/* Gender */}
                <div>
                    <InputLabel htmlFor="gender" value="Gender" />
                    <select
                        id="gender"
                        className="mt-1 block w-full border-gray-300"
                        value={data.gender}
                        onChange={(e) => setData("gender", e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <InputError className="mt-2" message={errors.gender} />
                </div>

                {/* Phone */}
                <div>
                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                    <TextInput
                        id="phone_number"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.phone_number}
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                    />
                    <InputError
                        className="mt-2"
                        message={errors.phone_number}
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <InputLabel htmlFor="date_of_birth" value="Date of Birth" />
                    <TextInput
                        id="date_of_birth"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.date_of_birth}
                        onChange={(e) =>
                            setData("date_of_birth", e.target.value)
                        }
                    />
                    <InputError
                        className="mt-2"
                        message={errors.date_of_birth}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing} className="bg-primary">
                        Save
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
