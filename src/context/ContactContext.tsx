import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactPopup from '../components/ContactPopup';

interface ContactContextType {
  openContact: () => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactPopup isOpen={isContactOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
