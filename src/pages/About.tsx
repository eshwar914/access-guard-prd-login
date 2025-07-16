import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Zap, Heart, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Task Management",
      description: "Create, organize, and track your daily tasks with ease"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and achieve your personal and professional goals"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team on shared projects"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Fast and intuitive interface for maximum productivity"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Tasks Completed", value: "500K+", icon: CheckCircle },
    { label: "User Rating", value: "4.9", icon: Star },
    { label: "Countries", value: "50+", icon: Heart }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About To-Do App</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A simple, powerful, and beautiful task management application designed to help you stay organized and productive.
        </p>
        <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
          Version 2.0
        </Badge>
      </div>

      {/* Mission Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe that productivity should be simple and enjoyable. Our mission is to provide 
            a clean, intuitive, and powerful task management solution that helps individuals and 
            teams achieve their goals without the complexity of traditional project management tools.
          </p>
          <div className="flex justify-center">
            <Target className="h-16 w-16 text-primary" />
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Our Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Built With Modern Technology</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Our application is built using the latest web technologies to ensure 
            performance, security, and a great user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Modern UI"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Get in Touch</h3>
          <p className="text-muted-foreground">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="text-primary font-medium">
            contact@todoapp.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;