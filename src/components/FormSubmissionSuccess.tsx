export default function FormSubmissionSuccess() {
  return (
    <div className="text-gray-900">
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Form submitted successfully!</span>
      </div>
      <div className="py-3 px-5 my-3 rounded-2xl bg-white">
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
    </div>
  );
}
