"use client"
import Link from "next/link";

export default function Page() {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "5K+", label: "Products Available" },
    { value: "99%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Customer Support" },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your orders delivered on time.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Shop confidently with secure and encrypted payment methods.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description:
        "Enjoy competitive prices, exciting deals, and exclusive discounts.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description:
        "Simple return and refund process for a worry-free shopping experience.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description:
        "We carefully select products to ensure excellent quality and value.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description:
        "Our support team is always ready to assist you whenever you need help.",
    },
  ];

  return (
    <main className="bg-gray-50 pt-14">
      <section className="bg-orange-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Welcome to QuickCart
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Shop Smarter with <span className="text-black">QuickCart</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            QuickCart is your one-stop online shopping destination where
            convenience meets quality. We are committed to providing premium
            products, secure shopping, and fast delivery—all at affordable
            prices.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-100"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      <section className="-mt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white p-6 text-center shadow-lg"
            >
              <h2 className="text-3xl font-bold text-black">
                {item.value}
              </h2>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At QuickCart, we believe online shopping should be simple,
              enjoyable, and trustworthy. We carefully curate a wide selection
              of products to ensure our customers receive excellent quality and
              value every time they shop.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you're shopping for everyday essentials or discovering new
              products, QuickCart provides a seamless experience with secure
              payments, reliable delivery, and exceptional customer support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose Us?
            </h3>

            <ul className="mt-8 space-y-4 text-lg text-gray-700">
              <li>✅ High-quality products</li>
              <li>✅ Affordable pricing</li>
              <li>✅ Fast & secure delivery</li>
              <li>✅ Trusted payment methods</li>
              <li>✅ Easy returns</li>
              <li>✅ Dedicated customer support</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            What Makes QuickCart Special?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We are dedicated to delivering an outstanding shopping experience
            from browsing to checkout.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl">{feature.icon}</div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-orange-500 p-10 text-white">
            <h2 className="text-3xl font-bold">Our Mission</h2>

            <p className="mt-6 leading-8 text-gray-100">
              Our mission is to simplify online shopping by offering quality
              products, secure transactions, affordable prices, and exceptional
              customer service.
            </p>
          </div>

          <div className="rounded-2xl border bg-orange-400 text-white p-10">
            <h2 className="text-3xl font-bold">Our Vision</h2>

            <p className="mt-6 leading-8 ">
              To become one of the most trusted eCommerce platforms by creating
              a shopping experience that customers love and recommend.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Our Core Values
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-2xl font-semibold">Quality</h3>

              <p className="mt-4 text-gray-600">
                Every product is selected carefully to ensure superior quality
                and customer satisfaction.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-2xl font-semibold">Trust</h3>

              <p className="mt-4 text-gray-600">
                Transparency, security, and customer satisfaction are the
                foundation of everything we do.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-2xl font-semibold">Customer First</h3>

              <p className="mt-4 text-gray-600">
                Every decision we make is focused on providing the best shopping
                experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-24 border bordert-gray-200">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Thank You for Choosing QuickCart
          </h2>

          <p className="mt-6 text-lg">
            We are committed to providing you with a secure, fast, and enjoyable
            shopping experience. Explore thousands of products and discover why
            customers trust QuickCart every day.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-block rounded-lg bg-black px-8 py-3 font-semibold text-white transition hover:bg-white hover:border hover:border-black hover:text-black"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}