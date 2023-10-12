import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { Formik, Field, Form } from "formik";
import FormSubmissionSuccess from "./FormSubmissionSuccess";
import FormSubmissionFailure from "./FormSubmissionFailure";

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [responseStatus, setResponseStatus] = useState("");

  return (
    <div className="py-8 lg:py-6 px-4 mt-6 drop-shadow-md bg-neutral-100 rounded">
      {responseStatus == "success" ? (
        <div>
          <FormSubmissionSuccess />
          <div className="flex justify-center">
            <button
              className="border border-matisse-700 rounded-3xl bg-matisse-700 hover:border-matisse-900 hover:bg-matisse-900 px-10 py-2 mt-4 text-neutral-100 text-sm uppercase"
              onClick={() => setResponseStatus("")}
            >
              Reset Form
            </button>
          </div>
        </div>
      ) : responseStatus == "failure" ? (
        <>
          <FormSubmissionFailure />
          <div className="flex justify-center">
            <button
              className="border border-matisse-700 rounded-3xl bg-matisse-700 hover:border-matisse-900 hover:bg-matisse-900 px-10 py-2 mt-4 text-neutral-100 text-sm uppercase"
              onClick={() => setResponseStatus("")}
            >
              Reset Form
            </button>
          </div>
        </>
      ) : (
        <Formik
          initialValues={{
            name: "",
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
            if (response.status == 200) {
              setResponseStatus("success");
            } else {
              setResponseStatus("failure");
            }
          }}
        >
          <Form className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
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
                Message
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
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
}
