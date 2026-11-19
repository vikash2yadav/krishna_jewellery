
import Image from "next/image";

const categories = [
  {
    name: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700",
  },
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700",
  },
  {
    name: "Rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700",
  },
  {
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700",
  },
];

const products = [
  {
    name: "Royal Gold Necklace",
    category: "Gold Collection",
    price: "₹45,999",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700",
  },
  {
    name: "Elegant Diamond Ring",
    category: "Diamond Collection",
    price: "₹18,499",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700",
  },
  {
    name: "Traditional Gold Earrings",
    category: "Gold Collection",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700",
  },
  {
    name: "Classic Bracelet",
    category: "Premium Collection",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700",
  },
];

export default function Home() {
  return (
    <main className="bg-[#faf8f4] text-[#29251f]">

      {/* Announcement */}
      <div className="bg-[#9b773c] text-white text-center py-2 text-xs tracking-widest">
        EXCLUSIVE COLLECTIONS | ELEGANCE IN EVERY DETAIL
      </div>

      {/* Navbar */}
      <header className="bg-[#faf8f4] border-b border-[#e9e1d5]">
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <div className="text-2xl md:text-3xl font-serif tracking-widest">
            KRISHNA
            <span className="block text-[10px] text-center tracking-[5px] text-[#a78348]">
              JEWELLERY
            </span>
          </div>

          <div className="hidden md:flex items-center gap-9 text-sm tracking-wide">
            <a href="#" className="hover:text-[#a78348]">Home</a>
            <a href="#collections" className="hover:text-[#a78348]">Collections</a>
            <a href="#products" className="hover:text-[#a78348]">Shop</a>
            <a href="#about" className="hover:text-[#a78348]">About Us</a>
            <a href="#contact" className="hover:text-[#a78348]">Contact</a>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <button aria-label="Search">⌕</button>
            <button aria-label="Wishlist">♡</button>
            <button aria-label="Shopping bag">♧</button>
          </div>

        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[580px] md:min-h-[680px] flex items-center">

        <Image
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1800"
          alt="Luxury jewellery collection"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-white">
          <div className="max-w-xl">
            <p className="uppercase tracking-[5px] text-sm mb-6">
              Timeless Beauty • Endless Elegance
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-7">
              Jewellery That
              <br />
              <blockquote>Tells Your Story</blockquote>
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-8 mb-9 max-w-md">
              Discover exquisite jewellery crafted to celebrate
              your beauty, memories and every special moment.
            </p>

            <a
              href="#collections"
              className="inline-block bg-[#b8955b] hover:bg-[#98743e] text-white px-9 py-4 text-xs tracking-[3px] transition"
            >
              <a>EXPLORE COLLECTION</a>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#e9e1d5]">

        {[
          ["✧", "Premium Quality", "Beautifully selected designs"],
          ["◇", "Elegant Designs", "Styles for every occasion"],
          ["♧", "Secure Shopping", "Safe shopping experience"],
          ["♡", "Customer Care", "We're here to help"],
        ].map(([icon, title, desc]) => (
          <div key={title} className="text-center">
            <div className="text-3xl text-[#a78348] mb-3">{icon}</div>
            <h3 className="font-serif text-lg">{title}</h3>
            <p className="text-xs text-gray-500 mt-2">{desc}</p>
          </div>
        ))}

      </section>

      {/* Categories */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <p className="text-[#a78348] tracking-[4px] text-xs mb-4">
            EXPLORE OUR WORLD
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Shop By Collection
          </h2>
          <p className="text-gray-500 mt-4 text-sm">
            Find the perfect piece that reflects your personality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {categories.map((category) => (
            <a href="#products" key={category.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eee8df]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <h3 className="font-serif text-xl text-center mt-5 group-hover:text-[#a78348] transition">
                {category.name}
              </h3>
            </a>
          ))}

        </div>
      </section>

      {/* Featured products */}
      <section id="products" className="bg-[#f1ece4] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#a78348] tracking-[4px] text-xs mb-4">
              HANDPICKED FOR YOU
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Our Best Sellers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

            {products.map((product) => (
              <div key={product.name} className="group">

                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full text-xl">
                    ♡
                  </button>
                </div>

                <div className="pt-5">
                  <p className="text-xs text-[#a78348] mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-base md:text-lg">
                    {product.name}
                  </h3>
                  <p className="font-medium mt-2">{product.price}</p>
                  <button className="text-xs tracking-widest border-b border-[#a78348] pb-1 mt-4 hover:text-[#a78348]">
                    VIEW PRODUCT
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Promotional banner */}
      <section className="relative py-28 md:py-36 text-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1800"
          alt="Elegant jewellery"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6">
          <p className="tracking-[5px] text-xs mb-5">
            BEAUTY BEYOND TIME
          </p>
          <h2 className="font-serif text-4xl md:text-6xl mb-7">
            Make Every Moment Special
          </h2>
          <a
            href="#products"
            className="inline-block border border-white px-9 py-4 text-xs tracking-[3px] hover:bg-white hover:text-black transition"
          >
            DISCOVER MORE
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900"
            alt="Krishna Jewellery craftsmanship"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[#a78348] tracking-[4px] text-xs mb-5">
            OUR STORY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">
            A Tradition of Beauty & Elegance
          </h2>
          <p className="text-gray-600 leading-8 mb-6">
            At Krishna Jewellery, we believe every piece of jewellery
            tells a beautiful story. Our collections bring together
            timeless elegance and contemporary style.
          </p>
          <p className="text-gray-600 leading-8 mb-8">
            Discover jewellery designed to make your everyday moments
            and special occasions unforgettable.
          </p>
          <a href="#contact" className="inline-block bg-[#a78348] text-white px-8 py-4 text-xs tracking-widest hover:bg-[#80602f] transition">
            KNOW MORE
          </a>
        </div>

      </section>

      {/* Newsletter */}
      <section className="bg-[#eee7dc] py-20 px-6 text-center">
        <p className="text-[#a78348] tracking-[4px] text-xs mb-4">
          STAY CONNECTED
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Join Our Jewellery Circle
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Get updates about our latest collections and exclusive offers.
        </p>
        <form className="max-w-md mx-auto flex border-b border-[#a78348]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent flex-1 py-4 outline-none text-sm"
          />
          <button className="text-xs tracking-widest px-4">
            SUBSCRIBE
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#29251f] text-white pt-16 pb-8">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h2 className="font-serif text-3xl tracking-widest">
              KRISHNA
            </h2>
            <p className="text-[#c4a675] text-xs tracking-[4px] mt-2">
              JEWELLERY
            </p>
            <p className="text-gray-400 text-sm leading-7 mt-6">
              Timeless jewellery. Unforgettable memories.
              Discover elegance with Krishna Jewellery.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a href="#">Home</a>
              <a href="#collections">Collections</a>
              <a href="#products">Shop</a>
              <a href="#about">About Us</a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Collections</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a href="#collections">Necklaces</a>
              <a href="#collections">Earrings</a>
              <a href="#collections">Rings</a>
              <a href="#collections">Bracelets</a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <p>Krishna Jewellery</p>
              <a href="mailto:krishnajewellery@gmail.com">Email: krishnajewellery@gmail.com</a>
              <a href="tel:+919737775782">Phone: +91 97377 75782</a>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-7 border-t border-gray-700 text-center text-xs text-gray-500">
          © 2026 Krishna Jewellery. All Rights Reserved.
        </div>

      </footer>

    </main>
  );
}
