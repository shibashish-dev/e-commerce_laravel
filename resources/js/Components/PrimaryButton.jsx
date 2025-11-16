export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-widest  w-auto   text-center text-white bg-primary  border-primary  hover:bg-transparent hover:text-primary transition py-1${disabled && 'opacity-25'} ` + className }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
