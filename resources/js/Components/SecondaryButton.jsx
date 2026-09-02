export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-700 shadow-sm border border-neutral-200 transition-all duration-300 hover:bg-neutral-50 hover:shadow-md hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
