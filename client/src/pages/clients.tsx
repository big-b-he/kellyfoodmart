import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Utensils, Store, ShoppingBag } from "lucide-react";
import { Link } from "wouter";

export default function Clients() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Who We Serve</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for every sector of the food industry. Whether you run a single restaurant or a grocery chain, we scale to meet your needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Utensils,
              title: "Restaurants & Hospitality",
              desc: "From fine dining to fast casual, hotels to caterers. We understand the need for consistency, plate cost control, and timely delivery windows.",
              features: ["Daily delivery", "Split case ordering", "Seasonal menu consulting"]
            },
            {
              icon: Store,
              title: "Retail Grocers",
              desc: "Independent markets and grocery chains. We provide retail-ready produce with competitive pricing to help you maintain healthy margins.",
              features: ["High volume fulfillment", "Retail packaging", "Merchandising support"]
            },
            {
              icon: ShoppingBag,
              title: "Institutions & Schools",
              desc: "Hospitals, universities, and corporate cafeterias. We offer nutritional consistency and reliable large-scale supply chain solutions.",
              features: ["Contract pricing", "Nutritional data", "Certified safety standards"]
            }
          ].map((sector, i) => (
            <div key={i} className="border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="h-14 w-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                <sector.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{sector.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{sector.desc}</p>
              <ul className="space-y-3">
                {sector.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Case Study / Testimonial visual */}
        <div className="bg-primary rounded-3xl overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-accent font-bold tracking-wider uppercase mb-4">Partner Success Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">"Kelly Food Mart transformed our supply chain."</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                "Before switching to Kelly, we struggled with inconsistent quality and late deliveries. Now, I don't even have to check the crates when they arrive—I know it's going to be perfect. They've helped us reduce waste by 15%."
              </p>
              <div>
                <p className="font-bold text-xl">Elena Rodriguez</p>
                <p className="text-white/60">Owner, The Fresco Market Chain</p>
              </div>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center min-h-[400px]">
              <div className="h-full w-full bg-primary/20 backdrop-blur-[2px]"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
           <h3 className="text-2xl font-bold font-serif mb-6">Ready to become a partner?</h3>
           <Link href="/contact">
             <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-10">
               Open an Account
             </Button>
           </Link>
        </div>
      </div>
    </Layout>
  );
}