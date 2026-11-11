'use client';

import { useState, type FormEvent } from 'react';
import {
  FaPhone,
  FaRegCommentDots,
  FaRegEnvelope,
  FaRegUser,
  FaTableCellsLarge,
  FaWhatsapp,
} from 'react-icons/fa6';
import { services } from '@/data/services';
import { buildQuoteLink } from '@/lib/whatsapp';

type Props = {
  title?: string;
  subtitle?: string;
  /** Pre-select a service (e.g. on a service detail page) */
  defaultService?: string;
  /** `card` = white elevated card (hero / sidebar), `plain` = no card styling */
  variant?: 'card' | 'plain';
  id?: string;
};

/**
 * Quote form. There is no backend: on submit the details are written into a
 * WhatsApp message to Home Style and WhatsApp is opened for the visitor to send it.
 */
export default function QuoteForm({
  title = 'Get a Free Quote!',
  subtitle = 'Tell us about your project and get a quick, no-obligation estimate.',
  defaultService = '',
  variant = 'card',
  id,
}: Props) {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if ((data.website ?? '').trim()) return; // honeypot – a bot filled the hidden field

    const url = buildQuoteLink({
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim(),
      service: data.service,
      details: data.details?.trim(),
    });

    // Open WhatsApp straight away (inside the click handler so popup blockers allow it).
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url; // popup blocked → continue in this tab

    setName(data.name.trim().split(' ')[0]);
    setLink(url);
    form.reset();
  }

  return (
    <div className={`quote-card${variant === 'plain' ? ' quote-card--plain' : ''}`} id={id}>
      <h2>{title}</h2>
      <p className="qc-sub">{subtitle}</p>
      <form onSubmit={onSubmit} noValidate>
        {/* Honeypot – real visitors never see or fill this */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

        <div className="field">
          <FaRegUser aria-hidden="true" />
          <input type="text" name="name" placeholder="Your Name" autoComplete="name" required aria-label="Your name" />
        </div>
        <div className="field">
          <FaPhone aria-hidden="true" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            required
            pattern="[0-9+\-\s]{10,15}"
            title="Enter a valid phone number"
            aria-label="Phone number"
          />
        </div>
        <div className="field">
          <FaRegEnvelope aria-hidden="true" />
          <input type="email" name="email" placeholder="Email Address" autoComplete="email" aria-label="Email address" />
        </div>
        <div className="field">
          <FaTableCellsLarge aria-hidden="true" />
          <select name="service" required defaultValue={defaultService} aria-label="Service required">
            <option value="" disabled>
              Service Required
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Home Interior">Complete Home Interior</option>
          </select>
        </div>
        <div className="field ta">
          <FaRegCommentDots aria-hidden="true" />
          <textarea name="details" placeholder="Project Details (Optional)" aria-label="Project details" />
        </div>

        <button type="submit" className="btn btn--whatsapp btn--block">
          <FaWhatsapp aria-hidden="true" /> Send on WhatsApp
        </button>

        {link && (
          <div className="form-note ok" role="status">
            Thank you{name ? `, ${name}` : ''}! WhatsApp is opening with your details – just press <b>Send</b> to
            reach us. Nothing happened?{' '}
            <a href={link} target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </a>
            .
          </div>
        )}
        <p className="form-fine">
          <FaWhatsapp aria-hidden="true" />
          Your details open in WhatsApp, ready to send.
        </p>
      </form>
    </div>
  );
}
