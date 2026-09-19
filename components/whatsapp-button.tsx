"use client"

const PHONE = "27815065978"
const DEFAULT_MESSAGE = "Hi Eclipse Power Energy! I'd like to get a free solar quote."

export function WhatsAppButton() {
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      id="whatsapp-floating-btn"
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50"
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wa-grad" x1="85.915" y1="172.911" x2="86.535" y2="2.148" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#20b038" />
            <stop offset="1" stopColor="#60d66a" />
          </linearGradient>
        </defs>
        <path
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 8.108 30.469L25.3 149.875l33.719-8.813a61.157 61.157 0 0 0 29.145 7.398c33.733 0 61.166-27.423 61.178-61.13.012-16.326-6.334-31.666-17.866-43.199a60.983 60.983 0 0 0-43.292-18.904z"
          fill="url(#wa-grad)"
        />
        <path
          d="M87.184 32.225c-29.909 0-54.183 24.264-54.195 54.132a53.867 53.867 0 0 0 7.638 27.688l1.19 1.895-5.058 18.506 18.955-4.965 1.83 1.086a54.083 54.083 0 0 0 29.601 8.737c29.909 0 54.183-24.264 54.195-54.132.006-14.465-5.611-28.054-15.822-38.264a53.925 53.925 0 0 0-38.334-16.683z"
          fill="#fff"
        />
        <path
          d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.919-4.746 5.981-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.669-13.645z"
          fill="#25D366"
        />
      </svg>
    </a>
  )
}

