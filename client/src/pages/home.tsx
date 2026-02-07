import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, ShieldCheck, Star } from "lucide-react";
import { Link } from "wouter";

// Assets
import heroBg from "@assets/generated_images/IMG_1996.jpg";
import fruitImg from "@assets/generated_images/assorted_fresh_fruits_category.png";
import vegImg from "@assets/generated_images/fresh_farm_vegetables_category.png";
import specialtyImg from "@assets/generated_images/exotic_specialty_produce_category.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20 px-4 text-center text-white space-y-8 max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-sm font-semibold tracking-wide uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Wholesale Produce Experts
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Freshness Delivered <br />{" "}
            <span className="text-accent italic">Daily</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Connecting local farms to restaurants, retailers, and markets with
            premium quality produce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 h-14 rounded-full"
              >
                Explore Our Catalog
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 text-lg px-8 h-14 rounded-full backdrop-blur-sm"
              >
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Value Prop */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Leaf,
                title: "Farm Fresh Quality",
                desc: "Sourced directly from trusted local growers and top international suppliers to ensure peak freshness.",
              },
              {
                icon: Truck,
                title: "Reliable Logistics",
                desc: "Our temperature-controlled fleet ensures your order arrives crisp, fresh, and on time, every time.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Guaranteed",
                desc: "Rigorous quality control checks at every stage. We stand behind every crate we deliver.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/50 transition-colors duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-primary">
              Our Produce
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a wide range of fruits, vegetables, and specialty items
              to meet all your culinary needs.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 rounded-full"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        {/* Abstract pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                More Than Just a <br />
                Produce Supplier
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                At Kelly Food Mart, we believe that great food starts with great
                ingredients. For over two decades, we've been the silent partner
                behind the city's best restaurants and markets.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">15+</h4>
                  <p className="text-sm opacity-80">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">500+</h4>
                  <p className="text-sm opacity-80">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">100%</h4>
                  <p className="text-sm opacity-80">Satisfaction Guarantee</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">24/7</h4>
                  <p className="text-sm opacity-80">Customer Support</p>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 mt-4 font-semibold">
                  Read Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
                <img
                  src={heroBg}
                  alt="Warehouse Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-8 rounded-full shadow-xl hidden md:block animate-bounce duration-[3000ms]">
                <p className="font-serif font-bold text-center leading-tight">
                  Premium
                  <br />
                  Quality
                  <br />
                  Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Ready to Upgrade Your Supply Chain?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied businesses who trust Kelly Food Mart for
            their daily produce needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/20"
              >
                Get a Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-border hover:bg-white/80 rounded-full px-8"
              >
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
