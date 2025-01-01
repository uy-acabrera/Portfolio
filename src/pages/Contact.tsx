import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  const email = 'uy.acabrera@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/alex-cabrera-4bb46b58/';

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to new opportunities and connections. 
          Feel free to reach out through LinkedIn or email.
        </p>

        <div className="space-y-8">
          {/* LinkedIn */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Connect on LinkedIn</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let's connect professionally and grow our network
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0077b5] hover:bg-[#006399] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0077b5]"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send an Email</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For direct communication, feel free to send me an email
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};