import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ICopyButtonProps {
  /** Text copied to the clipboard when the button is activated. */
  value: string;
  /** Accessible label describing what is being copied (e.g. "correo"). */
  label: string;
  className?: string;
}

/**
 * Button that copies `value` to the clipboard and shows a transient confirmation
 * (icon swap plus a polite live region for assistive tech).
 * @param value Text copied to the clipboard.
 * @param label Accessible label describing what is being copied.
 */
export function CopyButton({ value, label, className }: ICopyButtonProps): React.JSX.Element {
  const [copied, setCopied] = useState(false);

  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable or permission denied; silently no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copiar ${label}`}
      title={`Copiar ${label}`}
      className={`inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-steel transition-colors hover:text-brand-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500 ${className ?? ''}`}
    >
      {copied ? <Check className="h-4 w-4" aria-hidden focusable={false} /> : <Copy className="h-4 w-4" aria-hidden focusable={false} />}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${label} copiado` : ''}
      </span>
    </button>
  );
}
