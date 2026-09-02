export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
