import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { Formik, Field, Form } from "formik";

interface Values {
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <div className="py-8 lg:py-6 px-4 mt-6 drop-shadow-md bg-neutral-100 rounded">
      {responseMessage ? (
        <div className="text-gray-900">
          <p className="pb-3">
            Thank you for your enquiry! We will get back to you as soon as
            possible.
          </p>
          <p className="pb-3">
            Please be aware that this is NOT a crisis service and you will not
            receive a response straight away.
          </p>
          <div className="pb-3">
            If you need help right now, please call:
            <ul>
              <li>• Lifeline: 13 11 14 </li>
              <li>• Suicide Call Back Service: 1300 659 467</li>
            </ul>
          </div>
          <p className="pb-3">
            Visit{" "}
            <a href="https://www.healthdirect.gov.au/mental-health-helplines">
              HealthDirect
            </a>{" "}
            to find more helpline options.
          </p>
          If you or someone else is unsafe now, please call 000.
        </div>
      ) : (
        <Formik
          initialValues={{
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={async (values: Values) => {
            const response = await fetch("/api/contact", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(values),
            });
            const data = await response.json();
            if (data.message) {
              setResponseMessage(data.message);
            }
          }}
        >
          <Form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></Field>
            </div>
            <SubmitButton />
          </Form>
        </Formik>
      )}
    </div>
  );
}
