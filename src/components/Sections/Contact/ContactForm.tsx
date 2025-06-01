import emailjs from '@emailjs/browser';
import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const form = useRef<HTMLFormElement>(null);

  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);

      const NEXT_PUBLIC_SERVICE_ID = "service_7iwpbij";
      const NEXT_PUBLIC_TEMPLATE_ID = "template_isjhd5v";
      const NEXT_PUBLIC_PUBLIC_KEY = "eLkv3SYp19f35QAAF";
      if (!form.current) return;
      emailjs
        .sendForm(
          NEXT_PUBLIC_SERVICE_ID,   // from EmailJS
          NEXT_PUBLIC_TEMPLATE_ID,  // from EmailJS
          form.current,
          NEXT_PUBLIC_PUBLIC_KEY    // from EmailJS
        )
        .then(
          result => {
            console.log('SUCCESS!', result.text);
            alert('Message sent!');
          },
          error => {
            console.log('FAILED...', error.text);
            alert('Something went wrong.');
          }
        );
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={form}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
