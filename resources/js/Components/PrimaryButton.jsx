export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
