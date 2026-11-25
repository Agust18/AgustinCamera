// Combinaciones de utilidades Tailwind compartidas. No es CSS: son strings de clases.

export const ease = [0.16, 1, 0.3, 1];

export const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400';

export const display = "font-['Space_Grotesk'] tracking-tight";

const btnBase =
  `group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium cursor-pointer ` +
  `transition-[background-color,border-color,transform] duration-200 ease-out active:translate-y-px ${focusRing}`;

export const btnPrimary = `${btnBase} bg-blue-600 text-white hover:bg-blue-500`;

export const btnSecondary = `${btnBase} border border-white/20 text-gray-100 hover:border-white/50 hover:bg-white/5`;

// Subrayado que se dibuja al pasar el cursor
export const linkDraw =
  `bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-bottom bg-no-repeat pb-0.5 ` +
  `transition-[background-size] duration-300 ease-out hover:bg-[length:100%_1px] focus-visible:bg-[length:100%_1px] ${focusRing}`;

export const card =
  'rounded-2xl border border-white/10 bg-[#11121a] transition-[transform,border-color] duration-300 ease-out ' +
  'hover:-translate-y-0.5 hover:border-blue-400/40 motion-reduce:hover:translate-y-0';

export const sectionTitle = `${display} text-3xl font-bold text-white md:text-4xl`;

export const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8';
