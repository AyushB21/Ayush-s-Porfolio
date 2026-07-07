import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ModalContext = createContext({ open: () => {} });
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [content, setContent] = useState(null);
  const lastFocus = useRef(null);
  const closeBtn = useRef(null);

  const open = useCallback((node) => {
    lastFocus.current = document.activeElement;
    setContent(node);
  }, []);

  const close = useCallback(() => {
    setContent(null);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  }, []);

  useEffect(() => {
    if (!content) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    // move focus into the dialog
    const id = requestAnimationFrame(() => closeBtn.current && closeBtn.current.focus());
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      cancelAnimationFrame(id);
      document.body.style.overflow = '';
    };
  }, [content, close]);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <div
        id="modal"
        className={content ? 'open' : ''}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target.id === 'modal') close();
        }}
      >
        {content && (
          <div className="glass">
            <button className="x" ref={closeBtn} aria-label="Close" onClick={close}>
              ✕
            </button>
            {content}
          </div>
        )}
      </div>
    </ModalContext.Provider>
  );
}
