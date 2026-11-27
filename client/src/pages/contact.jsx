import {
  Mail,
  MapPin,
  Camera,
  ArrowUp,
} from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#351653] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Let's Make
              <span className="text-[#F4D323]"> Moves.</span>
            </h2>

            <p className="text-white/70 mt-6 max-w-md leading-8">
              Together, we can create a more inclusive skateboarding
              community where girls and women can thrive.
            </p>
          </div>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-[#F4D323]" />

              <div>
                <p className="text-white/50 text-sm">Email</p>
                <a
                  href="mailto:info@sheskateskenya.org"
                  className="hover:text-[#F4D323] transition"
                >
                  Email us
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#F4D323]" />

              <div>
                <p className="text-white/50 text-sm">Location</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Camera className="text-[#F4D323]" />

              <div>
                <p className="text-white/50 text-sm">Social Media</p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4D323] transition"
                >
                  Follow our journey
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="border-t border-white/15 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} She Skates Kenya. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-[#F4D323] hover:text-white transition"
          >
            Back to top
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}