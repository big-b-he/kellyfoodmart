import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import warehouseImg from "@assets/generated_images/modern_food_distribution_warehouse.jpg";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-foreground/90 font-light">
            Family-owned and operated since 2009. We are dedicated to bridging
            the gap between local farms and the community's table.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl"></div>
            <img
              src={warehouseImg}
              alt="Kelly Food Mart Warehouse"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">
              A Legacy of Freshness
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kelly Food Mart is a trusted wholesale supplier of fresh produce
              and essential restaurant goods, proudly serving restaurants,
              retailers, and businesses across the Greater Toronto Area. We
              specialize in delivering high-quality bulk products sourced for
              freshness, consistency, and value, helping our customers meet
              daily operational demands with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With flexible pickup options and reliable, on-time delivery
              services, Kelly Food Mart ensures your business stays fully
              stocked and running efficiently. Our commitment to quality,
              dependable service, and strong customer relationships makes us a
              reliable partner for businesses that depend on fresh ingredients
              and consistent supply.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't just deliver food; we deliver trust. Every crate that
              leaves our dock has been inspected to ensure it meets the high
              standards our chefs and retailers expect.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                text: "We never compromise on the quality of our produce. If it's not the best, we don't sell it.",
              },
              {
                icon: Users,
                title: "Community",
                text: "We support local farmers and build lasting relationships with our clients.",
              },
              {
                icon: TrendingUp,
                title: "Integrity",
                text: "Honest pricing, transparent sourcing, and keeping our promises.",
              },
              {
                icon: Clock,
                title: "Reliability",
                text: "On-time delivery, every time. We know your business depends on us.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-muted/30 p-8 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm mb-4">
                  <val.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}
