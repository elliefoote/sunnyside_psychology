export default function FormSubmissionFailure() {
  return (
    <div className="text-gray-900">
      <div className="alert alert-error">
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Form submission failed!</span>
      </div>
      <div className="py-3 px-5 my-3 rounded-2xl bg-white">
        <p className="pb-3">Sorry, something went wrong!</p>
        <p className="pb-3">
          Please click 'Reset Form' below to try again, or click{" "}
          <a href="mailto:sunnysidepsychology@outlook.com">here</a> to send us
          an email.
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
