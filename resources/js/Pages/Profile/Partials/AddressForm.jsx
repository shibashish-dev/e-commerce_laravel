import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import Swal from "sweetalert2";

export default function AddressForm({ className = "" }) {
    const addressInput = useRef();
    const user = usePage().props.auth.user;
    const address = user?.info?.address ? JSON.parse(user?.info?.address) : {};
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);

    const {
        data,
        setData,
        errors,
        put,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        address: address.address || "",
        country: address.country || "",
        state: "",
        city: "",
        zip: address.zip || "",
    });

    const updateAddress = (e) => {
        e.preventDefault();

        post(route("profile.address", user.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                Swal.fire({
                    icon: "success",
                    title: "Address updated successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true,
                    position: "top-end",
                    timerProgressBar: true,
                });
            },
            onError: (errors) => {
                reset();
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

    // Update form data when country, state, or city changes
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            country: country?.name || "",
            state: state?.name || "",
            city: city?.name || "",
            country_code: country?.iso3 || "",
            state_code: state?.state_code || "",
        }));
    }, [country, state, city, setData]);

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Update Address
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Ensure your address information is up to date.
                </p>
            </header>
            <div className="flex flex-col mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                    Your Current Address:
                </h3>
                <div className="text-sm text-gray-700">
                    <p>
                        <span className="font-medium">Address:</span>{" "}
                        {address?.address}
                    </p>
                    <p>
                        <span className="font-medium">City:</span>{" "}
                        {address?.city}
                    </p>
                    <p>
                        <span className="font-medium">State:</span>{" "}
                        {address?.state}
                    </p>
                    <p>
                        <span className="font-medium">Country:</span>{" "}
                        {address?.country}
                    </p>
                    <p>
                        <span className="font-medium">Zip Code:</span>{" "}
                        {address?.zip}
                    </p>
                </div>
            </div>
            <form onSubmit={updateAddress} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="address" value="Address" />
                    <TextInput
                        id="address"
                        ref={addressInput}
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="address"
                    />
                    <InputError message={errors.address} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="country" value="Country" />
                    <CountrySelect
                        id="country"
                        value={country}
                        onChange={(val) => setCountry(val)}
                        className="mt-1 block w-full"
                        autoComplete="country"
                    />
                    <InputError message={errors.country} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="state" value="State" />
                    <StateSelect
                        id="state"
                        countryid={country?.id || address?.country_code}
                        value={state}
                        onChange={(val) => setState(val)}
                        className="mt-1 block w-full"
                        autoComplete="state"
                    />
                    <InputError message={errors.state} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="city" value="City" />
                    <CitySelect
                        id="city"
                        value={city}
                        countryid={country?.id}
                        stateid={state?.id}
                        onChange={(val) => setCity(val)}
                        className="mt-1 block w-full"
                        autoComplete="city"
                    />
                    <InputError message={errors.city} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="zip" value="ZIP Code" />
                    <TextInput
                        id="zip"
                        value={data.zip}
                        onChange={(e) => setData("zip", e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="postal-code"
                    />
                    <InputError message={errors.zip} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
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
