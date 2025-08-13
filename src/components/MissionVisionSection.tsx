import React from "react";
import { CheckCircle2, Target, Users, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced Header */}


        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-aos="fade-up">
            Our Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We connect with our clients, our communities, and our company. It makes us different. It makes us better.
          </p>
        </div>
        {/* Mission & Vision Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Our Culture Card */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <CardHeader className="relative pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/30 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-md">
                  <Target className="h-3 w-3 mr-1" />
                  Culture
                </Badge>
              </div>

              <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                Our Culture
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  "We communicate clearly, because in a world crowded with over-the-top marketing, simple wins.",
                  "We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.",
                  "Before you can market a business, you need to know its story."
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary/70 group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-300 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              
            </CardContent>
          </Card>

          {/* Our Commitment Card */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 via-secondary/3 to-accent/5 border-secondary/20 hover:border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <CardHeader className="relative pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-secondary/10 text-secondary-foreground border border-secondary/30 shadow-lg shadow-secondary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <Badge className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground border-0 shadow-md">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Commitment
                </Badge>
              </div>

              <CardTitle className="text-2xl font-bold text-secondary-foreground group-hover:text-secondary-foreground/90 transition-colors duration-300">
                Our Commitment
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  "We're the trusted partner that takes a proactive approach to your technology.",
                  "We're the fellow small business owner that understands your day-to-day needs.",
                  "We're the built-in IT support staff that's always there when you need us."
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent group-hover/item:text-accent/80 group-hover/item:scale-110 transition-all duration-300 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-xl">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: <Target className="h-6 w-6" />, title: "Excellence", desc: "Delivering quality solutions that exceed expectations" },
                  { icon: <Users className="h-6 w-6" />, title: "Partnership", desc: "Building lasting relationships through trust and collaboration" },
                  { icon: <Shield className="h-6 w-6" />, title: "Integrity", desc: "Maintaining transparency and honesty in all interactions" }
                ].map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <span className="text-primary">{value.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;