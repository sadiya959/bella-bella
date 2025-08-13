export default function Footer() {
  return (
    <footer className="bg-amber-900 py-12 text-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Bella Bella</h3>
            <p className="leading-relaxed text-amber-200">
              Aunthentic Italian cuisine crafted with passion and served with
              love. Experience the true taste of italy in every bite.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-amber-200">
              <div className="flex items-center gap-2">
                <div className="flex size-5 items-center justify-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>123 Italian Street, Food City, FC 12345</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex size-5 items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>(555) 123-4567</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex size-5 items-center justify-center">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <span>Info@bellabella.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2 text-amber-200">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>
            &copy; 2025 Bella Bella Italian Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
